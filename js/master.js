// select landing page
landingPage = document.querySelector(".landing-page");
backroundNumber = 4;
setInterval(function (){
    // generate Random Number 
    randomNumber= Math.floor(Math.random()*backroundNumber) + 1;
    // change background image url
    landingPage.style.backgroundImage = `url("/images/photo\ ${randomNumber}.jpg")`;
},10000)
// setting box
let settingBox = document.querySelector(".setting-box");
let iconSetting = document.querySelector(".icon-setting");
iconSetting.onclick = function (e){
    e.stopPropagation();
    // show setting box
    settingBox.classList.toggle("show");
    
};
// اخفاء الصندوق عند الضغط في اي مكان 
document.addEventListener("click" , (e) => {
    if (settingBox.classList.contains("show")){
        // التحقق من ان الضغط خارج الصندوق والايقونة
        if (!settingBox.contains(e.target)){
            settingBox.classList.remove("show");
        }
    }
});
// end Setting box
// switch color
const getli=document.querySelectorAll(".colors-list li");
// loop on list items
getli.forEach(li => {
    // click on every list
    li.addEventListener("click", (el) => {
        // set color in root
        document.documentElement.style.setProperty('--spacial-color',localStorage.getItem("optionColor"));
        // save color in locale storage
        localStorage.setItem("optionColor",el.target.dataset.color);
        // remove active class for evre children
        document.querySelectorAll(".colors-list li").forEach((el)=> {
            el.classList.remove("active");
            // cheking if spacial color == color saved in lacale storage
            if (el.dataset.color == localStorage.getItem("optionColor") ){
                // add active class
                li.classList.add("active")
            }
});
    });
});
// check if locale storage is empty
let storedColor = localStorage.getItem("optionColor");
if (storedColor !== null){
    document.documentElement.style.setProperty('--spacial-color',localStorage.getItem("optionColor"));
    
}







