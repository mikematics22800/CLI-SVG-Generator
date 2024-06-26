const { Triangle, Square, Circle } = require("./shapes");

describe('Shape tests', () => {
  test('Triangle should render correctly', () => {
    const triangle = new Triangle('tr', 'white', 'green');
    expect(triangle.render()).toEqual(
      `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <polygon points="0,200 100,0 200,200" fill="green" />
        <text x="50%" y="60%" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="white">tr</text>
      </svg>`
    );
  });

  test('Square should render correctly', () => {
    const square = new Square('sq', 'black', 'yellow');
    expect(square.render()).toEqual(
      `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <rect width="200" height="200" fill="yellow" />
        <text x="50%" y="50%" font-size="80" dominant-baseline="middle" text-anchor="middle" fill="black">sq</text>
      </svg>`    
    );
  });

  test('Circle should render correctly', () => {
    const circle = new Circle('ci', 'red', 'blue');
    expect(circle.render()).toEqual(
      `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <circle cx="100" cy="100" r="80" fill="blue" />        
        <text x="50%" y="50%" font-size="80" dominant-baseline="middle" text-anchor="middle" fill="red">ci</text>
      </svg>`    
    );
  });
});