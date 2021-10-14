const SliderBox = document.querySelector(".slider-container")
const SlidesContainer = SliderBox.querySelector(".screens-container")
const getSlides = () => Array.from(SlidesContainer.querySelectorAll(".slide"))
const Slides = getSlides()
const sliderLength = Slides.length

const NextBtn = SliderBox.querySelector(".controls .next")
const PrevBtn = SliderBox.querySelector(".controls .prev")

const animationCooldown = 500

function disableControls(cooldown) {
  NextBtn.disabled = true
  PrevBtn.disabled = true
  
  setTimeout(()=> {
    NextBtn.disabled = false
    PrevBtn.disabled = false
  }, cooldown)
}


// distance: sólo -1 o 1
function changePosition(distance) {
  const goesForward = distance == 1

  disableControls(animationCooldown)

  // Empieza la animación
  Slides.forEach(el => {
    const left = parseInt(getComputedStyle(el).getPropertyValue("--left"))

    el.style.setProperty("--left", left - distance)
  })

  //Cuando termina la animación, acomodar el orden de los elementos
  setTimeout(() => {
    // Posición en el DOM del elemento a cambiar
    const pos = goesForward ? 0 : sliderLength - 1
    extraSlide = SlidesContainer.removeChild(getSlides()[pos])

    const newLeftValue = (goesForward ? sliderLength - 1 : 0) - 1
    extraSlide.style.setProperty("--left", newLeftValue)

    goesForward ? SlidesContainer.append(extraSlide) : SlidesContainer.prepend(extraSlide)
  }, animationCooldown)
}


SliderBox.classList.remove("no-js")


PrevBtn.addEventListener("click", () => changePosition(-1))
NextBtn.addEventListener("click", () => changePosition(1))