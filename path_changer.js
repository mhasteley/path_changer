var itWentBadly = function fail(what, resultOne, resultTwo) {
	$("div.bad").addClass("overlay").addClass("active");
	$(resultOne).html("&nbsp;");
	$(resultTwo).html("&nbsp;");
	$("div.result").removeClass("active");
};

$("#allBut").click(
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
			alert(pathStart[0].substr(0, 6));
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
