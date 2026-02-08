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
    

})






