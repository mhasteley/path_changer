var itWentBadly = function () {
	$("div.bad").removeClass("hidden");
	$("div.result").addClass("hidden");
};

var checkerAll = function () {
	var alpha = $("#allIn").val();
	var beta = $("#windowsServer").val().toLowerCase();
	var winMatch = alpha.indexOf(alpha.match(/[\\|\/]{2}[^\\\/]+[\\\/].*/i));
	var linMatch = alpha.indexOf(alpha.match(/[^\\\/\s]+\:[\\|\/]{2}[^\\\/]+.*/i));
	var osxMatch = alpha.indexOf(alpha.match(/[\\|\/]volumes[\\|\/].*/i));
	var results = ["#allResultWin", "#allResultLin", "#allResultOSX"];
	var osxReplace = function (platform) {
		var resWin = alpha.replace(platform, "\\\\" + beta + "\\" + "$2").replace(/\//g, "\\").replace(/\%20/g, " ");
		var resLin = alpha.replace(platform, "smb:\/\/" + beta + "\\" + "$2").replace(/\\/g, "\/").replace(/\s/g, "%20");
		var resOSX = alpha.replace(platform, "\/volumes\/$2").replace(/\\/g, "\/").replace(/\%20/g, " ");
		$(results[0]).val(resWin);
		$(results[1]).val(resLin);
		$(results[2]).val(resOSX);
		$("div.result").removeClass("hidden");
		$("div.bad").addClass("hidden");
	};
	var otherReplace = function (platform) {
		var resWin = alpha.replace(platform, "\\\\$2$3").replace(/\//g, "\\").replace(/\%20/g, " ");
		var resLin = alpha.replace(platform, "smb:\/\/$2$3").replace(/\\/g, "\/").replace(/\s/g, "%20");
		var resOSX = alpha.replace(platform, "\/volumes$3").replace(/\\/g, "\/").replace(/\%20/g, " ");
		$(results[0]).val(resWin);
		$(results[1]).val(resLin);
		$(results[2]).val(resOSX);
		$("div.result").removeClass("hidden");
		$("div.bad").addClass("hidden");
	}
	if (winMatch == 0) {
		otherReplace(/([\\|\/]{2})([^\\\/]+\s*)([\\|\/].*)/i);
	}
	else if (linMatch == 0) {
		otherReplace(/([^\\\/]+\:[\\|\/]{2})([^\\\/]+\s*)(.*)/i);
	}
	else if (osxMatch == 0) {
		osxReplace(/([\\|\/][^\\\/]+\s*[\\|\/])(.*)/i);
	}
	else {
		itWentBadly();
	}
};

var keyPresses = function enterKey(e) {
	if (e.which == 13) {
		$("#allBut").click();
	}
	else {
		var alpha = $("#allIn").val().toLowerCase();
		var osxMatch = alpha.indexOf(alpha.match(/\/volumes\/\S*/i));
		if (osxMatch == 0) {
			$("div.server").removeClass("hidden");
		}
		else {
			$("div.server").addClass("hidden");
			if ($("input#allResultWin").html().length > 0) {
				$("div.server").addClass("hidden");
			}
		}
	}
};

$("input.result").on("click", function () {
	$(this).focus().select().addClass("selected");
}).on("blur", function () {
	$(this).removeClass("selected");
});

$("#allBut").on("click", checkerAll);

$("#allIn").keyup(keyPresses);

$("#windowsServer").keyup(keyPresses);