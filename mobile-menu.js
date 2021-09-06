const mobile = document.querySelector(".menu-logo")
openMenu(mobile)
function openMenu(mobile) {
    mobile.addEventListener("click", () => {
        let list = document.querySelectorAll(".leftmenu-list")
        for(let i= 0 ; i<list.length;i++){
            list[i].classList.remove("active")
        }
        mobile.innerHTML = `<path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>`
        mobile.classList.remove("menu-logo")
        mobile.classList.add("menu-logo-close")
        document.querySelector(".leftmenu-content").classList.remove("mobile-menu-stop")
        document.querySelector(".leftmenu-content").classList.add("mobile-menu-run")
        const mobileClose = document.querySelector(".menu-logo-close")
        console.log("open")
        closeMenu(mobileClose)
    })
}

function closeMenu(mobileClose) {
    mobileClose.addEventListener("click", () => {
        mobileClose.innerHTML = `<path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>`
        mobileClose.classList.remove("menu-logo-close")
        mobileClose.classList.add("menu-logo")
        document.querySelector(".leftmenu-content").classList.remove("mobile-menu-run")
        document.querySelector(".leftmenu-content").classList.add("mobile-menu-stop")
        const  mobile = document.querySelector(".menu-logo")
        console.log("close")
        openMenu(mobile)
    })
}
document.addEventListener('DomContentLoaded',function (){
    window.onresize = ()=>{
        widthClientScreen = document.documentElement.clientWidth
        if (widthClientScreen> 768){
            document.querySelector(".leftmenu-content").classList.remove("mobile-menu-stop")
            document.querySelector(".leftmenu-content").classList.remove("mobile-menu-run")
        }
    }
})
window.onresize = ()=>{
    widthClientScreen = document.documentElement.clientWidth
    if (widthClientScreen> 768){
        document.querySelector(".leftmenu-content").classList.remove("mobile-menu-stop")
        document.querySelector(".leftmenu-content").classList.remove("mobile-menu-run")
    }
}
