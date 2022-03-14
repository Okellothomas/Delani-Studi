// the what to do section. 
// $(document).ready(function(){
//     $("img#design").mouseover(click(function(){

//     })
// });

$(document).ready(function(){
    // $("img#design").mouseenter(function(){
        $("img#design").click(function(){
            $('h3#desing').css('color','black').css('font-size','20px').fadeToggle(2000);
            $('p#desig').css('color','green').css('font-size','20px').fadeToggle(2000).css('border','1px solid lime').css('font-weight','bold');
        });
    // });

    $("img#dev").click(function(){
        $('h3#desing').css('color','black').css('font-size','20px').fadeToggle(2000);
        $('p#desig').css('color','green').css('font-size','20px').fadeToggle(2000).css('border','1px solid lime').css('font-weight','bold');
    }); 


    $("img#product").click(function(){
        $('h3#desing').css('color','black').css('font-size','20px').fadeToggle(2000);
        $('p#desig').css('color','green').css('font-size','20px').fadeToggle(2000).css('border','1px solid lime').css('font-weight','bold');
    });
});