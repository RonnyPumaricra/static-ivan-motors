const body = document.body

// Useful link:
// https://www.joshwcomeau.com/react/rainbow-button/#animated-custom-properties

try {
  CSS.registerProperty({
    name: '--animable-navbar-height',
    syntax: '<length>',
    inherits: true,
    initialValue: '0px'
  })
  
} catch (e) {
  console.error("Your browser does not support CSS.registerProperty")
}



let globalScroll = scrollY

// Set initial class to body
if (globalScroll == 0)
    body.classList.add("top-page")


// "on-scrolling" means that the user is scrolling down
function toggleOnScroll() {
  let currScroll = scrollY

  body.classList.remove("top-page")
  
  // Scrolling down
  if (currScroll > globalScroll)
    body.classList.add("on-scroll")
    
  // Scrolling up
  else if (currScroll < globalScroll)
    body.classList.remove("on-scroll")
  
  if (currScroll == 0)
    body.classList.add("top-page")
    
    globalScroll = scrollY
}

addEventListener("scroll", toggleOnScroll)