const iconClick = document.querySelector(".navigation-mobile .icons");
const menuItems = document.querySelector(
  ".navigation-mobile .mobile--lists"
);
const icons = document.querySelectorAll(
  ".navigation-mobile .icons .icon"
);
iconClick.addEventListener("click", (e) => {
  const elementClicked = e.target.closest("svg");

  //==== toggle Menu Lists
  if (elementClicked.classList.contains("icons--open")) {
    menuItems.classList.remove("hide");
  } else if (elementClicked.classList.contains("icons--close")) {
    menuItems.classList.add("hide");
  }
  //====toggle Icons
  icons.forEach((el) => {
    if (el.classList.contains("hide")) {
      el.classList.remove("hide");
    } else {
      el.classList.add("hide");
    }
  });
});



// ============ Animate images on Scroll =======
const cottageImages = Array.from(document.querySelectorAll('.cottage-img img'));
let prevRatio = 0.5;
function easeOutQuad (t) {
    return t * (2 - t)
  }

let options = {
    root: null,
    rootMargin: '0px',
    threshold: createThresholdArray()
  }

  function createThresholdArray(){
      let arr = [];
        let numSteps = 10;

        for (let i=1.0; i<=numSteps; i++) {
            let ratio = i/numSteps;
            arr.push(ratio);
        }

        arr.push(0);
        console.log(arr)
        return arr;

  }
  
  let observer = new IntersectionObserver(animateImagesCallback, options);

  function animateImagesCallback(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
           let ratio = entry.intersectionRatio.toFixed(2);
           if(ratio >= 0.5) {
               entry.target.style.transform = 'translateY('+ -5 * ratio / 0.5 +'px)';
           } else {
            entry.target.style.transform = 'translateY('+ 5 * ratio / 0.5 +'px)';
           }
            console.log(entry)
            console.log(entry.intersectionRatio.toFixed(2))
        }
    })
  }

  //==== Calling the observer
  cottageImages.forEach(img => observer.observe(img));