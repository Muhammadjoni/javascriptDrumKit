const canvas = document.querySelector('#draw');
const cnt = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cnt.strokeStyle = '#BADA55';
cnt.lineJoin = 'round';
cnt.lineCap = 'round';
cnt.lineWidth = 100;
// cnt.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = e => {
  if (!isDrawing) return; 
  console.log(e);

  cnt.strokeStyle = `hsl(${hue}, 75%, 50%)`;
//   cnt.lineWidth = hue;
  cnt.beginPath();
  cnt.moveTo(lastX, lastY);
  //starting
  cnt.lineTo(e.offsetX, e.offsetY);
  //moving to 
  cnt.lineTo(e.offsetX, e.offsetY);
  cnt.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY]
 
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  
  if(cnt.lineWidth >= 100 || cnt.lineWidth <= 1) {
      direction = !direction;
  }
  if (direction) {
      cnt.lineWidth++;
  } else {
      cnt.lineWidth--;
  }

}

// canvas.addEventListener('mousedown', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
// canvas.addEventListener('mouseout', () => isDrawing = false);
