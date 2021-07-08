mobile = document.querySelector(".menu-logo")
openMenu(mobile)
function openMenu(mobile) {
    mobile.addEventListener("click", () => {
        mobile.classList.remove("menu-logo")
        mobile.classList.add("menu-logo-close")
        document.querySelector(".leftmenu-content").classList.add("mobile-menu-run")
        console.log("open")
        const mobileClose = document.querySelector(".menu-logo-close")
        closeMenu(mobileClose)
    })
}

function closeMenu(mobileClose) {
    mobileClose.addEventListener("click", () => {
        mobileClose.classList.remove("menu-logo-close")
        mobileClose.classList.add("menu-logo")
        document.querySelector(".leftmenu-content").classList.remove("mobile-menu-run")
        console.log("close")
         mobile = document.querySelector(".menu-logo")
        openMenu(mobile)
    })
}