
$("#photo_url").on("blur", function(event){
    var photo_url = $(this).val();
    // alert(photo_url);
    var preview = $("#preview");
    if (photo_url) {
        preview.attr("src", photo_url);
        preview.fadeIn(1000)
    } else {
        preview.fadeOut(800)
        alert("No cats! ^^")
    }
    
});