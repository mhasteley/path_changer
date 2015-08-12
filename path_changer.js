var itWentBadly = function fail(a, resultOne, resultTwo) {
	$(a).next("div").addClass("overlay").addClass("active").children("p").html("Error - this is the wrong syntax for this type of path, try one of the others");
	$(resultOne).html("&nbsp;");
	$(resultTwo).html("&nbsp;");
}

var winPathStart = "\\\\sol\\";
var linPathStart = "smb://";
var osxPathStart = "/volumes/";

$("#winBut").click(
	function checkerWin() {
		var pathStart = winPathStart;
		var pathCheck = winPathStart;
		if ($("#winIn").val().toLowerCase().indexOf(pathStart) > -1) {
			var str = $("#winIn").val();
			var res = str.substr(pathCheck.length);
			var resLinux = res.replace(pathCheck, "smb://").replace(/\\/g, "/");
			var resOSX = res.replace(pathCheck, "/volumes/").replace(/\\/g, "/");
			$("#winResultLin").html(linPathStart + resLinux);
			$("#winResultOSX").html(osxPathStart + resOSX);
			$("#winResultLin").parent("div").addClass("active");
			$("#winResultOSX").parent("div").addClass("active");
			$(this).next(".bad").html("");
		}
		else {
			itWentBadly(this, "#winResultLin", "#winResultOSX")
			$("div").removeClass("active");
		}
	}
	);

$("#linBut").click(
	function checkerLin() {
		var pathStart = "smb\:\/\/";
		var pathCheck = linPathStart;
		if ($("#linIn").val().toLowerCase().indexOf(pathStart) > -1) {
			var str = $("#linIn").val();
			var res = str.substr(pathCheck.length);
			var resWin = res.replace(pathCheck, "\\\\sol\\").replace(/\//g, "\\");
			var resOSX = res.replace(pathCheck, "\/volumes\/");
			$("#linResultWin").html(winPathStart + resWin);
			$("#linResultOSX").html(osxPathStart + resOSX);
			$("#linResultWin").parent("div").addClass("active");
			$("#linResultOSX").parent("div").addClass("active");
			$(this).next(".bad").html("");
		}
		else {
			itWentBadly(this, "#linResultWin", "#linResultOSX")
			$("div").removeClass("active");
		}
	}
	);

$("#osxBut").click(
	function checkerOSX() {
		var pathStart = "\/volumes\/";
		var pathCheck = osxPathStart;
		if ($("#osxIn").val().toLowerCase().indexOf(pathStart) > -1) {
			var str = $("#osxIn").val();
			var res = str.substr(pathCheck.length);
			var resLin = res.toLowerCase().replace(pathCheck, "smb://");
			var resWin = res.toLowerCase().replace(pathCheck, "\\\\sol\\").replace(/\//g, "\\");
			$("#osxResultLin").html(linPathStart + resLin);
			$("#osxResultWin").html(winPathStart + resWin);
			$("#osxResultLin").parent("div").addClass("active");
			$("#osxResultWin").parent("div").addClass("active");
			$(this).next(".bad").html("");
		}
		else {
			itWentBadly(this, "#osxResultLin", "#osxResultWin")
			$("div").removeClass("active");
		}
	}
	);

/*
$("#allBut").click(
	function checkerAll() {
		var pathStartWin = "\\\\sol\\";
		var pathStartLin = "smb://";
		var pathStartOSX = "\/volumes\/";
		if ($("#allIn").val().toLowerCase() == pathStartWin) {
			var str = $("#allIn").val();
			var resWin = str.toLowerCase().replace(pathStart, "\\\\sol\\").replace(/\//g, "\\");
			var resLin = str.toLowerCase().replace(pathStart, "smb://");
			var resOSX = str.replace(pathStart, "\/volumes\/");
			$("#allResultWin").html(resWin);
			$("#allResultLin").html(resLin);
			$("#allResultOSX").html(resOSX);
			$(this).next(".bad").html("");
		}
		else {
			itWentBadly(this, "#osxResultLin", "#osxResultWin")
		}
	}
	);
	*/