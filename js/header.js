document.addEventListener("DOMContentLoaded",()=>{
    const searchIn = document.querySelector(".search-in")
    const searchClose = document.querySelector(".search-close")
    const searchContainer = document.querySelector(".search-container")

    searchIn.addEventListener("click",()=>{
        searchContainer.classList.add("on")
        searchIn.style.display = "none"
        searchClose.style.display = "block"
    })

    searchClose.addEventListener("click",()=>{
        searchContainer.classList.remove("on")
        searchIn.style.display = "block"
        searchClose.style.display = "none"
    })
})