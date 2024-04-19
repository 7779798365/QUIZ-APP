#! /usr/bin/env node

import inquirer from "inquirer";
import { HTML_language, CSS_language } from "./HTMLandCSS.js";
import { PHP_language, REACT_language } from "./PHPandREACT.js";
import { TYPESCRIPT_language, NEXTJS_language } from "./TypescriptAndNextjs.js";
import { createSpinner } from "nanospinner";
import ora from "ora";
import chalk from "chalk";
import Animation  from "chalk-animation";
import figlet from "figlet";

let Animation0 = ()=> {
  return new Promise((Animation1)=>{
      setTimeout(Animation1,5000);
  });
};

let Animationtitle1 = Animation.rainbow("Starting Your Quiz App!");
await Animation0();
Animationtitle1.stop();

let Text2 = figlet.textSync("QUIZ APP !",{
  font:"Big",
  });

console.log(chalk.bold(chalk.hex('#9e1b32')(Text2)));

let Animation1 = ()=> {
  return new Promise((Animation1)=>{
      setTimeout(Animation1,5000);
  });
};

let Animationtitle2 = Animation.rainbow("Quiz App Started!");
await Animation1();
Animationtitle2.stop();


const sleep = () => new Promise((r) => setTimeout(r,6000));
  async function StartTime(){
    let anime  = ora(chalk.bold.greenBright('LOADING...')).start();
    anime.color = "yellow";
    await sleep();
    anime.clear();
    anime.stop();
  }


interface USERDATA {
  Username: string;
  DifficultyLevel: string;
  RollNumber: number;
  SubjectEasy: string;
  SubjectIntermediate: string;
  SubjectDifficult: string;
  SubjectDifficult1: string;
  User_Choice: number;
  SubjectEasy1: string;
  SubjectIntermediate3: string;
  restartquiz: string;
  NumberQuestions: number
}

const color1 = chalk.bold.redBright;
const color2 = chalk.bold.greenBright;
const color3 = chalk.bold.blueBright;
const color5 = chalk.bold.magentaBright;
const color6 = chalk.bold.hex('#fdfdd0');
const color7 = chalk.bold.hex('#20b2aa');
const color8 = chalk.bold.hex('#99ffde');
await StartTime();
const TITLE = async (YourTitle: string) => {
  console.log(color7("<<------------------------------------------------>>"));
  console.log(color7("<<------------------------------------------------>>"));
  console.log(color7(`<<--------->> ${color6(`Welcome To Our`)} ${color2(YourTitle)}: <<--------->>`));
  console.log(color7("<<------------------------------------------------>>"));
  console.log(color7("<<------------------------------------------------>>"));
};

  console.log("");

async function QuizApp() {

const USERINPUTS = async () => {

  let totalQuestions = 0;
  let score: number[] = [];
  const selectedSubjects: string[] = [];
  let rollNumber:number = 0;
  let username: string = "";
  let YourTitle;
  YourTitle = "Quiz App";
  TITLE(YourTitle);

  const DIFFICULTY_LEVEL_FOR_QUIZ = async () => {

    console.log("");

    const Difficulty_Level = await inquirer.prompt([
      {
        message: color7("Select Your Quiz Difficulty Level"),
        name: "DifficultyLevel",
        type: "list",
        choices: [
          { name: color8("Easy - [HTML LANGUAGE:, CSS LANGUAGE]"), value: "Easy" },
          { name: color5("Intermediate - [PHP_LANGUAGE, REACT_LANGUAGE]"), value: "Intermediate" },
          { name: color1("Difficult - [TYPESCRIPT_LANGUAGE, NEXTJS_LANGUAGE]"), value: "Difficult" },
        ],
      },
    ]);
    
  
    if (Difficulty_Level.DifficultyLevel === "Easy") {
      await USER_NAME();
      await SELECT_YOUR_SUBJECT1();
    } 
    else if (Difficulty_Level.DifficultyLevel === "Intermediate") {
      await USER_NAME();
      await SELECT_YOUR_SUBJECT2();
    }
     else if (Difficulty_Level.DifficultyLevel === "Difficult") {
      await USER_NAME();
      await SELECT_YOUR_SUBJECT3();
    }

}

  const USER_NAME = async () => {
    
    let TheUsername = false;
    do {
      const User_Name: USERDATA = await inquirer.prompt([
        {
          message: color8("Enter Your Quiz Username: (max Characters 8 OR 18 used in Username) "),
          name: "Username",
          type: "input",
        },
      ]);

      if (User_Name.Username.length >= 8 && User_Name.Username.length <= 18 && isNaN(Number(User_Name.Username))) {
        console.log(color2("Your Username Successfully Identified!"));
         username = User_Name.Username;
        TheUsername = true;
        await ROLL_NUMBER();
      } 
      else {
        console.log(color1("Please Enter a Valid Username that contains 8 Characters OR 18 Characters"));
      }
    } while (!TheUsername);
  };

  const ROLL_NUMBER = async () => {
    let TheRollNumber = false;
    do {
      const User_Roll_Number: USERDATA = await inquirer.prompt([
        {
          message: color8("Enter Your Quiz Roll Number: (That Only Contains 6 Digits!) "),
          name: "RollNumber",
          type: "number",
        },
      ]);

      if (User_Roll_Number.RollNumber >= 100000 && User_Roll_Number.RollNumber <= 999999) {
        
        console.log(color2("Your Roll Number Successfully Verified!"));
        rollNumber = User_Roll_Number.RollNumber;
        TheRollNumber = true;
      } 
      else {
        console.log(color1("Please Enter a valid 6 Digit Roll Number!"));
      }
    } while (!TheRollNumber);
  };

  const SELECT_YOUR_SUBJECT1 = async () => {
    const Subject_Selection1: USERDATA = await inquirer.prompt([
      {
        message: color7("Select Your Subject For Quiz:"),
        name: "SubjectEasy",
        type: "list",
        choices: [
          { name: color8("HTML LANGUAGE:"), value: "HTML LANGUAGE" },
        ],
      },
    ]);

    if (Subject_Selection1.SubjectEasy === "HTML LANGUAGE") {
      const htmlScore = await HTML_language();
      selectedSubjects.push("HTML LANGUAGE");
      score.push(htmlScore);
      console.log(color2(`Your score for HTML LANGUAGE is ${color7(htmlScore)}/10.`));
    }
 
    const Subject_Selection2: USERDATA = await inquirer.prompt([
      {
        message: color7("Select Your Subject For Quiz:"),
        name: "SubjectEasy1",
        type: "list",
        choices: [
          { name: color8("CSS LANGUAGE:"), value: "CSS LANGUAGE" },
        ],
      },
    ]);

    if (Subject_Selection2.SubjectEasy1 === "CSS LANGUAGE") {
      const cssScore = await CSS_language();
      selectedSubjects.push("CSS LANGUAGE");
      score.push(cssScore);
      console.log(color2(`Your score for CSS LANGUAGE is ${color7(cssScore)}/10.`));
    }
  };

  const SELECT_YOUR_SUBJECT2 = async () => {
    const Subject_Selection2: USERDATA = await inquirer.prompt([
      {
        message: color5("Select Your Subject For Quiz:"),
        name: "SubjectIntermediate",
        type: "list",
        choices: [
          { name: color3("PHP LANGUAGE:"), value: "PHP LANGUAGE" },
        ],
      },
    ]);

    if (Subject_Selection2.SubjectIntermediate === "PHP LANGUAGE") {
      const phpScore = await PHP_language();
      selectedSubjects.push("PHP LANGUAGE");
      score.push(phpScore);
      console.log(color2(`Your score for PHP LANGUAGE is ${color7(phpScore)}/10.`));
    }

    const Subject_Selection3: USERDATA = await inquirer.prompt([
      {
        message: color5("Select Your Subject For Quiz:"),
        name: "SubjectIntermediate3",
        type: "list",
        choices: [
          { name: color3("REACT LANGUAGE:"), value: "REACT LANGUAGE" },
        ],
      },
    ]);

    if (Subject_Selection3.SubjectIntermediate3 === "REACT LANGUAGE") {
      const reactScore = await REACT_language();
      selectedSubjects.push("REACT LANGUAGE");
      score.push(reactScore);
      console.log(color2(`Your score for REACT LANGUAGE is ${color7(reactScore)}/10.`));
    }
  };

  const SELECT_YOUR_SUBJECT3 = async () => {
    const Subject_Selection3: USERDATA = await inquirer.prompt([
      {
        message: color1("Select Your Subject For Quiz:"),
        name: "SubjectDifficult",
        type: "list",
        choices: [
          { name: color8("TYPESCRIPT LANGUAGE:"), value: "TYPESCRIPT LANGUAGE" },
        ],
      },
    ]);

    if (Subject_Selection3.SubjectDifficult === "TYPESCRIPT LANGUAGE") {
      const tsScore = await TYPESCRIPT_language();
      selectedSubjects.push("TYPESCRIPT LANGUAGE");
      score.push(tsScore);
      console.log(color2(`Your score for TYPESCRIPT LANGUAGE is ${color7(tsScore)}/10.`));
    }

    const Subject_Selection4: USERDATA = await inquirer.prompt([
      {
        message: color1("Select Your Subject For Quiz:"),
        name: "SubjectDifficult1",
        type: "list",
        choices: [
          { name: color8("NEXTJS LANGUAGE:"), value: "NEXTJS LANGUAGE" },
        ],
      },
    ]);

    if (Subject_Selection4.SubjectDifficult1 === "NEXTJS LANGUAGE") {
      const nextjsScore = await NEXTJS_language();
      selectedSubjects.push("NEXTJS LANGUAGE");
      score.push(nextjsScore);
      console.log(color2(`Your score for NEXTJS LANGUAGE is ${color7(nextjsScore)}/10.`));
    }
  };




  await DIFFICULTY_LEVEL_FOR_QUIZ();



  totalQuestions += selectedSubjects.length * 10;

  const sleep1  = () => new Promise((r) => setTimeout((r),5000));

  let result = ora(chalk.bold.greenBright('Please Wait while we are making overall Result'.toUpperCase())).start();
  result.color = "yellow";
  await sleep1();
  result.clear();
  result.stop();

  const viewResults = await inquirer.prompt([
    {
      message: color2('Do you want to view your results ?'),
      type: 'list',
      name: 'viewResults',
      choices: [
        { name: color2("Yes"), value: "Yes" },
        { name: color1("No"), value: "No" },
      ],
    },
  ]);


  if (viewResults.viewResults === "Yes" && selectedSubjects.length > 0) {
    console.log('-------------------------------------------------------------------------------------------');
    console.log(chalk.bold.bgCyanBright("Overall Results:" + selectedSubjects));
    console.log('-------------------------------------------------------------------------------------------');
    console.log('-------------------------------------------------------------------------------------------');
    console.log(chalk.bold.greenBright(`Your Username: ${username}`));
    console.log('-------------------------------------------------------------------------------------------');
    console.log('-------------------------------------------------------------------------------------------');
    console.log(chalk.bold.yellowBright(`Your Roll Number: ${rollNumber}`));
    console.log('-------------------------------------------------------------------------------------------');
    const totalScore = score.reduce((subject, scoring) => subject + scoring, 0);
    const percentage = (totalScore / totalQuestions) * 100;
    console.log('-------------------------------------------------------------------------------------------');
    console.log(chalk.bold.greenBright(`Your total score for ${selectedSubjects.join(", ")} is ${totalScore}/${totalQuestions}.`));
    let spinner = createSpinner();
    let Ora = ora(chalk.bold.greenBright('Please Wait Calculating Your overall Percentage'.toLocaleUpperCase())).start();
    Ora.color = "yellow";
    await sleep();
    Ora.clear();
    Ora.stop(); 
    console.log('-------------------------------------------------------------------------------------------');
    console.log('-------------------------------------------------------------------------------------------');
    console.log(chalk.magentaBright.bold(`Your overall percentage for ${selectedSubjects.join(", ")} is ${percentage.toFixed(2)}%.`));
    console.log('-------------------------------------------------------------------------------------------');
    if (percentage >= 40) {
      console.log('-------------------------------------------------------------------------------------------');
      spinner.success({ text: chalk.bold.bgGreenBright("Result: You Passed!")});
      console.log('-------------------------------------------------------------------------------------------');
    } 
    else {
      console.log('-------------------------------------------------------------------------------------------');
      spinner.error({text: chalk.bold.bgRedBright("Result You Faild!")});
      console.log('-------------------------------------------------------------------------------------------');
    }
  } 
  else if (viewResults.viewResults === "No") {
    console.log("You have chosen not to show your results.");
  }

  const Restart_Quiz = async () => {
    let restartquizz = true;
    while (restartquizz) {
      const Restart_quiz: USERDATA = await inquirer.prompt([
        {
          message: color8("Do You Want to Restart Your Quiz ?"),
          name: "restartquiz",
          type: "list",
          choices: [
            { name: color2("Yes"), value: "Yes" },
            { name: color1("No"), value: "No" },
          ],
        },
      ]);
      
      if (Restart_quiz.restartquiz === "Yes") {
        restartquizz = false;
        await USERINPUTS();
      } 
      else {
        restartquizz = false;
        console.log("");
        console.log(chalk.bold.whiteBright("-------------------------------------------------------------------"));
        console.log(chalk.bold.whiteBright("-------------------------------------------------------------------"));
        console.log(chalk.bold.greenBright(`---------------- Thanks For Using Our Quiz App Good Bye! ----------------`));
        console.log(chalk.bold.whiteBright("-------------------------------------------------------------------"));
        console.log(chalk.bold.whiteBright("-------------------------------------------------------------------"));
        console.log("");
      }
    }
  };
  await Restart_Quiz();
};

USERINPUTS();
}

QuizApp();
