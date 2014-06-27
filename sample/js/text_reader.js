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
            var file = this.files[0];
            var reader = new FileReader();

            reader.readAsText(file, "UTF-8");
            reader.addEventListener('load', function(e) {
                // ファイルのロード完了時
                $(".file-name").text("ファイル名: " + file.name);
                $(".file-type").text("ファイルの種類: " + file.type);
                $(".file-size").text("ファイルサイズ: " + file.size + "Byte");

                $("#result").text(reader.result);
            }, true);

            event.preventDefault();
        });
    }
});
