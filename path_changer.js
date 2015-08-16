var itWentBadly = function itWentBadly(what, resultOne, resultTwo) {
	$(what).next(".bad").html("Error - this is the wrong syntax for a filesystem path, try one of the others");
	$(resultOne).html("&nbsp;");
	$(resultTwo).html("&nbsp;");
};

$("#allBut").click(
	function checkerAll() {
		var test = function test(platform) {
			var str = $("#allIn").val();
			var pathStart = ["\\\\sol\\", "smb://", "\/volumes\/"];
			var results = ["#allResultWin", "#allResultLin", "#allResultOSX"];
			var resWin = str.toLowerCase().replace(pathStart[platform], pathStart[0]).replace(/\//g, "\\");
			var resLin = str.toLowerCase().replace(pathStart[platform], pathStart[1]);
			var resOSX = str.replace(pathStart[platform], pathStart[2]);
			$(results[0]).html(resWin);
			$(results[1]).html(resLin);
			$(results[2]).html(resOSX);
			$(this).next(".bad").html("");
		}
		if ($("#allIn").val().toLowerCase().substr(0, 6) == pathStart[0].substr(0, 6)) {
			test(1);
		}
		else if ($("#allIn").val().toLowerCase().substr(0, 6) == pathStart[1].substr(0, 6)) {
			test(2);
		}
		else if ($("#allIn").val().toLowerCase().substr(0, 9) == pathStart[2].substr(0, 9)) {
			test(3);
		}
		else {
			itWentBadly(this, "#osxResultLin", "#osxResultWin");
			/* alert(pathStart[0].substr(0, 6)); */
		}
	}
	);

/* Individual Path Convertors */
/*
$("#winBut").click(
	function checkerWin() {
		var pathStart = "\\\\sol\\";
		var str = $("#winIn").val().toLowerCase();
		if (str.indexOf(pathStart) > -1) {
			var resLinux = str.replace(pathStart, "smb://").replace(/\\/g, "/");
			var resOSX = str.replace(pathStart, "/volumes/").replace(/\\/g, "/");
			$("#winResultLin").html(resLinux);
			$("#winResultOSX").html(resOSX);
			$(this).next(".bad").html("");
		}
		else {
			itWentBadly(this, "#winResultLin", "#winResultOSX")
		}
	}
	);

$("#linBut").click(
	function checkerLin() {
		var pathStart = "smb://";
		var str = $("#linIn").val().toLowerCase();
		if (str.indexOf(pathStart) > -1) {
			var resWin = str.replace(pathStart, "\\\\sol\\").replace(/\//g, "\\");
			var resOSX = str.replace(pathStart, "\/volumes\/");
			$("#linResultWin").html(resWin);
			$("#linResultOSX").html(resOSX);
			$(this).next(".bad").html("");
		}
		else {
			itWentBadly(this, "#linResultWin", "#linResultOSX")
		}
	}
	);

$("#osxBut").click(
	function checkerOSX() {
		var pathStart = "\/volumes\/";
		var str = $("#osxIn").val().toLowerCase();
		if (str.indexOf(pathStart) > -1) {
			var resLin = str.toLowerCase().replace(pathStart, "smb://");
			var resWin = str.toLowerCase().replace(pathStart, "\\\\sol\\").replace(/\//g, "\\");
			$("#osxResultLin").html(resLin);
			$("#osxResultWin").html(resWin);
			$(this).next(".bad").html("");
		}
		else {
			itWentBadly(this, "#osxResultLin", "#osxResultWin")
		}
	}
	);
*/