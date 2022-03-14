   // the hover implementation

$(document).ready(function(){

    $("div#portfolio").hover(function(){
        $("div#portfolio").css('background-color','white').css('opacity','0.2');
        $('p#studio').text("Delani Studio").show().css('font-weight','bolder').css('font-size','34px').css('color','red').css('opacity','1').css('background-color','white').css('border','1px solid green');
        $('h3#titlePortfolio').hide();
    
    }, function(){
        $("div#portfolio").css('background-color','white').css('opacity','1');
        $('p#studio').hide();
        $('h3#titlePortfolio').show();

    });
});

