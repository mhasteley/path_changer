function itWentBadly(what, resultOne, resultTwo) {
	$("div.bad").addClass("overlay").addClass("active");
	$(resultOne).html("&nbsp;");
	$(resultTwo).html("&nbsp;");
	$("div.result").removeClass("active");
};

function checkerAll() {
	var alpha = $("#allIn").val().toLowerCase();
	var winMatch = alpha.match(/\\\\[A-Za-z0-9]*\\[A-Za-z0-9]*/);
	var linMatch = alpha.match(/[A-Za-z0-9]*\:\/\/[A-Za-z0-9]*/);
	var osxMatch = alpha.match(/\/volumes\/[A-Za-z0-9]*/);
	var pathStart = ["\\\\", "\\", "://", "\/volumes\/"];
	var test = function test(platform) {
		var beta = $("#allIn").val().toLowerCase();
		var results = ["#allResultWin", "#allResultLin", "#allResultOSX"];
		var resWin = beta.replace(platform, pathStart[0].concat(alpha.substr(2, winMatch.length - 3)).concat(pathStart[1])).replace(/\//g, "\\");
		var resLin = beta.replace(platform, pathStart[2]).replace(/\\/g, "\/");
		var resOSX = beta.replace(platform, pathStart[3]).replace(/\\/g, "\/");
		$(results[0]).html(resWin);
		$(results[1]).html(resLin);
		$(results[2]).html(resOSX);
		$(this).next(".bad").html("");
		$("div.result").addClass("active");
		$("div.bad.overlay.active").removeClass("overlay").removeClass("active");
	}
	if (winMatch) {
		test(/\\\\[A-Za-z0-9]*\\/);
		// var stri = ;
		alert($("#allIn").val().toLowerCase().match(/\\\\[A-Za-z0-9]*\\[A-Za-z0-9]*/));
		// $("#allIn").val().toLowerCase().substr(2, stri)
	}
	else if (linMatch) {
		test(/[A-Za-z0-9]*\:\/\//);
	}
	else if (osxMatch) {
		test(/\/volumes\//);
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