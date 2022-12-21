//  contact form
$('.contact-phone').keypress(function(e) {
    if (e.which < 48 || e.which > 57) {
        e.preventDefault();
    }
})



document.querySelector('.elmas-contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('contact-mail');
    const message = document.getElementById('contact-subject');
    const phoneNumber = document.getElementById('contact-phone');
    const fullName = document.getElementById('contact-name');

})



//MESSAGE SENT
function sendContactMail(e) {


}

$('.elmas-contact-form').submit(function() {


    var email = $('#contact-mail');
    var message = $('#contact-subject');
    var phoneNumber = $('#contact-phone');
    var fullName = $('#contact-name');

    $.ajax({
        url: 'mail-handler.php',
        method: 'POST',
        data: {
            name: fullName.val(),
            email: email.val(),
            message: message.val(),
            phone: phoneNumber.val(),
        },
        success: function(data) {
            $('.contact-form-message').css('transform', 'scale(1)');
            $('.elmas-contact-form')[0].reset();
            s
        }
    })
});