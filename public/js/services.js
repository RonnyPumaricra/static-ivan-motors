// Useful functions
// function assignAttrs(elem, attrs) {
//   for (const attr in attrs) {
//     const val = attrs[attr]
//     elem.setAttribute(attr, val)
//   }
// }

// function createCustomElem(tag, attrs, text) {
//   const elem = document.createElement(tag)
//   assignAttrs(elem, attrs)

//   if (text !== undefined) {
//     elem.textContent = text
//   }

//   return elem
// }

// function writeSingleService({serviceName, imgUrl}) {
//   const attrs = {
//     class: "service-card"
//   }
//   const LabelAttrs = {
//     class: "service-card__label"
//   }
//   const ImgAttrs = {
//     class: "service-card__img",
//     url: imgUrl
//   }

//   const ServiceWrapper = createCustomElem("div", attrs)
//   const ServiceLabel   = createCustomElem("h2", LabelAttrs, serviceName)
//   const ServiceImg     = createCustomElem("img", ImgAttrs)

//   ServiceWrapper.appendChild(ServiceLabel)
//   ServiceWrapper.appendChild(ServiceImg)

//   return ServiceWrapper
// }



// const services = [
//   {
//     serviceName: "Reparación",
//     imgUrl: "/static/media/Dog.jpg"
//   },
//   {
//     serviceName: "Cambiar repuestos",
//     imgUrl: "/static/media/Dog.jpg"
//   },
//   {
//     serviceName: "Limpieza del motor",
//     imgUrl: "/static/media/Dog.jpg"
//   },
// ]

// Slider behavior
// Existe un contador de n segundos, cuando el contador llega al límite, cambia de slide.
// Si el usuario hace click en "atrás" o "adelante", se cambia de slide y el contador se reinicia.

// console.log(writeSingleService(services[0]))


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


/**
 * 
 * @param {number} distance Valores: 1, -1
 */
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