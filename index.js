// Include packages needed for this application
import inquirer from 'inquirer';
import * as fs from 'node:fs';

// Import questions array
import questions from './questions.js';

// Callback function to write SVG file with user inputs
const generateSVG = (answers) => {
  const shape = answers.shape
  const shapeColor = answers.shapeColor
  const contents = (
    `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      ${
        shape == 'square' ? `<rect width='100%' height='100%' fill='${shapeColor}'/>`:
        shape == 'circle' ? `<circle cx="100" cy="100" r="100" fill='${shapeColor}'/>`:
        shape == 'triangle' ? `<polygon points="100,0 200,200 0,200" fill='${shapeColor}'/>`:
        ''
      }
      <text x="50%" y="50%" font-size="40" fill="${answers.textColor}" dy=".3em" text-anchor="middle">${answers.text}</text>
    </svg>`
  )
  fs.writeFile('./logo.svg', contents, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('SVG file created successfully!');
    }
  })
}

// Prompt inquirer questions then generate SVG file
inquirer.prompt(questions).then((answers) => {
  generateSVG(answers)
}).catch((error) => {
  console.log(error)
});