$(".agregar").on("click", function(e){
    e.preventDefault(); // evita que se recargue la página  
        
    /*Elementos creados*/
    var newDiv = $("<div>");
    var txtVal = $('#newText').val();  
     
    newDiv.addClass("lis"); //adds class

    /* appends e inner HTML */    
    $(".Lista").append(newDiv); 
    $(newDiv).html(`<li>
                    <p class="itemShop"> ${txtVal} </p> 
                    <button class="checar">check</button>
                    <button class="del">delete</button>               
                    </li>`); 
}); 

$(".Lista").on("click",".checar",function(){
    $("li").toggleClass("chec"); //todos los elementos

}); 

$(".Lista").on("click",".del",function(){
    $(this).parent().remove(); //falta quitar el div
     
}); 