const form=document.querySelector("form")
const fio=document.querySelector("#fio")
const myplace=document.querySelector("#myplace")
const date_of_start=document.querySelector("#date_of_start")
const persons=document.querySelector("#persons")
const nights=document.querySelector("#nights")

const travel=document.querySelector("header h1")
window.addEventListener("scroll",function(event){
    console.log (scrollY)
    if(scrollY>100){
        travel.style.marginLeft=scrollY*-1+100+"px"
    }
    else{
        travel.style.marginLeft="50px"
    }
})

const aaaL=document.querySelector("#left")
const aaaR=document.querySelector("#right")
window.addEventListener("scroll",function(event){
    if(scrollY>600){
        aaaL.style.transform="translateX(-100px)"
        aaaR.style.transform="translateX(100px)"
}
if(scrollY>1000){
    aaaL.style.transform="translateX(0)"
    aaaR.style.transform="translateX(0)"
}})

const chImg=document.querySelector("#ch img")
const chTxt=document.querySelector("#ch div")
window.addEventListener("scroll",function(event){
    console.log (scrollY)
    if(scrollY>600){
        chImg.style.transform="rotateY(360deg) translateX(300px)"
        chTxt.style.transform="scale(0.8)"
    }
    if(scrollY>1000){
        chImg.style.transform="rotateY(0) translateX(0)"
        chTxt.style.transform="scale(1)"
    }
})
const eg=document.querySelectorAll("#egypt img")
const egt=document.querySelector("#egypt div")
window.addEventListener("scroll",function(event){
    console.log (scrollY)
    if(scrollY>600){
        eg[0].style.opacity="0"
        eg[1].style.opacity="0"
        egt.style.color="white"
    }
    if(scrollY>1000){
        eg[0].style.opacity="1"
        eg[1].style.opacity="1"
        egt.style.color="black"
    }
}
)//opacity color