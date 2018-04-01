$(".phone-box").hover(function(){
    $(".code-tips").show()
}, function(){
    $(".code-tips").hide()
})

$(".side-oper .normal").mouseenter(function(){
    $(this).find("div").show();
})
$(".side-oper .normal").mouseleave(function(){
    $(this).find("div").hide();
})