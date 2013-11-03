function clickHandler() {
                var whatsInside = $("#text").val();  
                $("#text_out").html(whatsInside.toUpperCase());
                console.log(whatsInside.toUpperCase());
            }

$(document).ready(function() {
    $(".calculator").each(function(){
        var inputBox = $('<input type="text" size="50">');
        var calcButton = $('<p><button>Calculate</button></p>')
        var output = $('<div id="text_out1"></div>')
        
        calcButton.on("click", function() {
            var whatsInside = inputBox.val()
            output.text(whatsInside.toUpperCase())
        });
        
        $(this).append(inputBox);
        $(this).append(calcButton);
        $(this).append(output);
    })
});