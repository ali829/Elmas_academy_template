let courses = [
    // 0 means soon & 1 means new
    {
        title: "التسويق الرقمي",
        price: "200",
        studentsNumber: 20,
        totalHours: 25,
        topics:30,
        image_url:"assets/photos/formation/Digital-Marketing---Sub-Thumb.png",
        chapters:["مقدمة حول الدورة" , "التعريف بدور البرنامج واستعمالاته وتخصصاته" , "شرح واجهة البرنامج والأدوات تمرين / اختبار" , "تصميم بوستر سوشل ميديا"],
        teacher:{
            fullname: "احمد احمد",
            descreption: "احمد مدرب خبير بمجال تصميم الغرافيك حاصل على دبلوم من مدرسة الفنون الجميلة قام بتصميم أزيد من 320 تصميم و 20 مشروع"
        },
        // 0 means soon & 1 means new
        status:1,
        category:'التسويق الالكتروني '
    },
    {
        title: "ريادة الأعمال",
        price: "300",
        studentsNumber: 20,
        totalHours: 25,
        topics:30,
        image_url:"assets/photos/formation/Business-management---Sub-Thumb.png",
        chapters:["مقدمة حول الدورة" , "التعريف بدور البرنامج واستعمالاته وتخصصاته" , "شرح واجهة البرنامج والأدوات تمرين / اختبار" , ""],
        teacher:{
            fullname: "احمد احمد",
            descreption: "احمد مدرب خبير بمجال تصميم الغرافيك حاصل على دبلوم من مدرسة الفنون الجميلة قام بتصميم أزيد من 320 تصميم و 20 مشروع"
        },
        // 0 means soon & 1 means new
        status:0,
        category:'ريادة الأعمال'
    },
    {
        title: "تصميم العرافيك",
        price: "250",
        studentsNumber: 15,
        totalHours: 40,
        topics:25,
        image_url:"assets/photos/formation/Graphic-Design---Sub-Thumb.png",
        chapters:["مقدمة حول الدورة" , "التعريف بدور البرنامج واستعمالاته وتخصصاته" , "شرح واجهة البرنامج والأدوات تمرين / اختبار" , "تصميم بوستر سوشل ميديا"],
        teacher:{
            fullname: "احمد احمد",
            descreption: "احمد مدرب خبير بمجال تصميم الغرافيك حاصل على دبلوم من مدرسة الفنون الجميلة قام بتصميم أزيد من 320 تصميم و 20 مشروع"
        },
        // 0 means soon & 1 means new
        status:1,
        category:'تصميم العرافيك'
    },
    {
        title: "موشن جرافيك",
        price: "500",
        studentsNumber: 20,
        totalHours: 25,
        topics:30,
        image_url:"assets/photos/formation/Motion-Design---Sub-Thumb.png",
        chapters:["مقدمة حول الدورة" , "التعريف بدور البرنامج واستعمالاته وتخصصاته" , "شرح واجهة البرنامج والأدوات تمرين / اختبار" , "تصميم بوستر سوشل ميديا"],
        teacher:{
            fullname: "احمد احمد",
            descreption: "احمد مدرب خبير بمجال تصميم الغرافيك حاصل على دبلوم من مدرسة الفنون الجميلة قام بتصميم أزيد من 320 تصميم و 20 مشروع"
        },
        // 0 means soon & 1 means new
        status:1,
        category:'موشن جرافيك'
    },
    {
        title: "التصوير السينمائي الفوتوغرافي و تحرير الفيديو",
        price: "550",
        studentsNumber: 20,
        totalHours: 40,
        topics:30,
        image_url:"assets/photos/formation/Photo-Video---Sub-Thumb.png",
        chapters:["مقدمة حول الدورة" , "التعريف بدور البرنامج واستعمالاته وتخصصاته" , "شرح واجهة البرنامج والأدوات تمرين / اختبار" , "تصميم بوستر سوشل ميديا"],
        teacher:{
            fullname: "احمد احمد",
            descreption: "احمد مدرب خبير بمجال تصميم الغرافيك حاصل على دبلوم من مدرسة الفنون الجميلة قام بتصميم أزيد من 320 تصميم و 20 مشروع"
        },
        // 0 means soon & 1 means new
        status:1,
        category:'التصوير السينمائي الفوتوغرافي و تحرير الفيديو'
    },
    {
        title: "تطوير المواقع",
        price: "300",
        studentsNumber: 30,
        totalHours: 40,
        topics:20,
        image_url:"assets/photos/formation/Web-dev---Sub-Thumb.png",
        chapters:["مقدمة حول الدورة" , "التعريف بدور البرنامج واستعمالاته وتخصصاته" , "شرح واجهة البرنامج والأدوات تمرين / اختبار" , "تصميم بوستر سوشل ميديا"],
        teacher:{
            fullname: "احمد احمد",
            descreption: "احمد مدرب خبير بمجال تصميم الغرافيك حاصل على دبلوم من مدرسة الفنون الجميلة قام بتصميم أزيد من 320 تصميم و 20 مشروع"
        },
        // 0 means soon & 1 means new
        status:0,
        category:'تطوير المواقع'
    },
]

// courses filter



// settin up courses
buildCoursesSection(courses)
function buildCoursesSection(data){
    var coursesContainer =  document.querySelector('.courses');
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        var courseItem = `
        <div class="course-item ${(element.status == 1 ) ? '' : 'comming-soon'}">
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







// home page course detail popup
var btnCourseDeatils = document.querySelectorAll('.course-cta-more-details')
var popupCourseDeatils = document.querySelector('.course-detail-popup-container')
btnCourseDeatils.forEach((item,index)=>{
  item.addEventListener("click",()=>{
    popupCourseDeatils.classList.add('show')
  })
})
popupCourseDeatils.addEventListener('mouseup',(e)=>{
  if(e.target == popupCourseDeatils){
    popupCourseDeatils.classList.remove('show')
  }
})
// home page course detail popup
var btnSubscription = document.querySelectorAll('.course-cta-subsription')
var popupSubscription = document.querySelector('.course-subscription-popup-container')
var btnSubscription2 = document.querySelector('.single-course-subscribe-btn')
btnSubscription.forEach((item,index)=>{
  item.addEventListener("click",()=>{
    popupSubscription.classList.add('show')
  })
})
btnSubscription2.addEventListener('click' , () => {
  popupSubscription.classList.add('show')
})
popupSubscription.addEventListener('mouseup',(e)=>{
  if(e.target == popupSubscription){
    popupSubscription.classList.remove('show')
  }
})