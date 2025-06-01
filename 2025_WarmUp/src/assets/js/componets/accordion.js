export function accordion(){
    const el = document.querySelectorAll(".c-accordion-group");
    if(el){
        el.forEach((item)=>{
            item.querySelector(".c-accordion-btn").addEventListener("click",()=>{
                item.classList.toggle("js-active");
            });
        })
    }

}