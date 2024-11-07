const gameContainer=document.querySelector(".container"),
userResult=document.querySelector(".user_result img"),
cpuResult=document.querySelector(".cpu_result img"),
result=document.querySelector(".result"),
optionimage=document.querySelectorAll(".option-image");
optionimage.forEach((image,index)=>
{
    image.addEventListener("click",(e)=>{
        image.classList.add("active");
        optionimage.forEach((image2,index2)=>{
            index !== index2 && image2.classList.remove("active");
});
gameContainer.classList.add("start");
let time=setTimeout(() => {
    gameContainer.classList.remove("start")
let imageScr=e.target.querySelector("img").src;
userResult.src=imageScr;
let randomNumber=Math.floor(Math.random()*3);
let cpuImages=["assets/image/R (2).png","assets/image/R (3).png","assets/image/R (4).png"] 
cpuResult.src=cpuImages[randomNumber];
let cpuValue=["R","S","P"][randomNumber];
let userValue=["R","S","P"][index];
let outcomes={
    RR:"مساوی",
    RP:"حریف",
    RS:"تو",
    PP:"مساوی",
    PS:"حریف",
    PR:"تو",
    SS:"مساوی",
    SR:"حریف",
    SP:"تو",
};
let outComesValue=outcomes[userValue+cpuValue];
result.textContent=userValue===cpuValue?"مساوی شد":`${outComesValue} برنده!!`;
}, 250);
});
});