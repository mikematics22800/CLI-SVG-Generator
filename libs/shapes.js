export class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

export class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return (
      `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <polygon points="0,200 100,0 200,200" fill="${this.shapeColor}" />
        <text x="50%" y="60%" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    )
  }
}

export class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return (
      `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <rect width="200" height="200" fill="${this.shapeColor}" />
        <text x="50%" y="50%" font-size="80" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    )
  }
}

export class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return (
      `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <circle cx="100" cy="100" r="80" fill="${this.shapeColor}" />        
        <text x="50%" y="50%" font-size="80" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    )
  }
}