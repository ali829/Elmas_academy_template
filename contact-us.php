<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- flat icon -->
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-solid-straight/css/uicons-solid-straight.css'>
    <!-- slick -->
    <link rel="stylesheet" href="slick-1.8.1/slick/slick.css">
    <link rel="stylesheet" href="slick-1.8.1/slick/slick-theme.css">
    <!-- AOS -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>
<body>
    
<!--  navbar -->
<?php 
    include('partial/header.php');
?>
<!-- end of navbar -->

<!-- top hero -->
<div class="hero-top-container-contact">
    <h3 style="animation: 0.7s ease-out 0s 1 slideInFromLeft;"> لا تتردد بالإتصال بنا</h3>
    <img style="position: absolute; bottom: 0; " src="assets/photos/hero_picture/Ellipse 1.png" alt="">
    <img style="z-index: 11; animation: 0.7s ease-out 0s 1 slideInFromLeft;" src="assets/photos/hero_picture/Contact 1.png" alt="">
</div>
<!-- end of top hero -->


<!-- contact us form  -->
<div class="contact-us-form-container">
    <div class="contact-us-form-content">
        <p class="contact-us-form-title">إتصل بنا</p>
        <div class="contact-us-form-items">
        <div class="contact-us-form-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13190.702092662545!2d-6.5758451!3d34.2568224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa7380c710fdec455!2sELMAS%20MEDIA%20-%20Digital%20Agency!5e0!3m2!1sfr!2sma!4v1671119009739!5m2!1sfr!2sma" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <form class="elmas-contact-form" onsubmit="sendContactMail()">
            <label for="">الإسم:</label>
            <input type="text" name="" id="contact-name" required>
            <label for="">رقم الهاتف:</label>
            <input class="contact-phone" type="tel" name="" id="contact-phone" required>
            <label for="">البريد الإلكتروني:</label>
            <input type="email" name="" id="contact-mail" required>
            <label for="">اللرسالة:</label>
            <textarea name="" id="contact-subject" cols="30" rows="5" required></textarea>
            <input type="submit" value="إرسال">
            <div class="contact-form-message" style="display: flex; align-items: center; background-color: #55efc4; margin: 10px 0; padding: 10px; transition: var(--global-transition); transform: scale(0);">
                <i class="fi fi-sr-check" style="margin: 0 20px; color: var(--dark-blue-); font-size: 18px; font-weight: 800;"></i>
                <p class="color: var(--dark-blue-);">تم إرسال البريد بنجاح</p>
            </div>
        </form>
        </div>
    </div>
</div>
<!-- end of contact us form  -->




<!--  footer -->
<?php 
    include('partial/footer.php');
?>
<!-- end of footer -->


    <!-- slick js -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="slick-1.8.1/slick/slick.min.js"></script>
    <!-- AOS -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <!-- smtp js -->
    <script src="https://smtpjs.com/v3/smtp.js">
    </script>
    <!-- js -->
    <script src="js/script.js"></script>
    <script src="js/contact.js"></script>
</body>
</html>