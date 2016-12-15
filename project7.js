var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var drawing = false;

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

var rainbowArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
var rainbowIndex = 0

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  // square drawing code here
  var canvas = document.getElementById("screen")
 var rect = document.createElementNS(namespace, "rect")
 rect.setAttribute("fill", color)
 rect.setAttribute("x", x)
 rect.setAttribute("y", y)
 rect.setAttribute("width", size)
  rect.setAttribute("height", size)
 canvas.appendChild(rect)
}

function drawCircle(x, y, size, color) {
  var canvas = document.getElementById("screen")
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("fill", color)
 circle.setAttribute("cx", x)
 circle.setAttribute("cy", y)
 circle.setAttribute("r", size)
 canvas.appendChild(circle)
}

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
drawing = true;

})

document.addEventListener("mousemove", function(e) {
var pt = transformPoint(e);
var x = pt.x;
var selectedShape =  document.getElementById("shapeSelect").value
var selectedColor = document.getElementById("colorSelect").value
var selectedSize = document.getElementById("sizeSelect").value
if(drawing == true) {
 if(selectedShape == "circle"){
   drawCircle(pt.x,pt.y, selectedSize, selectedColor)
 }
 else if(selectedShape == "square"){
 drawSquare(pt.x,pt.y, selectedSize, selectedColor)
}
else if(selectedShape == "eraser"){
drawSquare(pt.x,pt.y, selectedSize, "white")
}
}
else {
  drawing = false;
}
})

document.addEventListener("mouseup", function(e) {
drawing = false;
})
