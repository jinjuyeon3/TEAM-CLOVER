document.addEventListener("DOMContentLoaded", () => {
    
    const makeList = document.querySelector(".skin-list");
    let result = "";

    productListSkin.forEach(item => {
        result += `
            <li>
                <a href="#">
                    <figure>
                        <img src="./img/0-imgPublishing/skinCare/${item.image}">
                    </figure>
                    <div class="sale-badge fwb">${item.discount}%</div>
                </a>
                    <div class="amount-option">
                        <span>${item.sizes[0]}</span>
                        <span class="selected">${item.sizes[1]}</span>
                    </div>
                <a href="#">
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
    makeList.innerHTML = result;

    // 상품 개수를 데이터 개수에 맞게 입력하는 코드
    document.querySelector("#current-count").innerHTML = productListSkin.length

});