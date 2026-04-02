document.addEventListener("DOMContentLoaded", () => {
    
    const makeList = document.querySelector(".make-list");
    let result = "";

    productListMake.forEach(item => {
        result += `
            <li>
                <a href="${item.detail}">
                    <figure>
                        <img src="./img/0-imgPublishing/makeUp/${item.image}">
                    </figure>
                    <div class="sale-badge fwb">${item.discount}%</div>
                </a>
                    <div class="color-option">
                        <div class="color1"></div>
                        <div class="color2"></div>
                        <div class="color3"></div>
                        <div class="color4"></div>
                    </div>
                <a href="${item.detail}">
                    <div class="make-desc">
                        <p class="fwb bd2">${item.name}</p>
                        <p class="bd2">${item.desc}</p>
                    </div>
                    <div class="make-price">
                        <span class="original bd2">${toWon(item.originalPrice)}원</span>
                        <span class="sale fwb">${toWon(item.price)}원</span>
                    </div>
                </a>
            </li>
        `;
    });
    makeList.innerHTML = result;

    // 상품 개수를 데이터 개수에 맞게 입력하는 코드
    document.querySelector("#current-count").innerHTML = productListMake.length

});