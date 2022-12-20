//  contact form
$('.contact-phone').keypress(function(e){
    if (e.which < 48 || e.which > 57)
    {
        e.preventDefault();
    }
})



document.querySelector('.elmas-contact-form').addEventListener('submit',function(e){
    e.preventDefault();
    const email = document.getElementById('contact-mail');
    const message = document.getElementById('contact-subject');
    const phoneNumber = document.getElementById('contact-phone');
    const fullName = document.getElementById('contact-name');
    // Email.send({
    //     Host : "smtp.gmail.com",
    //     Username : "alielyassraoui@gmail.com",
    //     Password : "ixkcdtklnjclrbcj",
    //     To : 'alielyassraoui@gmail.com',
    //     From : email ,
    //     Subject : `message: ${message} , phone: ${phoneNumber} , full name: ${fullName}`,
    //     Body : "And this is the body"
    // }).then(
    //   message => alert(message)
    // );
    
})