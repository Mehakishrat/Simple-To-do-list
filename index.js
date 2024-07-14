#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Print a welcom message
console.log(chalk.blue.bold("\n \t Welcome to \'Mehak ishrat\' - Simple TO do list"));
let todolist = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.yellow("\nEnter your new Task\n")
        }
    ]);
    todolist.push(addTask.task);
    console.log(chalk.green(`\n${addTask.task} Task added in To do list successfully\n`));
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.yellow("\n Do you want to add more task?\n"),
            default: "False"
        }
    ]);
    condition = (addMoreTask.addmore);
}
console.log(chalk.green("\nYour updated To do list:"), todolist);
