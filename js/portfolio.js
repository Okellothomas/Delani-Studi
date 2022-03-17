   // the hover implementation
$(document).ready(function(){

    $("img#work1").hover(function(){
        $("img#work1").css('background-color','white').css('opacity','0.2');
        $('p#studio').text("Black Drawing").show().css('font-weight','bold').css('font-size','13.5px').css('color','red').css('opacity','1').css('background-color','white').css('border','1px solid green');
    }, function(){
        $("img#work1").css('background-color','white').css('opacity','1');
        $('p#studio').hide();

    });


    $("img#work2").hover(function(){
        $("img#work2").css('background-color','white').css('opacity','0.2');
        $('p#ontario').text("Ontario Security").show().css('font-weight','bold').css('font-size','13.5px').css('color','blue').css('opacity','1').css('background-color','white').css('border','1px solid brown');
    
    }, function(){
        $("img#work2").css('background-color','white').css('opacity','1');
        $('p#ontario').hide();

    });

    $("img#work3").hover(function(){
        $("img#work3").css('background-color','white').css('opacity','0.2');
        $('p#piramid').text("Great Pyramid").show().css('font-weight','bold').css('font-size','13.5px').css('color','orange').css('opacity','1').css('background-color','white').css('border','1px solid blue');
    
    }, function(){
        $("img#work3").css('background-color','white').css('opacity','1');
        $('p#piramid').hide();

    });


    $("img#work4").hover(function(){
        $("img#work4").css('background-color','white').css('opacity','0.2');
        $('p#carry').text("Jam Carry").show().css('font-weight','bold').css('font-size','13.5px').css('color','lime').css('opacity','1').css('background-color','white').css('border','1px solid red');
    
    }, function(){
        $("img#work4").css('background-color','white').css('opacity','1');
        $('p#carry').hide();

    });


    $("img#work5").hover(function(){
        $("img#work5").css('background-color','white').css('opacity','0.2');
        $('p#day').text("Great Day").show().css('font-weight','bold').css('font-size','13.5px').css('color','black').css('opacity','1').css('background-color','white').css('border','1px solid orange');
    
    }, function(){
        $("img#work5").css('background-color','white').css('opacity','1');
        $('p#day').hide();

    });

    $("img#work6").hover(function(){
        $("img#work6").css('background-color','white').css('opacity','0.2');
        $('p#cal').text("My Calculator").show().css('font-weight','bold').css('font-size','13.5px').css('color','dark').css('opacity','1').css('background-color','white').css('border','1px solid gray');
    
    }, function(){
        $("img#work6").css('background-color','white').css('opacity','1');
        $('p#cal').hide();

    });


    $("img#work7").hover(function(){
        $("img#work7").css('background-color','white').css('opacity','0.2');
        $('p#burned').text("Burned").show().css('font-weight','bold').css('font-size','13.5px').css('color','gray').css('opacity','1').css('background-color','white').css('border','1px solid blue');
    
    }, function(){
        $("img#work7").css('background-color','white').css('opacity','1');
        $('p#burned').hide();

    });


    $("img#work8").hover(function(){
        $("img#work8").css('background-color','white').css('opacity','0.2');
        $('p#girafee').text("Girafee Restaurant").show().css('font-weight','bolder').css('font-size','13.5px').css('color','red').css('opacity','1').css('background-color','white').css('border','1px solid green');
    
    }, function(){
        $("img#work8").css('background-color','white').css('opacity','1');
        $('p#girafee').hide();

    });

});

