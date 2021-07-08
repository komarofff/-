showInformation()
width = document.documentElement.clientWidth

window.addEventListener("resize", () => {
    width = document.documentElement.clientWidth
    showInformation()
})

function showInformation() {

    users = document.querySelectorAll(".open-user-profile.open-info")
    for (let i = 0; i < users.length; i++) {
        users[i].addEventListener("click", (event) => {
            event.target.classList.remove("open-info")
            event.target.classList.add("minus")
            event.target.src = `../images/minus.svg`
            event.target.style.cssText = `filter: invert(100%) brightness(160%)`
            if (width <= 560) {
                blockInfo = event.target.parentNode.parentNode.querySelector("p:nth-child(2)")
                blockInfo.style.display = 'block'
                blockInfo = event.target.parentNode.parentNode.querySelector("p:nth-child(3)")
                blockInfo.style.display = 'block'
            }
            blockView = event.target.parentNode.parentNode.querySelector(".row")
            blockView.classList.add('invert')
            blockView.style.cssText = `background: #095c5c; color: #fff;display:flex;`
            event.target.parentNode.parentNode.style.cssText = `background: #095c5c; color: #fff;`
            parentDiv = event.target.parentNode.parentNode.parentNode.querySelector(".user-info")
            parentDiv.style.display = `block`
            closeInformation()
        })

    }
}

function closeInformation() {
    usersClose = document.querySelectorAll(".open-user-profile.minus")
    for (let z = 0; z < usersClose.length; z++) {
        usersClose[z].addEventListener("click", (event) => {
            event.target.src = `../images/plus.svg`
            event.target.style.cssText = ` `
            if (width <= 560) {
                blockInfo2 = event.target.parentNode.parentNode.querySelector("p:nth-child(2)")
                blockInfo2.style.display = 'none'
                blockInfo2 = event.target.parentNode.parentNode.querySelector("p:nth-child(3)")
                blockInfo2.style.display = 'none'
            }
            blockView2 = event.target.parentNode.parentNode.querySelector(".row")
            blockView2.classList.remove('invert')
            blockView2.style.cssText = ``
            event.target.parentNode.parentNode.style.cssText = ``
            parentDiv2 = event.target.parentNode.parentNode.parentNode.querySelector(".user-info")
            parentDiv2.style.display = `none`
            event.target.classList.remove("minus")
            event.target.classList.add("open-info")
            //showInformation()
        })
    }
}
