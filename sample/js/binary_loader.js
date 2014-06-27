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
                    // ファイルのロード完了時
                    //$(".file-name").text("ファイル名: " + file.name);
                    //$(".file-type").text("ファイルの種類: " + file.type);
                    var bitmap = new Bitmap(e.target.result);
                    /*
                    console.log(bitmap.getBfType());
                    console.log(bitmap.getBfSize());
                    console.log(bitmap.getBfOffBits());
                    console.log(bitmap.getBcSize());
                    console.log(bitmap.getBcWidth());
                    console.log(bitmap.getBcHeight());
                    console.log(bitmap.getBcPlanes());
                    console.log(bitmap.getBcBitCount());
                    */
                    var gray_binary = bitmap.toGray();

                    var div = $("<div>");
                    var img = $("<img>");
                    var a = $("<a>");
                    //p.text();
                    img.attr("src", gray_binary);
                    a.attr("href", gray_binary);
                    a.append(img);
                    div.append(a);
                    


                    $("#result").append(div);
                }
                reader.readAsArrayBuffer(file);
            }
            event.preventDefault();
        });
    }
});
