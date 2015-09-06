var itWentBadly = function () {
	$("div.bad").addClass("overlay").addClass("active");
	$("div.result").removeClass("active");
};

var checkerAll = function () {
	var alpha = $("#allIn").val().toLowerCase();
	var beta = $("#windowsServer").val().toLowerCase();
	var winMatch = alpha.indexOf(alpha.match(/\\\\[A-Za-z0-9]*\\[A-Za-z0-9]/));
	var linMatch = alpha.indexOf(alpha.match(/[A-Za-z0-9]*\:\/\/[A-Za-z0-9]/));
	var osxMatch = alpha.indexOf(alpha.match(/\/volumes\/[A-Za-z0-9]*/));
	var pathStart = ["\\\\", "\\", "smb\:\/\/", "\/volumes\/", "/\\\\[A-Za-z0-9]*\\/", "/[A-Za-z0-9]*\:\/\/[A-Za-z0-9]*\//"];
	var results = ["#allResultWin", "#allResultLin", "#allResultOSX"];
	var osxReplace = function (platform) {
		var resWin = alpha.replace(platform, pathStart[0].concat(beta).concat(pathStart[1])).replace(/\//g, "\\").replace(/\%20/g, " ");
		var resLin = alpha.replace(platform, pathStart[2].concat(beta).concat(pathStart[1])).replace(/\\/g, "\/").replace(/\%20/g, " ");
		var resOSX = alpha.replace(platform, pathStart[3]).replace(/\\/g, "\/").replace(/\%20/g, " ");
		$(results[0]).html(resWin);
		$(results[1]).html(resLin);
		$(results[2]).html(resOSX);
		$("div.result").addClass("active");
		$("div.bad.overlay.active").removeClass("overlay").removeClass("active");
	};
	var otherReplace = function (platform, platformShort) {
		var resWin = alpha.replace(platformShort, pathStart[0]).replace(/\//g, "\\").replace(/\%20/g, " ");
		var resLin = alpha.replace(platformShort, pathStart[2]).replace(/\\/g, "\/").replace(/\%20/g, " ");
		var resOSX = alpha.replace(platform, pathStart[3]).replace(/\\/g, "\/").replace(/\%20/g, " ");
		$(results[0]).html(resWin);
		$(results[1]).html(resLin);
		$(results[2]).html(resOSX);
		$("div.result").addClass("active");
		$("div.bad.overlay.active").removeClass("overlay").removeClass("active");
	}
	if (winMatch == 0) {
		otherReplace(/\\\\[A-Za-z0-9]*\\/, /\\\\/);
	}
	else if (linMatch == 0) {
		otherReplace(/[A-Za-z0-9]*\:\/\/[A-Za-z0-9]*\//, /[A-Za-z0-9]*\:\/\//);
	}
	else if (osxMatch == 0) {
		osxReplace(/\/volumes\//);
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
			var osxMatch = alpha.indexOf(alpha.match(/\/volumes\/[A-Za-z0-9]*/));
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