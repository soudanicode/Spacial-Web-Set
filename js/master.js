// select landing page
landingPage = document.querySelector(".landing-page");
const getspan=document.querySelectorAll(".random-backg span");
// Option random background---
let backroundNumber = 4;
let backgroundInterval;
// دالة التشغيل
function randommizeImg(){
    clearInterval(backgroundInterval);
    if(localStorage.getItem("optionBackg") === "true"){
        backgroundInterval = setInterval(function (){
        // generate Random Number 
            let randomNumber= Math.floor(Math.random()*backroundNumber) + 1;
        // change background image url
            landingPage.style.backgroundImage = `url("/images/photo\ ${randomNumber}.jpg")`;
        },2000)
    }
}
randommizeImg();
// Active Button function
function activeStatus(){
    // remove active class from all children
    getspan.forEach((ele)=> {
        ele.classList.remove("active");
    })
    // 
    if(localStorage.getItem("optionBackg") === "true"){
        document.querySelector(".yes").classList.add("active");
    }
    else{
        document.querySelector(".no").classList.add("active");
    }
}
activeStatus()
getspan.forEach(span => {
    // click on every items
    span.addEventListener("click", (el) => {
        localStorage.setItem("optionBackg",el.target.dataset.background);
        randommizeImg()
        activeStatus()
    })
})
// END Option random background---

// setting box---
let settingBox = document.querySelector(".setting-box");
let iconSetting = document.querySelector(".icon-setting");
iconSetting.onclick = function (e){
    e.stopPropagation();
    // show setting box
    settingBox.classList.toggle("show"); 
}
// اخفاء الصندوق عند الضغط في اي مكان 
document.addEventListener("click" , (e) => {
    if (settingBox.classList.contains("show")){
        // التحقق من ان الضغط خارج الصندوق والايقونة
        if (!settingBox.contains(e.target)){
            settingBox.classList.remove("show");
        }
    }
});
// end Setting box---
// switch color---
const getli=document.querySelectorAll(".colors-list li");
// loop on list items
getli.forEach(li => {
    // adding background colors for each items using data set (dont using css)
    li.style.backgroundColor = li.dataset.color
    // click on every list
    li.addEventListener("click", (el) => {
        // save color in locale storage
        localStorage.setItem("optionColor",el.target.dataset.color);
        // set color in root
        document.documentElement.style.setProperty('--spacial-color',localStorage.getItem("optionColor"));
        // remove active class for evre children
        document.querySelectorAll(".colors-list li").forEach((el)=> {
            el.classList.remove("active");
            // cheking if spacial color == color saved in lacale storage
            if (el.dataset.color == localStorage.getItem("optionColor") ){
                // add active class
                li.classList.add("active")
            }  
        });
        let storedColor = localStorage.getItem("optionColor");
    });
});
// check if locale storage is empty
if (localStorage.getItem("optionColor") !== null){
    document.documentElement.style.setProperty('--spacial-color',localStorage.getItem("optionColor"));
}
// end switch color---








