const circle = document.querySelectorAll('.circle')


circle.forEach( ( circle )=>{
  let items = circle.querySelectorAll( '.item' ) 
  let angle = 360-90, dangle = 360 / items.length 
  
  for( let i = 0; i < items.length; ++i ) 
  {
    let icon = items[i] 
    angle += dangle 
    icon.style.transform = `rotate(${angle}deg) translate(${circle.clientWidth / 2}px) rotate(-${angle}deg) `
  }
})