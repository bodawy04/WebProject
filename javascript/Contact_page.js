let saveCommentBtn = document.querySelector(".contact-form-input-button")

saveCommentBtn.addEventListener("click", () => {
    let name = document.querySelector(".name").value
    let email = document.querySelector(".email").value
    let subject = document.querySelector(".subject").value
    let massage = document.querySelector(".contact-form-input-textarea").value

    window.localStorage.setItem("name", name)
    window.localStorage.setItem("email", email)
    window.localStorage.setItem("subject", subject)
    window.localStorage.setItem("massage", massage)
})
// window.localStorage.clear()

let photosContainer = document.getElementById("photos-container")

photosContainer.addEventListener("wheel", (amountOfScrolling)=>{
    amountOfScrolling.preventDefault() 
    photosContainer.scrollLeft -= amountOfScrolling.deltaY
});

