const mobile = document.querySelector(".menu-logo")
openMenu(mobile)
function openMenu(mobile) {
    mobile.addEventListener("click", () => {
        let list = document.querySelectorAll(".leftmenu-list")
        for(let i= 0 ; i<list.length;i++){
            list[i].classList.remove("active")
        }
        mobile.classList.remove("menu-logo")
        mobile.classList.add("menu-logo-close")
        document.querySelector(".leftmenu-content").classList.remove("mobile-menu-stop")
        document.querySelector(".leftmenu-content").classList.add("mobile-menu-run")
        const mobileClose = document.querySelector(".menu-logo-close")
        closeMenu(mobileClose)
    })
}

function closeMenu(mobileClose) {
    mobileClose.addEventListener("click", () => {
        mobileClose.classList.remove("menu-logo-close")
        mobileClose.classList.add("menu-logo")
        document.querySelector(".leftmenu-content").classList.remove("mobile-menu-run")
        document.querySelector(".leftmenu-content").classList.add("mobile-menu-stop")
        const  mobile = document.querySelector(".menu-logo")
        openMenu(mobile)
    })
}