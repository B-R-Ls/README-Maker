// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generation = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    'What is the title of the Project?',
    'In one sentence, what does it do?', 
    'Give a in depth description of the project and well as your thoughts, struggles, and successes.',
    'Please provide an Installation link:',
    'Please provide a deployed link:',
    'How do you use your project, and what does it accomplish?',
    'Please put all resource links and contributers in, once finished enter blank.',
    'What License did you use?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'purpose',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'install',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'deployed',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'credits',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'license',
            }
        ])
        .then((response) => {
            generation(response);
        })
        .then()
}

// Function call to initialize app
init();
