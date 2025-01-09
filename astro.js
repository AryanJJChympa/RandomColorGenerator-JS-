//generate a random color
let StartColor
const randomColor=function(){
  const hex='0123456789ABCDEF'
  let color='#'
  for(let i=0; i<6; i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color
}

const RandomColorGenerator=document.querySelector('#start').
addEventListener('click',function(e){
  StartColor=setInterval(ChangingColor,1000)
  console.log("Started")
})

function ChangingColor(){
  document.body.style.backgroundColor=randomColor()
}

const RandomColorGeneratorStop=document.querySelector('#stop').
addEventListener('click',function(e){
  clearInterval(StartColor)
  console.log("Stopped")
})


console.log(randomColor())