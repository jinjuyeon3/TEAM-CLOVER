document.addEventListener("DOMContentLoaded", () => {
    function initCustomSelect(wrapSelector, selectSelector) {
        const customWrap = document.querySelector(wrapSelector);
        if (!customWrap) return;

        const customBtn = customWrap.querySelector(".custom-option-btn");
        const optionItems = customWrap.querySelectorAll(".custom-option-list li");
        const selectedValue = customWrap.querySelector(".selected-value");
        const selectedChip = customWrap.querySelector(".custom-option-btn .color-chip");
        const originalSelect = customWrap.querySelector(selectSelector);

        if (!customBtn || !optionItems.length || !selectedValue || !selectedChip || !originalSelect) return;

        customBtn.addEventListener("click", (e) => {
            e.stopPropagation();

            document.querySelectorAll(".custom-option-wrap").forEach((wrap) => {
                if (wrap !== customWrap) {
                    wrap.classList.remove("on");
                }
            });

            customWrap.classList.toggle("on");
        });

        optionItems.forEach((item, index) => {
            item.addEventListener("click", () => {
                const value = item.dataset.value;
                const color = item.dataset.color;
                const label = item.textContent.trim();

                selectedValue.textContent = label;
                selectedChip.style.background = color;

                optionItems.forEach((li) => li.classList.remove("active"));
                item.classList.add("active");

                originalSelect.selectedIndex = index;
                originalSelect.value = value;

                customWrap.classList.remove("on");
            });
        });
    }

    initCustomSelect(".custom-option-wrap:not(.custom-option-wrap2)", ".pro-option-g");
    initCustomSelect(".custom-option-wrap2", ".pro-option-g2");

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".custom-option-wrap")) {
            document.querySelectorAll(".custom-option-wrap").forEach((wrap) => {
                wrap.classList.remove("on");
            });
        }
    });
});