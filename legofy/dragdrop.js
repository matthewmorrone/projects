var log = console.log.bind(console);
function cancel(e) {
	e.preventDefault();
	return false;
}
var dropbox;
function handleFiles(files) {
	var file = files[0]

	var imageType = /^image\//
	if (!imageType.test(file.type)) {
		return
	}
	
	var img = document.getElementsByTagName("img")[0];
	img.file = file;
	// transform(img)
	// var lego = transform(img)
	// log(img, lego)
	// preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.
	
	var reader = new FileReader();
	reader.onload = (function(a) { 
		return function(e) { 
			// var t = transform(a)
			// log(e.target.result, lego, t)
			a.src = e.target.result; 
			// transform(a)
			log(a, e)
		}; 
	})(img);
	reader.readAsDataURL(file);
}
function dragenter(e) {
	e.stopPropagation();
	e.preventDefault();
}

function dragover(e) {
	e.stopPropagation();
	e.preventDefault();
}

function drop(e) {
	e.stopPropagation();
	e.preventDefault();

	var dt = e.dataTransfer;
	var files = dt.files;

	handleFiles(files);
}
