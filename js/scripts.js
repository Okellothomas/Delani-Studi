// the what to do section. 
// $(document).ready(function(){
//     $("img#design").mouseover(click(function(){

//     })
// });

$(document).ready(function(){
    // $("img#design").mouseenter(function(){
    $("img#design").click(function(){
        $('h3#desing').css('color','lime').css('font-size','20px').fadeToggle(2000).css('border','1px solid black').css('text-align','center');
        $('p#desig').css('color','blue').css('font-size','20px').fadeToggle(2000).css('border','1px solid lime').css('font-weight','bold');
     });
    // });
    $("img#design").mouseleave(function(){
        $('h3#desing').fadeOut('slow');
        $('p#desig').fadeOut('slow');
    });

    $("img#dev").click(function(){
        $('h3#deve').css('color','red').css('font-size','20px').fadeToggle(2000);
        $('p#devel').css('color','brown').css('font-size','20px').fadeToggle(2000).css('border','1px solid lime').css('font-weight','bold');
    }); 

    $("img#dev").mouseleave(function(){
        $('h3#deve').fadeOut('slow');
        $('p#devel').fadeOut('slow');
    });

    $("img#product").click(function(){
        $('h3#prod').css('color','blue').css('font-size','20px').fadeToggle(2000);
        $('p#produc').css('color','green').css('font-size','20px').fadeToggle(2000).css('border','1px solid lime').css('font-weight','bold');
    });

    $("img#product").mouseleave(function(){
        $('h3#prod').fadeOut('slow');
        $('p#produc').fadeOut('slow');
    });
});