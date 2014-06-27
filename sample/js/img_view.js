$(function(){

    // File APIが使えるかチェック
    if (window.File) {
        console.log("File API is supported");
    } else {
        console.log("File API is not supported!");
    }

    initialize();

    // ===============================================
    // functions
    // ================================================
    function initialize() {
        // ファイルを選択した時
        $("#input-file").on("change", function(event) {
            var files = event.target.files;
            for(var i = 0; i < files.length; i++) {
                var file = files[i];
                var reader = new FileReader();

                reader.onload = function(e) {
                    var div = $("<div>");
                    var img = $("<img>");
                    img.attr("src", e.target.result);
                    div.append(img);

                    $("#result").append(div);
                }
                reader.readAsDataURL(file);
            }
            event.preventDefault();
        });
    }
});
