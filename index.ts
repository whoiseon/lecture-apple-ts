class Square {
  constructor(public width: number, public height: number, public color: string) {

  }

  draw() {
    const a = Math.random();
    const square = `
      <div style="
        position: relative;
        top: ${a * 400}px;
        left: ${a * 400}px;
        width: ${this.width}px;
        height: ${this.height}px;
        background-color: ${this.color}
      ">
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', square);
  }
}

const newSquare = new Square(30, 30, 'red');
newSquare.draw();
newSquare.draw();
newSquare.draw();
newSquare.draw();
newSquare.draw();