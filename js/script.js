//toggling on and off the design
$('#designIcon, #design').click(function () {
    $('#designIcon,#design').toggle();

});
//toggling off and on the development section
$('#developmentIcon,#development').click(function () {
    $('#development,#developmentIcon').toggle();

});
//toggling off and on the product management section

$('#products, #productsIcon').click(function () {
    $('#products,#productsIcon').toggle();
})
$('#portfolioImages').children().children().hover(function () {
    $('p', this).toggle();
    $('img', this).toggleClass('blurry_effect');

});

$('#mc-embedded-subscribe-form').submit(function (e) {
    e.preventDefault();
    var em = $('#email').val().toLowerCase();
    var name = $('#name').val();
    var message = $('#message').val();

   
    validateForm(name,em,message);

     if(validateEmail(em) !== true) {
        alert("Enter a valid email");
        

        return;
    }
    else{
        alert("We have received your message , we will get in touch");
        
        this.reset();
    }

});
//validate email
function validateEmail(email) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(regex)) {

        return (true);
    }
    else {

        return (false);
    }

}
function validateForm(name,email,message){
    if (name === "") {
        alert("Please input name");
        return;
    }
    else if (email === "") {
        alert("Please input email");
        return;
    }
    else if (message === "") {
        alert("Please input ypur message");
        return;
    }
}