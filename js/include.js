async function includeHTML(selector, url, callback) {
    const el = document.querySelector(selector);
    if (!el) return;

    try {
        const resp = await fetch(url);

        if (resp.ok) {
            el.innerHTML = await resp.text();

            if (typeof initHeader === "function") {
                initHeader();
            }

            if (callback) callback();
        }
    } catch (error) {
        console.error("Error loading HTML:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    includeHTML("#include-header", "./header.html");
});