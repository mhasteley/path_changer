var itWentBadly = function fail(a, resultOne, resultTwo) {
	$(a).next(".bad").html("Error - this is the wrong syntax for this type of path, try one of the others");
	$(resultOne).html("&nbsp;");
	$(resultTwo).html("&nbsp;");
}

$("#winBut").click(
	function checkerWin() {
		var pathStart = "\\\\sol\\";
		if ($("#winIn").val().indexOf(pathStart) > -1) {
			var str = $("#winIn").val();
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
		if ($("#linIn").val().indexOf(pathStart) > -1) {
			var str = $("#linIn").val();
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
		var pathStart = "/volumes/";
		if ($("#osxIn").val().indexOf(pathStart) > -1) {
			var str = $("#osxIn").val();
			var resLin = str.replace(pathStart, "smb://");
			var resWin = str.replace(pathStart, "\\\\sol\\").replace(/\//g, "\\");
			$("#osxResultLin").html(resLin);
			$("#osxResultWin").html(resWin);
			$(this).next(".bad").html("");
		}
		else {
			itWentBadly(this, "#osxResultLin", "#osxResultWin")
		}
	}
	);