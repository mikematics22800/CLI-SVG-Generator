export class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  svg() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">`
  }
  svgText() {
    return `<text x="50%" y="50%" font-size="80" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }
}

export class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return  `${this.svg()}<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />${this.svgText()}</svg>`
  }
}

export class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `${this.svg()}<rect width="200" height="200" fill="${this.shapeColor}" />${this.svgText()}</svg>`
  }
}

export class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `${this.svg()}<circle cx="100" cy="100" r="80" fill="${this.shapeColor}" />${this.svgText()}</svg>`
  }
}