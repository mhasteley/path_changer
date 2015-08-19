function itWentBadly(what, resultOne, resultTwo) {
	$("div.bad").addClass("overlay").addClass("active");
	$(resultOne).html("&nbsp;");
	$(resultTwo).html("&nbsp;");
	$("div.result").removeClass("active");
};

function checkerAll() {
	var pathStart = ["\\\\sol\\", "smb://", "\/volumes\/"];
	var test = function test(platform) {
		var str = $("#allIn").val();
		var pathStart = ["\\\\sol\\", "smb://", "\/volumes\/"];
		var results = ["#allResultWin", "#allResultLin", "#allResultOSX"];
		var resWin = str.toLowerCase().replace(platform, pathStart[0]).replace(/\//g, "\\");
		var resLin = str.toLowerCase().replace(platform, pathStart[1]).replace(/\\/g, "\/");
		var resOSX = str.toLowerCase().replace(platform, pathStart[2]).replace(/\\/g, "\/");
		$(results[0]).html(resWin);
		$(results[1]).html(resLin);
		$(results[2]).html(resOSX);
		$(this).next(".bad").html("");
		$("div.result").addClass("active");
		$("div.bad.overlay.active").removeClass("overlay").removeClass("active");
	}
	if ($("#allIn").val().toLowerCase().substr(0, 6) == pathStart[0].substr(0, 6)) {
		test("\\\\sol\\");
	}
	else if ($("#allIn").val().toLowerCase().substr(0, 6) == pathStart[1].substr(0, 6)) {
		test("smb://");
	}
	else if ($("#allIn").val().toLowerCase().substr(0, 9) == pathStart[2].substr(0, 9)) {
		test("\/volumes\/");
	}
	else {
		itWentBadly(this, "#osxResultLin", "#osxResultWin");
	}
};

$("#allIn").keypress(function(e) {
    if(e.which == 13) {
    $("#allBut").click();
    }
});
$("#allBut").click(checkerAll);