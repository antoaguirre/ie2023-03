function setup() {
  createCanvas(windowWidth, windowHeight); // Crea un lienzo del tamaño de la ventana
  background(0); // Fondo negro
}

function draw() {
  // No se requiere draw en este caso
}

function mouseClicked() {
  let starSize = random(3, 15); // Tamaño aleatorio para las estrellas
  let whiteTone = color(255); // Estrellas de color blanco

  fill(whiteTone);
  noStroke();

  // Dibuja estrella en la posición donde se hace clic
  drawStar(mouseX, mouseY, starSize);
}

// Función para dibujar estrella
function drawStar(x, y, size) {
  beginShape();
  for (let i = 0; i < 5; i++) {
    let angle = TWO_PI * i / 5;
    let xCoordinate = x + cos(angle) * size;
    let yCoordinate = y + sin(angle) * size;
    vertex(xCoordinate, yCoordinate);
    angle += TWO_PI * 2 / 5;
    xCoordinate = x + cos(angle) * size / 2;
    yCoordinate = y + sin(angle) * size / 2;
    vertex(xCoordinate, yCoordinate);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Redimensiona el lienzo al cambiar el tamaño de la ventana
  background(0); // Refresca el fondo para evitar superposiciones
}

