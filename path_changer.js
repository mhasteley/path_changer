function itWentBadly(what, resultOne, resultTwo) {
	$("div.bad").addClass("overlay").addClass("active");
	$(resultOne).html("&nbsp;");
	$(resultTwo).html("&nbsp;");
	$("div.result").removeClass("active");
};

function checkerAll() {
	var alpha = $("#allIn").val().toLowerCase();
	var beta = $("#windowsServer").val().toLowerCase();
	var winMatch = alpha.indexOf(alpha.match(/\\\\[A-Za-z0-9]*\\[A-Za-z0-9]/));
	var linMatch = alpha.indexOf(alpha.match(/[A-Za-z0-9]*\:\/\/[A-Za-z0-9]/));
	var osxMatch = alpha.indexOf(alpha.match(/\/volumes\/[A-Za-z0-9]*/));
	var pathStart = ["\\\\", "\\", "smb\:\/\/", "\/volumes\/"];
	var test = function test(platform) {
		var gamma = $("#allIn").val().toLowerCase();
		var results = ["#allResultWin", "#allResultLin", "#allResultOSX"];
		var resWin = gamma.replace(platform, pathStart[0].concat(beta).concat(pathStart[1])).replace(/\//g, "\\").replace(/\%20/g, " ");
		var resLin = gamma.replace(platform, pathStart[2].concat(beta).concat(pathStart[1])).replace(/\\/g, "\/").replace(/\%20/g, " ");
		var resOSX = gamma.replace(platform, pathStart[3]).replace(/\\/g, "\/").replace(/\%20/g, " ");
		$(results[0]).html(resWin);
		$(results[1]).html(resLin);
		$(results[2]).html(resOSX);
		$(this).next(".bad").html("");
		$("div.result").addClass("active");
		$("div.bad.overlay.active").removeClass("overlay").removeClass("active");
	}
	if (winMatch == 0) {
		test(/\\\\[A-Za-z0-9]*\\/);
	}
	else if (linMatch == 0) {
		test(/[A-Za-z0-9]*\:\/\/[A-Za-z0-9]*\//);
	}
	else if (osxMatch == 0) {
		test(/\/volumes\//);
	}
	else {
		itWentBadly(this, "#osxResultLin", "#osxResultWin");
	}
};

$("#allIn").keypress(
	function enterKey(e) {
		if (e.which == 13) {
			$("#allBut").click();
		}
	});
$("#allBut").click(checkerAll);

$("#allIn").keyup(
	function serverTest() {
		var alpha = $("#allIn").val().toLowerCase();
		var osxMatch = alpha.indexOf(alpha.match(/\/volumes\/[A-Za-z0-9]*/));
		if (osxMatch == 0) {
			$("div.server").removeClass("hidden");
		}
		else {
			$("div.server").addClass("hidden");
		}
	});