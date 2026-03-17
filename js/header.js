document.addEventListener("DOMContentLoaded",()=>{
    const searchIn = document.querySelector(".search-in")
    const searchClose = document.querySelector(".search-close")
    const searchContainer = document.querySelector(".search-container")

    searchIn.addEventListener("click",()=>{
        searchContainer.classList.toggle("on")
    })
})