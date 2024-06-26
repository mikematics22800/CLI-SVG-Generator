// Include packages needed for this application
import inquirer from 'inquirer';
import * as fs from 'node:fs';

// Import questions array for user input
import questions from './libs/questions.js';

// Import shape classes to create SVG shapes
import { Triangle, Square, Circle } from './libs/shapes.js';

// Callback function to write SVG file with user inputs
const generateLogo = (answers) => {
  const params = [answers.text, answers.textColor, answers.shapeColor]
  let svg
  switch (answers.shape) {
    case 'triangle':
      svg = new Triangle(...params).render();
      break;
    case 'square':
      svg = new Square(...params).render();
      break;
    case 'circle':
      svg = new Circle(...params).render();
      break;
  }
  
  fs.writeFile('./logo.svg', svg, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('SVG file created successfully!');
    }
  })
}

// Prompt inquirer questions then generate SVG file
inquirer.prompt(questions).then((answers) => {
  generateLogo(answers)
}).catch((error) => {
  console.log(error)
});