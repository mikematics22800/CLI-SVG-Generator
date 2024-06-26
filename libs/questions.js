const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter text up to three characters:'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color keyword or hexadecimal number:'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Select shape:',
    choices: [
      'circle',
      'triangle',
      'square'
    ]
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color keyword or hexadecimal number:'
  }
];

export default questions;