var editor = CodeMirror.fromTextArea(document.querySelector("textarea"), {
    lineNumbers: true,
    theme: "3024-day",
    mode: "javascript",
    smartIndent: "true",
    keyup: function(cm, ob) {        
        $("canvas").remove()
        var renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setSize(width, height);
        log(editor.getValue())

        try {
            eval(editor.getValue())
            localStorage.setItem("code", editor.getValue())
            document.body.appendChild(renderer.domElement);

        }
        catch(e) {
            log(e)
        }
        

        
    },
    "":""
});