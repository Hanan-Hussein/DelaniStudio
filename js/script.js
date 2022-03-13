//toggling on and off the design
$('#designIcon, #design').click(function(){
    $('#designIcon').toggle();
    $('#design').toggle();

});
//toggling off and on the development section
$('#developmentIcon,#development').click(function(){
    $('#development').toggle();
    $('#developmentIcon').toggle();

});
//toggling off and on the product management section

$('#products, #productsIcon').click(function(){
    $('#products').toggle();
    $('#productsIcon').toggle();
})
$('#portfolioImages').children().children().hover(function(){
    $('p',this).toggle();
    $('img',this).toggleClass('blurry_effect');
});

$('#contactForm').submit(function(e){
    e.preventDefault();
    
})

