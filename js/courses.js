let courses = [
    // 0 means soon & 1 means new
    {
        title: "دورة التسويق الإلكتروني الشاملة الإحترافية  -  Formation Marketing Digital",
        price: "200",
        studentsNumber: 20,
        totalHours: 25,
        topics: 30,
        image_url: "assets/photos/formation/Digital-Marketing---Sub-Thumb.png",
        chapters: ["مقدمة حول الدورة", "التعريف بدور البرنامج واستعمالاته وتخصصاته", "شرح واجهة البرنامج والأدوات تمرين / اختبار", "تصميم بوستر سوشل ميديا"],
        teacher: {
            fullname: "احمد احمد",
            descreption: "احمد مدرب خبير بمجال تصميم الغرافيك حاصل على دبلوم من مدرسة الفنون الجميلة قام بتصميم أزيد من 320 تصميم و 20 مشروع"
        },
        // 0 means soon & 1 means new
        status: 1,
        category: 'marketing-digitale'
    },
    {
        title: "  دورة ريادة الأعمال و القيادة  -  Formation leadershiping",
        price: "300",
        studentsNumber: 20,
        totalHours: 25,
        topics: 30,
        image_url: "assets/photos/formation/Business-management---Sub-Thumb.png",
        chapters: ["مقدمة حول الدورة", "التعريف بدور البرنامج واستعمالاته وتخصصاته", "شرح واجهة البرنامج والأدوات تمرين / اختبار", ""],
        teacher: {
            fullname: "احمد احمد",
            descreption: "احمد مدرب خبير بمجال تصميم الغرافيك حاصل على دبلوم من مدرسة الفنون الجميلة قام بتصميم أزيد من 320 تصميم و 20 مشروع"
        },
        // 0 means soon & 1 means new
        status: 0,
        category: 'business-management'
    },
    {
        title: "دورة الغرافيك ديزاين  -  Graphic Design",
        price: "250",
        studentsNumber: 15,
        totalHours: 40,
        topics: 25,
        image_url: "assets/photos/formation/Graphic-Design---Sub-Thumb.png",
        chapters: ["مقدمة حول الدورة", "التعريف بدور البرنامج واستعمالاته وتخصصاته", "شرح واجهة البرنامج والأدوات تمرين / اختبار", "تصميم بوستر سوشل ميديا"],
        teacher: {
            fullname: "احمد احمد",
            descreption: "احمد مدرب خبير بمجال تصميم الغرافيك حاصل على دبلوم من مدرسة الفنون الجميلة قام بتصميم أزيد من 320 تصميم و 20 مشروع"
        },
        // 0 means soon & 1 means new
        status: 1,
        category: 'graphic-design'
    },
    {
        title: "دورة الموشن غرافيك و الأنيميشن - Animation & motion graphic ",
        price: "500",
        studentsNumber: 20,
        totalHours: 25,
        topics: 30,
        image_url: "assets/photos/formation/Motion-Design---Sub-Thumb.png",
        chapters: ["مقدمة حول الدورة", "التعريف بدور البرنامج واستعمالاته وتخصصاته", "شرح واجهة البرنامج والأدوات تمرين / اختبار", "تصميم بوستر سوشل ميديا"],
        teacher: {
            fullname: "احمد احمد",
            descreption: "احمد مدرب خبير بمجال تصميم الغرافيك حاصل على دبلوم من مدرسة الفنون الجميلة قام بتصميم أزيد من 320 تصميم و 20 مشروع"
        },
        // 0 means soon & 1 means new
        status: 1,
        category: 'graphic-design'
    },
    {
        title: "  دورة التصوير و المونتاج الشاملة - Photo & video et montage ",
        price: "550",
        studentsNumber: 20,
        totalHours: 40,
        topics: 30,
        image_url: "assets/photos/formation/Photo-Video---Sub-Thumb.png",
        chapters: ["مقدمة حول الدورة", "التعريف بدور البرنامج واستعمالاته وتخصصاته", "شرح واجهة البرنامج والأدوات تمرين / اختبار", "تصميم بوستر سوشل ميديا"],
        teacher: {
            fullname: "احمد احمد",
            descreption: "احمد مدرب خبير بمجال تصميم الغرافيك حاصل على دبلوم من مدرسة الفنون الجميلة قام بتصميم أزيد من 320 تصميم و 20 مشروع"
        },
        // 0 means soon & 1 means new
        status: 1,
        category: 'photo-video-montage'
    },
    {
        title: "  دورة تصميم المواقع و تطويرها - Web Design & development ",
        price: "300",
        studentsNumber: 30,
        totalHours: 40,
        topics: 20,
        image_url: "assets/photos/formation/Web-dev---Sub-Thumb.png",
        chapters: ["مقدمة حول الدورة", "التعريف بدور البرنامج واستعمالاته وتخصصاته", "شرح واجهة البرنامج والأدوات تمرين / اختبار", "تصميم بوستر سوشل ميديا"],
        teacher: {
            fullname: "احمد احمد",
            descreption: "احمد مدرب خبير بمجال تصميم الغرافيك حاصل على دبلوم من مدرسة الفنون الجميلة قام بتصميم أزيد من 320 تصميم و 20 مشروع"
        },
        // 0 means soon & 1 means new
        status: 0,
        category: 'web-dev'
    },
]

// courses filter



// settin up courses
buildCoursesSection(courses)

function buildCoursesSection(data) {
    var coursesContainer = document.querySelector('.courses');
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        var courseItem = `
        <div  class="${element.category} course-item ${(element.status == 1 ) ? '' : 'comming-soon'}">
        <img src="${element.image_url}" alt="" srcset="" width="100%" height="40%">
        <div class="course-details">
            <p class="course-details-title"> ${element.title} </p>
            <p class="course-details-price">
                ${element.price}
                <span>د.م</span>
            </p>
        </div>
        <div style="height: 1px; width: 90%; background-color: var(--dark-blue-50); margin: 5px auto;"></div>
        <div class="course-info">
            <div style="display: flex; justify-content: space-between; padding: 5px 20px; align-items: center;">
                <span style="font-family: 'Cairo'; font-style: normal; font-weight: 500; font-size: 13px; color: var(--dark-blue-80);">تقييمات المتدربين</span>
                <span>
                    <i class="fi fi-ss-star" style="color: var(--dark-blue-20);"></i>
                    <i class="fi fi-ss-star" style="color: var(--yellow-);"></i>
                    <i class="fi fi-ss-star" style="color: var(--yellow-);"></i>
                    <i class="fi fi-ss-star" style="color: var(--yellow-);"></i>
                    <i class="fi fi-ss-star" style="color: var(--yellow-);"></i>
                </span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 5px 20px; align-items: center; font-family: 'Cairo'; font-style: normal; font-weight: 500; font-size: 13px; color: var(--dark-blue-80);">
                <span style="direction: ltr;">${element.studentsNumber} متدرب <i class="fi fi-sr-users" style="margin: 0 4px;"></i></i></span>
                <span style="direction: ltr;">${element.topics} درس <i class="fi fi-sr-book-open-cover"></i></span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 5px 20px; align-items: center; font-family: 'Cairo'; font-style: normal; font-weight: 500; font-size: 13px; color: var(--dark-blue-80);">
                <span style="direction: ltr;">${element.totalHours} ساعات  <i class="fi fi-sr-clock" style="margin: 0 4px;"></i></i></span>
                <span style="direction: ltr;">شهادة متدرب <i class="fi fi-sr-diploma"></i></span>
            </div>
        </div>
        <div class="course-cta">
            <button class="course-cta-subsription">${(element.status == 1 ) ? 'إشترك بالدورة' : 'حجز'}</button>
            <button class="course-cta-more-details">تفاصيل</button>
        </div>
    </div>
        `;
        coursesContainer.innerHTML += courseItem;
    }
}

function singleCourseDetailBuild(singleCourse) {
    document.querySelector('.single-course-title').innerHTML = singleCourse.title;
    document.querySelector('.single-course-price').innerHTML = singleCourse.price + '<span>د.م</span>';
    document.querySelector('.single-course-img').setAttribute('src', singleCourse.image_url);
    document.querySelector('.single-course-students').innerHTML = singleCourse.studentsNumber;
    document.querySelector('.single-course-topics').innerHTML = singleCourse.topics;
    document.querySelector('.single-course-hours').innerHTML = singleCourse.totalHours;
    document.querySelector('.single-course-teacher-name').innerHTML = singleCourse.teacher.fullname;
    document.querySelector('.single-course-teacher-desc').innerHTML = singleCourse.teacher.descreption;
    let chaptercontainer = document.querySelector('.chapters-container');
    chaptercontainer.innerHTML = "";
    for (let i = 0; i < singleCourse.chapters.length; i++) {
        const element = singleCourse.chapters[i];
        chaptercontainer.innerHTML += `<li>${element}</li>`
    }
}

function subscriptionBuild(singleCourse, index) {
    document.querySelector('.course-subscription-top-bar-title').innerHTML = singleCourse.title;
    document.querySelector('.course-subscription-top-bar-thumbnail-img').setAttribute('src', singleCourse.image_url);
    document.querySelector('.form-control').value = index;
}


// home page course detail popup
var btnCourseDeatils = document.querySelectorAll('.course-cta-more-details')
var popupCourseDeatils = document.querySelector('.course-detail-popup-container')
btnCourseDeatils.forEach((item, index) => {
    item.addEventListener("click", () => {
        popupCourseDeatils.classList.add('show')
        singleCourseDetailBuild(courses[index])
        subscriptionBuild(courses[index], index)
    })
})
popupCourseDeatils.addEventListener('mouseup', (e) => {
    if (e.target == popupCourseDeatils) {
        popupCourseDeatils.classList.remove('show')
    }
})

// home page course detail popup
var btnSubscription = document.querySelectorAll('.course-cta-subsription')
var popupSubscription = document.querySelector('.course-subscription-popup-container')
var btnSubscription2 = document.querySelector('.single-course-subscribe-btn')
btnSubscription.forEach((item, index) => {
    item.addEventListener("click", () => {
        popupSubscription.classList.add('show')
        subscriptionBuild(courses[index], index)
    })
})
btnSubscription2.addEventListener('click', () => {
    popupSubscription.classList.add('show')
})
popupSubscription.addEventListener('mouseup', (e) => {
    if (e.target == popupSubscription) {
        popupSubscription.classList.remove('show')
    }
})


//  sp order msg
let orderBtn = document.querySelector('.course-subscription-btn');
orderBtn.addEventListener('click', () => {
    let clientName = `${document.querySelector('#clientName').value}`
    let courseTitle = `${ document.querySelector('.course-subscription-top-bar-title').textContent}`
    let url = `https://wa.me/212663200090?text=Bonjour, svp je souhaite m'inscrire sous le nom ${clientName}  à la formation : ${courseTitle} Et j’aimerais avoir plus de détails concernant la durée de formation`
    window.open(url, '_blank');
})

// courses filter           
$('.courses-filter-item').click(function() {
    //active filter
    $(this).addClass('active-filter').siblings().removeClass('active-filter');
    const currentFilter = $(this).attr('data-filter');
    if (currentFilter == 'all') {
        $('.course-item').show('200')
    } else {
        $('.course-item').not(`.${currentFilter}`).hide('200')
        $('.course-item').filter(`.${currentFilter}`).show('200')
    }
})