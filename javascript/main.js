
//scroll to top event handler
function scrollUp(){
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    })
    
}

window.addEventListener('scroll',()=>{
    let myElement = document.getElementById('scroll-up')
    let scrollLength = 200;
    if(window.scrollY > scrollLength)
        myElement.style.display = 'block' 
    else{
        myElement.style.display = 'none'
    }
})

function printt(){
    console.log("stats");
}

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // The target element is now visible
        console.log("Element is visible");
        
        let myNumber = document.getElementsByClassName("number")
        // saving the actual numbers in temp and reset myNumber
        let temp = []

        for(i = 0; i < myNumber.length; i++){
            temp.push(myNumber[i].innerHTML)
            myNumber[i].innerHTML = 0;
        }
        // count up from 0 till reaching the actual number 
        for(i = 0; i < myNumber.length; i++){
            function countUp(currNumber,tempr){
                currNumber.innerHTML = parseInt(currNumber.innerHTML)+1
                if(currNumber.innerHTML === tempr){
                    clearInterval(myInterval)
                }
            }
            let dom = parseInt(temp[i])
            let myInterval = setInterval(countUp,2000/dom,myNumber[i],temp[i])
    }
    
        
                
        observer.disconnect();
      }
    });
  }

  // Target element to observe
const targetElement = document.getElementById('your-target-element-id');

// Options for the Intersection Observer
const options = {
  root: null,
  rootMargin: '0px', 
  threshold: 1.0 
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Start observing the target element
observer.observe(targetElement);

// newsletter subscribing email saved in local storage
let emailInput = document.getElementById("emailInput")
let subscribButton = document.getElementById("Subscribe-button")

subscribButton.addEventListener("click",()=>{
    const email = emailInput.value
    if(email.trim() !== ''){
        localStorage.setItem('subscribtion email',email)
        alert("Thanks for subscribing!")
    }else{
        alert("please enter your email")
    }
})