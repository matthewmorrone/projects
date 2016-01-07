<? extract($_GET); ?>
<html>
<head>
<title><?= $handle ?></title>
<!-- <title><?= filemtime(__FILE__); ?></title> -->
<meta charset="UTF-8" />
<script src="/prefixfree.js"></script>

<link href="/psi.ico" 										rel="shortcut icon" type="image/x-icon" />
<link href="/reset.css" 									rel="stylesheet" 	type="text/css" />
<!-- <link href="/bootstrap/css/bootstrap.css" 					rel="stylesheet" type="text/css"></link> -->
<link href="/base.css" 										rel="stylesheet" 	type="text/css" />
<link href="/style.css" 									rel="stylesheet" 	type="text/css" />
<link href="/jquery.ui.css" 								rel="stylesheet" 	type="text/css" />
<link href="/fonts/font-awesome/css/font-awesome.min.css" 	rel="stylesheet" 	type="text/css" />



<script src="/jquery.js"></script>
<script src="/jquery.ui.js"></script>
<script>
less = {
	env: "development"
}
</script>
<style type="text/less">

/*@head-height: 5%;*/
@fullheight: 100%;
@fullwidth: 100%;

/*@height = `document.body.clientHeight`;*/

@inputheight: 5%;
@inputwidth: 5%;

@editorheight: @fullheight - @inputheight;

.both {
	float: left;
	overflow-y: scroll;
}
.border {
	border: 1px solid black;
	border-collapse: collapse;
}
.font {
	font-size: 20px;
}
.dirty {
	background-color: rgba(255, 0, 0, 0.25);
}
.clean {
	background-color: rgba(0, 255, 0, 0.25);
}
#editor {
	width: @fullwidth;
	max-width: @fullwidth;
	height: @editorheight;
	max-height: @editorheight;
	.both;
	.border;
}
#handle {
	width: @fullwidth - @inputwidth * 2;
	max-width: @fullwidth;
	height: @inputheight;
	max-height: @inputheight;
	.font;
	.both;
	.border;
}
select {
	.both;
	.font;
	width: @inputwidth * 2;
	height: @inputheight;
}
</style>
<script src="/less.js"></script>
<script src="/starch/starch.utils.js"></script>
<script src="/starch/starch.object.js"></script>

<script>

(function() {
    var i, len, methods = Object.getOwnPropertyNames(Array.prototype)
    for (i = 0, len = methods.length; i < len; i += 1) {
        if (arguments.constructor.prototype.hasOwnProperty(methods[i]) === false) {
            arguments.constructor.prototype.define(methods[i], Array.prototype[methods[i]])
        }
        if (NodeList.prototype.hasOwnProperty(methods[i]) === false) {
            NodeList.prototype.define(methods[i], Array.prototype[methods[i]])
        }
    }
}())

var url = "api.php", opt;
localStorage.setItem("original", "")

$(function() {
	opt = {
		mode: "ls",
		// handle: "..",
		include: "file",
		dataType: "html:select",
		id: "filetree",
		exts: "css,php,js,html,txt,csv",
		debug: true
	};
	// alert(url, opt.str())
	$.post(url, opt, function(data) {
		log(data)
		$("input").before(data);
		// $("#handle").val("base.css").change()
	}, "text");


	$(document).on("change", "select", function(e) {
		var $handle = $(e.target).val();
		opt = {mode: "read", handle:$handle, dataType:"raw"}
		$.post(url, opt, function(data) {
			$("#editor").val(data);
			localStorage.setItem("original", data)
			$("#handle").val($handle);
		}, "text");
	});

	// $(document).on("keyup", "textarea", function(e) {
	// 	var $textarea = $(e.target);


	// })

	$(document).on("keydown", "textarea", function(e) {
		var $textarea = $(e.target);
		// console.assert($textarea.val() === localStorage.getItem("original"))
		// if ($textarea.val() !== localStorage.getItem("original")) {
		// 	$textarea.removeClass("clean").addClass("dirty")
		// }
		opt = {
			mode: "write",
			handle: $("#handle").val(),
			content: $textarea.val(),
			dataType: "raw"
		}
		if (e.which === 13 && (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
			log("sending...", opt, e)

			$.post(url, opt, function(data, a) {
				log("updated!", data, a)
				$textarea.val(data)//;.removeClass("dirty").addClass("clean")

			}, text)
		}
	})
})


</script>
</head>
<body>
<input type="text" name="handle" id="handle" value="<?= $handle ?>" />
<textarea id='editor' contenteditable='true' spellcheck='off' class='clean'><?

// if ($handle) {
// 	echo file_get_contents($handle);
// }

?></textarea>

</body>
</html>
