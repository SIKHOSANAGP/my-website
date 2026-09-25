document.getElementById("square-animation").animate([
   {
    transform: "transLateX(0)",
    opacity: 1,
   },{
    transform: "transLateX(100px)",
    opacity: 0,
   }
],{
  duration : 10000,
  fill: "both"
})