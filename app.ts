#! /usr/bin/env node
//SHABANG

import inquirer from "inquirer"
//1st question

let question: {
   sentence:string

} = await inquirer.prompt([{

     name: "sentence" ,
     message:"enter your sentence to count the word",
    type:"input"
}])

// create a variable     for removing  white space we use trim and  split for arranging words by using inverted commas " "

const words =question.sentence.trim().split(" ")

//printing an array of words to the console

console.log(words)

//print the word count of the sentence to the console

console.log(`your sentence word count is ${words.length}`)
