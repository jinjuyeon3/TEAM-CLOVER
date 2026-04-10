document.addEventListener("DOMContentLoaded", () => {
    
    const skinList = document.querySelector(".skin-list");
    let result = "";

    productListSkin.forEach(item => {
        result += `
            <li>
                <a href="${item.detail}">
                    <figure>
                        <img src="./img/0-imgPublishing/skinCare/${item.image}">
                        <div class="hover-icons">
                            <button type="button" class="btn-heart">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.5002 11.0775C27.5045 13.0009 26.7635 14.8512 25.4327 16.24C22.3814 19.4038 19.4214 22.7025 16.2577 25.75C15.5314 26.4375 14.3802 26.4125 13.6864 25.6938L4.56768 16.2413C1.81143 13.3838 1.81143 8.77125 4.56768 5.915C5.2191 5.23125 6.0026 4.6869 6.87066 4.31497C7.73873 3.94303 8.67328 3.75125 9.61768 3.75125C10.5621 3.75125 11.4966 3.94303 12.3647 4.31497C13.2328 4.6869 14.0162 5.23125 14.6677 5.915L15.0002 6.2575L15.3314 5.915C15.9836 5.23218 16.7673 4.68837 17.6351 4.3163C18.503 3.94424 19.4372 3.75161 20.3814 3.75C22.2814 3.75 24.0977 4.53 25.4314 5.915C26.7627 7.30356 27.5041 9.15389 27.5002 11.0775Z" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
                                </svg>
                            </button>

                            <button type="button" class="btn-cart cart-in">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12.375H25.4286L24.3103 24.671C24.2498 25.3365 23.9427 25.9554 23.4494 26.4061C22.956 26.8568 22.312 27.1069 21.6437 27.1072H7.78482C7.11657 27.1069 6.47255 26.8568 5.97919 26.4061C5.48584 25.9554 5.17878 25.3365 5.1183 24.671L4 12.375Z" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
                                    <path d="M9.35645 12.375V8.35715C9.35645 6.93634 9.92086 5.57373 10.9255 4.56907C11.9302 3.56441 13.2928 3 14.7136 3C16.1344 3 17.497 3.56441 18.5017 4.56907C19.5063 5.57373 20.0707 6.93634 20.0707 8.35715V12.375" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </button>
                        </div>
                    </figure>
                    <div class="sale-badge fwb">${item.discount}%</div>
                </a>

                <div class="amount-option">
                    <span class="selected">${item.sizes[0]}</span>
                    <span>${item.sizes[1]}</span>
                </div>

                <a href="${item.detail}">
                    <div class="skin-desc">
                        <p class="fwb bd2">${item.name}</p>
                        <p class="bd2">${item.desc}</p>
                    </div>
                    <div class="skin-price">
                        <span class="original bd2">${toWon(item.originalPrice)}원</span>
                        <span class="sale fwb">${toWon(item.price)}원</span>
                    </div>
                </a>
            </li>
        `;
    });

    skinList.innerHTML = result;

    document.querySelector("#current-count").innerHTML = productListSkin.length;

    // 전역 토스트 1개 생성
    document.body.insertAdjacentHTML(
        "beforeend",
        `<div class="toast-message2">상품이 장바구니에 담겼습니다.</div>`
    );

    const toast = document.querySelector(".toast-message2");
    let toastTimer;

    skinList.addEventListener("click", (e) => {
        const heartBtn = e.target.closest(".btn-heart");
        const cartBtn = e.target.closest(".cart-in");

        if (heartBtn) {
            e.preventDefault();
            e.stopPropagation();
            heartBtn.classList.toggle("active");
            return;
        }

        if (cartBtn) {
            e.preventDefault();
            e.stopPropagation();

            toast.classList.add("show");

            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => {
                toast.classList.remove("show");
            }, 1500);
        }
    });


});