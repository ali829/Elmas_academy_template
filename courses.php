<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Courses</title>
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

<!-- hero top -->
<div class="hero-top-container-courses">
    <h3>جميع الدورات</h3>
    <img style="animation: 0.7s ease-out 0s 1 slideInFromLeft;" src="assets/photos/hero_picture/Frame.png" alt="">
</div>
<!-- end of hero top -->

<!-- courses  -->
<div class="courses-container">
    <div class="courses-content">
        <p class="courses-title" data-aos="fade-right">
            الدورات التعليمية
        </p>
        <div class="courses-filter">
            <button data-filter="all" class="courses-filter-item active-filter" data-aos="fade-up">الكل</button>
            <button data-filter="graphic-design" class="courses-filter-item" data-aos="fade-up">الفن والتصميم</button>
            <button data-filter="photo-video-montage" class="courses-filter-item" data-aos="fade-up">التصوير والمونطاج</button>
            <button data-filter="marketing-digitale" class="courses-filter-item" data-aos="fade-up">التسويق الالكتروني</button>
        </div>
        <div class="courses" data-aos="fade-up">

        </div>
    </div>
    <div class="course-detail-popup-container">
        <div class="single-course-details-container">
            <img class="single-course-img" src="assets/photos/formation/Photo-Video---Sub-Thumb.png" alt="">
            <div class="course-details">
                <p class="course-details-title single-course-title"> دورة تعلم برنامج Adobe Photoshop من الصفر الى الإحتراف </p>
                <p class="course-details-price single-course-price">
                    99
                    <span>د.م</span>
                </p>
            </div>
            <div style="width: 80%; height: 1px; margin: 0 auto; background-color: var(--dark-blue-); border-radius: 1px;"></div>
            <div class="single-course-details-content">
                <div class="single-course-info">
                    <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-start; padding: 0 20px;  font-family: 'Cairo'; font-style: normal; font-weight: 500; font-size: 13px; color: var(--dark-blue-80);">
                        <span style="direction: ltr; margin: 20px 0;"><span class="single-course-students">+12</span> متدرب <i class="fi fi-sr-users" style="margin: 0 1px;"></i></i></span>
                        <span style="direction: ltr; margin: 20px 0;"><span class="single-course-topics">20</span> درس <i class="fi fi-sr-book-open-cover"></i></span>
                    </div>
                    <div style="text-align: right; display: flex; flex-direction: column; align-items: start; padding: 0 20px;  font-family: 'Cairo'; font-style: normal; font-weight: 500; font-size: 13px; color: var(--dark-blue-80);">
                        <span style="direction: ltr; margin: 20px 0;"><span class="single-course-hours">2</span> ساعات  <i class="fi fi-sr-clock" style="margin: 0 1px;"></i></i></span>
                        <span style="direction: ltr; margin: 20px 0;">شهادة متدرب <i class="fi fi-sr-diploma"></i></span>
                    </div>
                </div>
                <div class="single-courses-chapters">
                    <h3>محاور الدورة:</h3>
                    <ul class="chapters-container">
                        <li>مقدمة حول الدورة</li>
                        <li>التعريف بدور البرنامج واستعمالاته وتخصصاته</li>
                        <li>شرح واجهة البرنامج والأدوات</li>
                        <li>تمرين / اختبار</li>
                        <li>تصميم بوستر سوشل ميديا</li>
                        <li>تحميل ملحقات وأدوات ثانوية</li>
                    </ul>
                </div>
            </div>
            <div class="single-course-teacher-container">
                <div class="single-course-teacher-pic">
                  
                </div>
                <h3>
                    <span>المدرب:</span>
                   <span class="single-course-teacher-name"> </span>
                </h3>
                <p class="single-course-teacher-desc">
                   
                </p>
            </div>
            <div class="single-course-footer">
                <button class="single-course-subscribe-btn">إشترك بالدورة</button>
            </div>
        </div>
    </div>
    <div class="course-subscription-popup-container">
        <div class="course-subscription-content">
            <h3>الاشتراك بالدورة</h3>
            <div class="course-subscription-top-bar">
                <div class="course-subscription-top-bar-thumbnail"><img class="course-subscription-top-bar-thumbnail-img" width="100%" height="100%" src="assets/photos/formation/Photo-Video---Sub-Thumb.png" alt=""></div>
                <div class="course-subscription-top-bar-title">دورة تعلم برنامج Adobe Photoshop من الصفر الى الإحتراف</div>
            </div>
            <form action="">
                <div class="course-subscription-form-item">
                    <label for="">الإسم:</label>
                    <input type="text" id="clientName">
                </div>
                <!-- <div class="course-subscription-form-item">
                    <label for="">الدورة:</label>
                    <select class="form-control">
                        <option value="0">التسويق الرقمي</option>
                        <option value="1">ريادة الأعمال </option>
                        <option value="2">تصميم الغرافيك</option>
                        <option value="3">موشن جرافيك</option>
                        <option value="4">التصوير السينمائي الفوتوغرافي و تحرير الفيديو</option>
                        <option value="5">تطوير المواقع</option>
                    </select>
                </div> -->
                <div class="course-subscription-form-item">
                    <button type="button" class="course-subscription-btn">أرسل الطّلب</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- end of courses  -->


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
<!-- js -->
<script src="js/script.js"></script>
<script src="js/courses.js"></script>
</body>
</html>