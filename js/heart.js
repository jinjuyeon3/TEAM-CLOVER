document.addEventListener("DOMContentLoaded",()=>{
    const iconHearts = document.querySelectorAll(".icon-heart")
    if(iconHearts){
        iconHearts.forEach(iconHerat=>{
            iconHerat.addEventListener("click",(e)=>{
                e.preventDefault()
                let imgtag = iconHerat.children[0]
                let originSrc = imgtag.getAttribute("src")
                if(originSrc=='./img/0-imgPublishing/icon/heart.svg'){
                    imgtag.setAttribute("src","./img/0-imgPublishing/icon/heart-clicked.svg")
                }else{
                    imgtag.setAttribute("src","./img/0-imgPublishing/icon/heart.svg")
                }
            })
        })
    }
})
