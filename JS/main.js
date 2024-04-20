
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
        let temp = []
        for(i = 0; i < myNumber.length; i++){
            temp.push(myNumber[i].innerHTML)
            myNumber[i].innerHTML = 0;
        }
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
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin around the viewport
  threshold: 1.0 // Trigger when fully visible
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Start observing the target element
observer.observe(targetElement);