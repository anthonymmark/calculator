function clickHandler(index) {
                var whatsInside = $("#text"+index).val();  
                $("#text_out").html(whatsInside.toUpperCase());
                console.log(whatsInside.toUpperCase());
            }