// the what to do section. 
// $(document).ready(function(){
//     $("img#design").mouseover(click(function(){

//     })
// });

$(document).ready(function(){
    // $("img#design").mouseenter(function(){
    $("img#design").click(function(){
        $('h3#desing').css('color','black').css('font-size','20px').fadeToggle(2000).css('font-weight', 'bold');
        $('p#desig').css('color','black').css('color','black').css('font-size','13px').fadeToggle(2000);
        $('p.design').hide();
        $('img#design').hide();
     });

    $("img#dev").click(function(){
        $('h3#deve').css('color','black').css('font-size','20px').fadeToggle(2000).css('font-weight', 'bold');
        $('p#devel').css('color','black').css('font-size','13px').fadeToggle(2000);
        $('p.de').hide();
        $('img#dev').hide();
    }); 

    $("img#product").click(function(){
        $('h3#prod').css('color','black').css('font-size','20px').fadeToggle(2000).css('font-weight', 'bold');
        $('p#produc').css('color','black').css('font-size','13px').fadeToggle(2000);
        $('p.pro').hide();
        $('img#product').hide();
    });

    $('h3#desing').click(function(){
        $('p.design').show();
        $('img#design').show();
        $('h3#desing').hide();
        $('p#desig').hide();

     });
     $('p#desig').click(function(){
        $('p.design').show();
        $('img#design').show();
        $('h3#desing').hide();
        $('p#desig').hide();
     });

     $('h3#deve').click(function(){
        $('h3#deve').hide();
        $('p#devel').hide();
        $('p.de').show();
        $('img#dev').show();

     });
     $('p#devel').click(function(){
        $('h3#deve').hide();
        $('p#devel').hide();
        $('p.de').show();
        $('img#dev').show();
     });

     $('h3#prod').click(function(){
        $('h3#prod').hide();
        $('p#produc').hide();
        $('p.pro').show();
        $('img#product').show();

     });
     $('p#produc').click(function(){
        $('h3#prod').hide();
        $('p#produc').hide();
        $('p.pro').show();
        $('img#product').show();
     });
});