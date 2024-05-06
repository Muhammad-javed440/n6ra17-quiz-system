#! /usr/bin/env node 
import inquirer from 'inquirer';
const questions = await inquirer.prompt([
   {
     name : "q1",
     message : "What is the Capital of Pakistan ? ",  
     type : "list",
     choices:['Karachi','Lahore','Islamabad'],
    },
    {
     name : "q2",
     message : "What is largest city of pakistan by population ?",
     type : "list",
     choices : ['Lahore','Multan','Karachi','Islamabad'],
     
    }
])
let answer1 = "Islamabad";
let answer2 = "Karachi" ;
let score : number = 0 ;
if(questions.q1 === answer1){
    console.log("Corret answer .",answer1);
     score++
     console.log('Your score is:',score)
}else{
    console.log('Wrong answer.')
};

if(questions.q2 === answer2){
    console.log("Corret answer .",answer2);
    score++
    console.log('Your score is:',score)

}else{
    console.log('Wrong answer.')
};

