var itWentBadly = function () {
	$("div.bad").addClass("overlay").addClass("active");
	$("div.result").removeClass("active");
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
		var resLin = alpha.replace(platform, "smb:\/\/" + beta + "\\" + "$2").replace(/\\/g, "\/").replace(/\%20/g, " ");
		var resOSX = alpha.replace(platform, "\/volumes\/$2").replace(/\\/g, "\/").replace(/\%20/g, " ");
		$(results[0]).html(resWin);
		$(results[1]).html(resLin);
		$(results[2]).html(resOSX);
		$("div.result").addClass("active");
		$("div.bad.overlay.active").removeClass("overlay").removeClass("active");
	};
	var otherReplace = function (platform) {
		var resWin = alpha.replace(platform, "\\\\$2$3").replace(/\//g, "\\").replace(/\%20/g, " ");
		var resLin = alpha.replace(platform, "smb:\/\/$2$3").replace(/\\/g, "\/").replace(/\%20/g, " ");
		var resOSX = alpha.replace(platform, "\/volumes$3").replace(/\\/g, "\/").replace(/\%20/g, " ");
		$(results[0]).html(resWin);
		$(results[1]).html(resLin);
		$(results[2]).html(resOSX);
		$("div.result").addClass("active");
		$("div.bad.overlay.active").removeClass("overlay").removeClass("active");
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
			if ($("p#allResultWin").html().length > 0) {
				$("div.result").removeClass("active");
			}
		}
	}
};

$("#allBut").click(checkerAll);

$("#allIn").keyup(keyPresses);

$("#windowsServer").keyup(keyPresses);