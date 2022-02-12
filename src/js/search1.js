document.addEventListener('DOMContentLoaded',function(){
    let search1=document.getElementById("search1");
    window.addEventListener('scroll',function(){
        let top=document.documentElement.scrollTop;
        if(top>=173){
            search1.style.display="block";
        };
        if(top<173){
            search1.style.display="none";
        }
    })
})