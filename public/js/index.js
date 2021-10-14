const body = document.body

// Link:
// https://www.joshwcomeau.com/react/rainbow-button/#animated-custom-properties

try {
  CSS.registerProperty({
    name: '--animable-navbar-height',
    syntax: '<length>',
    inherits: true,
    initialValue: '0px'
  })
  
} catch (e) {
  console.error("El navegador no soporta CSS.registerProperty")
}



let globalScroll = scrollY

// Set initial class to body
if (globalScroll == 0) {
  body.classList.add("top-page")
}


function toggleOnScroll() {
  let currScroll = scrollY

  
  // scroll hacia abajo
  if (currScroll > globalScroll) {
    body.classList.add("on-scroll")
  }

  // scroll hacia arriba
  else if (currScroll < globalScroll) {
    body.classList.remove("on-scroll")
  }
  
  body.classList.remove("top-page")
  
  if (currScroll == 0) {
    body.classList.add("top-page")
  }
  globalScroll = scrollY
}

window.addEventListener("scroll", toggleOnScroll)