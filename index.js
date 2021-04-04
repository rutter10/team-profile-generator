const inquirer = require('inquirer')
const fs = require('fs')

const choices = [
    'Engineer',
    'Intern',
    'Finish' 
]

inquirer
.prompt([{
    type: 'input',
    message: 'Enter Team Manager\'s Name',
    name: 'manager'
},
{
    type: 'input',
    message: 'Enter Employee ID Number',
    name: 'badge'
},
{
    type: 'input',
    message: 'Enter Email Address',
    name: 'email'
},
{
    type: 'input',
    message: 'Enter Office Number',
    name: 'office'
}])

// .then can go here.

function teamMember(){
    inquirer
    .prompt([{
        type: 'list',
        message: 'Choose team member to add, by their role',
        name: 'title',
        choises: ['Engineer', 'Intern', 'Finish']
    },
    {    
        type: 'input',
        message: 'Enter Team Member\'s Name',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Enter Employee ID Number',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Enter Employee\'s Email',
        name: 'employeeEmail'
    }])
    .then(function({name, id, employeeEmail}){
        let info = ''
        if (title === 'Engineer') {
            info = 'GitHub Username'
        } else if (title === 'Intern') {
            info = 'School Name'
        } else {
            info = 'Finished'
        }
        inquirer
        .prompt([{
            type: 'input',
            message: `Enter team memeber\'s ${info}`,
            name: 'info'
        }])
    })
}
