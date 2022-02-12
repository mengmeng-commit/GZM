document.addEventListener('DOMContentLoaded',function(){
    let pendant=document.getElementById("pendant");
    
    window.addEventListener('scroll',function(){
    let top=document.documentElement.scrollTop;
    if(top>=687){
        pendant.style.position="fixed";
        pendant.style.left=1365+"px";
        pendant.style.top=75+"px";
    }
    if(top<687){
        pendant.style.position="absolute";
        pendant.style.left=1200+"px";
        pendant.style.top=531+"px";
    }
    })
})