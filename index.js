$(".btn").on("click", function(){
    var value = $("input").val();
    value += $(this).text();
    $("input").val(value);
});

$(".calculate").on("click", function(){
   try{
    const result = eval($("input").val());
    $("input").val(result);
   }
   catch(error){
    $("input").val("Error");
   }
});

$(".clear").on("click", function(){
    $("input").val("");
});