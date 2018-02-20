$(document).ready(function(){
    //hamburguesa index
    $(".burger").click(function(){
        $(".menu").animate({width:"toggle"},500);
    });
    $(".cerrar").click(function(){
        $(".menu").animate({width:"toggle"},500);
    });
    //hamburguesa para las demas páginas
    $(".burger2").click(function(){
        $(".burger2").toggleClass("abierto");
        $(".menu2").animate({width:"toggle"},500);
        $(".menu2 a").toggleClass("aparicion");
    });
    //scroll suave
    $("a").on("click",function(){
        if (this.hash !== "") {
            var hash = this.hash;
            $("html, body").animate({
                //objeto con una propiedad y valor
                scrollTop: $(hash).offset().top
            }, 1800);
            //sintaxis de animate
            // animate ({objeto}, duración);
        }
    });
    //ventana modal
    $("#open").click(function(){
        $(".modal,.overlay").addClass("visible");
    });
    $("#close, .overlay").click(function(){
        $(".modal,.overlay").removeClass("visible");
    });
});