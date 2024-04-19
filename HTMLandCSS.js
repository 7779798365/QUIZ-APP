import inquirer from "inquirer";
import ora from "ora";
import chalk from "chalk";
export const HTML_language = async () => {
    const sleep = () => new Promise((r) => setTimeout(r, 5000));
    const sleep1 = () => new Promise((r) => setTimeout(r, 8000));
    const StartQuiz = async () => {
        let Ora = ora(chalk.bold.greenBright('Starting your Quiz'.toUpperCase())).start();
        Ora.color = "yellow";
        await sleep();
        Ora.clear();
        Ora.stop();
        let Ora1 = ora(chalk.bold.blueBright('Please Wait While we are Starting Your Quiz'.toUpperCase())).start();
        Ora1.color = "yellow";
        await sleep1();
        Ora1.clear();
        Ora1.stop();
        Ora1.succeed(chalk.bold.bgGreenBright('Quiz Started Successfully'.toUpperCase()));
    };
    console.log();
    await StartQuiz();
    console.log();
    const HTML = await inquirer.prompt([
        {
            message: "1) HTML stands for?",
            name: "Question1",
            type: "list",
            choices: [
                { name: "a) Hyperlink Text Markup Language", value: "a) Hyperlink Text Markup Language" },
                { name: "b) Hyper Transfer Markup Language", value: "b) Hyper Transfer Markup Language" },
                { name: "c) Hyper Text Makeup Language", value: "c) Hyper Text Makeup Language" },
                { name: "d) Hyper Text Markup Language", value: "d) Hyper Text Markup Language" },
            ],
        },
        {
            message: "2) Which HTML tag is used to create a hyperlink?",
            name: "Question2",
            type: "list",
            choices: [
                { name: "a) <link>", value: "a) <link>" },
                { name: "b) <a>", value: "b) <a>" },
                { name: "c) <href>", value: "c) <href>" },
                { name: "d) <hyperlink>", value: "<hyperlink>" },
            ],
        },
        {
            message: "3) What is the purpose of the HTML <head> element?",
            name: "Question3",
            type: "list",
            choices: [
                { name: "a) It defines the main content of the web page.", value: "a) It defines the main content of the web page" },
                { name: "b) It contains metadata about the web page.", value: "b) It contains metadata about the web page." },
                { name: "c) It specifies the visible content of the web page.", value: "c) It specifies the visible content of the web page." },
                { name: "d) It defines the layout of the web page.", value: "d) It defines the layout of the web page." },
            ],
        },
        {
            message: "4) Which HTML tag is used to create an ordered list?",
            name: "Question4",
            type: "list",
            choices: [
                { name: "a) <ul>", value: "a) <ul>" },
                { name: "b) <li>", value: "b) <li>" },
                { name: "c) <ol>", value: "c) <ol>" },
                { name: "d) <dl>", value: "d) <dl>" },
            ],
        },
        {
            message: "5) What does the HTML <br> tag represent?",
            name: "Question5",
            type: "list",
            choices: [
                { name: "a) A line break", value: "a) A line break" },
                { name: "b) A paragraph", value: "b) A paragraph" },
                { name: "c) A bold text", value: "c) A bold text" },
                { name: "d) A heading", value: "d) A heading" },
            ],
        },
        {
            message: "6) Which HTML element is used to define the structure of a table?",
            name: "Question6",
            type: "list",
            choices: [
                { name: "a) <table>", value: "a) <table>" },
                { name: "b) <row>", value: "b) <row>" },
                { name: "c) <column>", value: "c) <column>" },
                { name: "d) <grid>", value: "d) <grid>" },
            ],
        },
        {
            message: "7) What is the correct way to comment out multiple lines of HTML code?",
            name: "Question7",
            type: "list",
            choices: [
                { name: "a) <!-- This is a comment -->", value: "a) <!-- This is a comment -->" },
                { name: "b) // This is a comment //", value: "b) // This is a comment //" },
                { name: "c) /* This is a comment */", value: "c) /* This is a comment */" },
            ],
        },
        {
            message: "8) Which attribute is used to specify the alternative text for an image in HTML?",
            name: "Question8",
            type: "list",
            choices: [
                { name: "a) alt", value: "a) alt" },
                { name: "b) title", value: "b) title" },
                { name: "c) src", value: "c) src" },
                { name: "d) img", value: "d) img" },
            ],
        },
        {
            message: "9) What is the HTML tag used to create a hyperlink that opens in a new browser window or tab?",
            name: "Question9",
            type: "list",
            choices: [
                { name: "a) <open>", value: "a) <open>" },
                { name: "b) <newtab>", value: "b) <newtab>" },
                { name: "c) <blank>", value: "c) <blank>" },
                { name: "d) <a> with target=\"_blank\"", value: "d) <a> with target=\"_blank\"" },
            ],
        },
        {
            message: "10) Which HTML element is used to create a form in a web page?",
            name: "Question10",
            type: "list",
            choices: [
                { name: "a) <input>", value: "a) <input>" },
                { name: "b) <form>", value: "b) <form>" },
                { name: "c) <submit>", value: "c) <submit>" },
                { name: "d) <button>", value: "d) <button>" },
            ],
        },
    ]);
    const correctAnswers = [
        "d) Hyper Text Markup Language",
        "b) <a>",
        "b) It contains metadata about the web page.",
        "c) <ol>",
        "a) A line break",
        "a) <table>",
        "a) <!-- This is a comment -->",
        "a) alt",
        "d) <a> with target=\"_blank\"",
        "b) <form>",
    ];
    let score = 0;
    for (let i = 1; i <= 10; i++) {
        const userAnswer = HTML[`Question${i}`];
        if (userAnswer === correctAnswers[i - 1]) {
            score++;
        }
    }
    return score;
};
export const CSS_language = async () => {
    const sleep = () => new Promise((r) => setTimeout(r, 5000));
    const sleep1 = () => new Promise((r) => setTimeout(r, 8000));
    const StartQuiz = async () => {
        let Ora = ora(chalk.bold.greenBright('Starting your Quiz'.toUpperCase())).start();
        Ora.color = "yellow";
        await sleep();
        Ora.clear();
        Ora.stop();
        let Ora1 = ora(chalk.bold.blueBright('Please Wait While we are Starting Your Quiz'.toUpperCase())).start();
        Ora1.color = "yellow";
        await sleep1();
        Ora1.clear();
        Ora1.stop();
        Ora1.succeed(chalk.bold.bgGreenBright('Quiz Started Successfully'.toUpperCase()));
    };
    console.log();
    await StartQuiz();
    console.log();
    const CSS = await inquirer.prompt([
        {
            message: "1) What does CSS stand for?",
            name: "Question1",
            type: "list",
            choices: [
                { name: "a) Cascading Style Sheet", value: "a) Cascading Style Sheet" },
                { name: "b) Computer Style Sheet", value: "b) Computer Style Sheet" },
                { name: "c) Creative Style Sheet", value: "c) Creative Style Sheet" },
                { name: "d) Colorful Style Sheet", value: "d) Colorful Style Sheet" },
            ],
        },
        {
            message: "2) How do you select an element with id 'myElement' in CSS?",
            name: "Question2",
            type: "list",
            choices: [
                { name: "a) #myElement", value: "a) #myElement" },
                { name: "b) .myElement", value: "b) .myElement" },
                { name: "c) *myElement", value: "c) *myElement" },
                { name: "d) element.myElement", value: "d) element.myElement" },
            ],
        },
        {
            message: "3) What is the property used to change the background color of an element in CSS?",
            name: "Question3",
            type: "list",
            choices: [
                { name: "a) background-color", value: "a) background-color" },
                { name: "b) color", value: "b) color" },
                { name: "c) text-color", value: "c) text-color" },
                { name: "d) bgcolor", value: "d) bgcolor" },
            ],
        },
        {
            message: "4) How do you comment out a single line in CSS?",
            name: "Question4",
            type: "list",
            choices: [
                { name: "a) // This is a comment", value: "a) // This is a comment" },
                { name: "b) /* This is a comment */", value: "b) /* This is a comment */" },
                { name: "c) // This is a comment //", value: "c) // This is a comment //" },
                { name: "d) <!-- This is a comment -->", value: "d) <!-- This is a comment -->" },
            ],
        },
        {
            message: "5) Which CSS property is used for controlling the spacing between lines of text?",
            name: "Question5",
            type: "list",
            choices: [
                { name: "a) line-height", value: "a) line-height" },
                { name: "b) text-spacing", value: "b) text-spacing" },
                { name: "c) letter-spacing", value: "c) letter-spacing" },
                { name: "d) word-spacing", value: "d) word-spacing" },
            ],
        },
        {
            message: "6) How do you include an external CSS file in an HTML document?",
            name: "Question6",
            type: "list",
            choices: [
                { name: "a) <link rel='stylesheet' type='text/css' href='styles.css'>", value: "a) <link rel='stylesheet' type='text/css' href='styles.css'>" },
                { name: "b) <style src='styles.css'>", value: "b) <style src='styles.css'>" },
                { name: "c) <css href='styles.css'>", value: "c) <css href='styles.css'>" },
            ],
        },
        {
            message: "7) Which CSS property is used to control the size of text font?",
            name: "Question7",
            type: "list",
            choices: [
                { name: "a) font-size", value: "a) font-size" },
                { name: "b) text-size", value: "b) text-size" },
                { name: "c) size", value: "c) size" },
                { name: "d) text-font", value: "d) text-font" },
            ],
        },
        {
            message: "8) How do you apply CSS styles to an HTML element with the class 'myClass'?",
            name: "Question8",
            type: "list",
            choices: [
                { name: "a) .myClass { /* styles here */ }", value: "a) .myClass { /* styles here */ }" },
                { name: "b) #myClass { /* styles here */ }", value: "b) #myClass { /* styles here */ }" },
                { name: "c) element.myClass { /* styles here */ }", value: "c) element.myClass { /* styles here */ }" },
            ],
        },
        {
            message: "9) Which CSS property is used to make text bold?",
            name: "Question9",
            type: "list",
            choices: [
                { name: "a) font-weight", value: "a) font-weight" },
                { name: "b) text-weight", value: "b) text-weight" },
                { name: "c) bold", value: "c) bold" },
                { name: "d) text-bold", value: "d) text-bold" },
            ],
        },
        {
            message: "10) How do you center-align an element horizontally in CSS?",
            name: "Question10",
            type: "list",
            choices: [
                { name: "a) text-align: center;", value: "a) text-align: center;" },
                { name: "b) align: center;", value: "b) align: center;" },
                { name: "c) horizontal-align: center;", value: "c) horizontal-align: center;" },
                { name: "d) center: horizontal;", value: "d) center: horizontal;" },
            ],
        },
    ]);
    const correctAnswers = [
        "a) Cascading Style Sheet",
        "a) #myElement",
        "a) background-color",
        "b) /* This is a comment */",
        "a) line-height",
        "a) <link rel='stylesheet' type='text/css' href='styles.css'>",
        "a) font-size",
        "a) .myClass { /* styles here */ }",
        "a) font-weight",
        "a) text-align: center;",
    ];
    let score = 0;
    for (let i = 1; i <= 10; i++) {
        const userAnswer = CSS[`Question${i}`];
        if (userAnswer === correctAnswers[i - 1]) {
            score++;
        }
    }
    return score;
};
