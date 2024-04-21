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

let log_outBtn = document.getElementById("log-out")
        let isVerified = window.localStorage.getItem("isVerified")
        if (isVerified === "true") {
            let username = window.localStorage.getItem("username")
            let username_contactPage = document.getElementById("username-contactPage")
            username_contactPage.innerHTML = username

            log_outBtn.style.display ="block"
            document.getElementById("log-in").style.display="none"
            document.getElementById("Register").style.display="none"
    
            log_outBtn.addEventListener("click" , function(){
                window.localStorage.setItem("isVerified", "false")
                document.getElementById("log-in").style.display="block"
                document.getElementById("Register").style.display="block"
                window.location.href = "/html/Contact page.html"
            })
        }else{
            log_outBtn.style.display ="none"
            let log_inBtn = document.getElementById("log-in")
            log_inBtn.style.cursor ="pointer"

            log_inBtn.addEventListener("click", function(){
            window.location.href="/html/index.html"
        })
            let RegisterBtn = document.getElementById("Register")
            RegisterBtn.style.cursor ="pointer"
            RegisterBtn.addEventListener("click",function(){
            window.location.href="/html/register.html"
        })}