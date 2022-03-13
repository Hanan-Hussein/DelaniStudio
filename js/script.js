//toggling on and off the design
$('#designIcon, #design').click(function () {
    $('#designIcon').toggle();
    $('#design').toggle();

});
//toggling off and on the development section
$('#developmentIcon,#development').click(function () {
    $('#development').toggle();
    $('#developmentIcon').toggle();

});
//toggling off and on the product management section

$('#products, #productsIcon').click(function () {
    $('#products').toggle();
    $('#productsIcon').toggle();
})
$('#portfolioImages').children().children().hover(function () {
    $('p', this).toggle();
    $('img', this).toggleClass('blurry_effect');
});

$('#contactForm').submit(function (e) {
    e.preventDefault();
    var em = $('#email').val().toLowerCase();
    var name = $('#name').val();
    var message = $('#message').val();

    if (name === "") {
        alert("Please input name");
    }
    else if (email === "") {
        alert("Please input email");
    }
    else if (message === "") {
        alert("Please input ypur message");
    }


    if (validateEmail(em) !== true) {
        alert("Enter a valid email");

    }
})
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
