<<<<<<< HEAD
var itWentBadly = function fail(a, resultOne, resultTwo) {
	$(a).next("div").addClass("overlay").addClass("active").children("p").html("Error - this is the wrong syntax for this type of path, try one of the others");
=======
var itWentBadly = function itWentBadly(what, resultOne, resultTwo) {
	$(what).next(".bad").html("Error - this is the wrong syntax for a filesystem path, try one of the others");
>>>>>>> origin/master
	$(resultOne).html("&nbsp;");
	$(resultTwo).html("&nbsp;");
};

<<<<<<< HEAD
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
=======
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
>>>>>>> origin/master
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
<<<<<<< HEAD
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
=======
		var pathStart = "smb://";
		var str = $("#linIn").val().toLowerCase();
		if (str.indexOf(pathStart) > -1) {
			var resWin = str.replace(pathStart, "\\\\sol\\").replace(/\//g, "\\");
			var resOSX = str.replace(pathStart, "\/volumes\/");
			$("#linResultWin").html(resWin);
			$("#linResultOSX").html(resOSX);
>>>>>>> origin/master
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
<<<<<<< HEAD
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
=======
		var str = $("#osxIn").val().toLowerCase();
		if (str.indexOf(pathStart) > -1) {
			var resLin = str.toLowerCase().replace(pathStart, "smb://");
			var resWin = str.toLowerCase().replace(pathStart, "\\\\sol\\").replace(/\//g, "\\");
			$("#osxResultLin").html(resLin);
			$("#osxResultWin").html(resWin);
>>>>>>> origin/master
			$(this).next(".bad").html("");
		}
		else {
			itWentBadly(this, "#osxResultLin", "#osxResultWin")
			$("div").removeClass("active");
		}
	}
	);
*/
