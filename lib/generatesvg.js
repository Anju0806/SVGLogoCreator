
function generatesvg(data) {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <rect width="300" height="200" stroke="black" fill="transparent" />

<!--  <circle width="100%" height="100%" fill="green" /> -->
  
  <circle cx="150" cy="100" r="60"
   stroke-width="4" fill="yellow" />
   <!--  <rect x="100" y="40" width="120" height="120" 
     fill="red" stroke-width="2" /> -->

 <text x="150" y="120" font-size="50" text-anchor="middle" fill="white">SVG</text>

</svg>`
}

module.exports = generatesvg;