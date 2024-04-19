import inquirer from "inquirer";
import ora from "ora";
import chalk from "chalk";

export const PHP_language = async () => {
  const sleep = () => new Promise((r) => setTimeout(r,5000));
  const sleep1 = () => new Promise ((r) => setTimeout(r,8000));
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
    Ora1.succeed(chalk.bold.bgGreenBright('Quiz Started Successfully'.toUpperCase()))
  }
console.log();
await StartQuiz();
console.log();
  const PHP = await inquirer.prompt([
    {
      message: '1) What does PHP stand for?',
      type: 'list',
      name: 'Question1',
      choices: [
        { name: 'a) Personal Home Page', value: 'Personal Home Page' },
        { name: 'b) Hypertext Preprocessor', value: 'Hypertext Preprocessor' },
        { name: 'c) PHP: Hypertext Programming', value: 'PHP: Hypertext Programming' },
        { name: 'd) Private Hosting Platform', value: 'Private Hosting Platform' },
      ],
    },
    {
      message: "2) Which PHP function is used to open a file?",
      name: "Question2",
      type: "list",
      choices: [
        { name: 'a) open_file()', value: 'open_file()' },
        { name: 'b) file_open()', value: 'file_open()' },
        { name: 'c) fopen()', value: 'fopen()' },
        { name: 'd) read_file()', value: 'read_file()' },
      ],
    },
    {
      message: "3) How do you comment out multiple lines of code in PHP?",
      name: "Question3",
      type: "list",
      choices: [
        { name: 'a) /* This is a comment */', value: '/* This is a comment */' },
        { name: 'b) // This is a comment //', value: '// This is a comment //' },
        { name: 'c) # This is a comment #', value: '# This is a comment #' },
        { name: 'd) -- This is a comment', value: '-- This is a comment' },
      ],
    },
    {
      message: "4) What is the correct way to start a PHP script?",
      name: "Question4",
      type: "list",
      choices: [
        { name: 'a) <php>', value: '<php>' },
        { name: 'b) <?php>', value: '<?php>' },
        { name: 'c) <script>', value: '<script>' },
        { name: 'd) <? script ?>', value: '<? script ?>' },
      ],
    },
    {
      message: "5) Which PHP function is used to output text?",
      name: "Question5",
      type: "list",
      choices: [
        { name: 'a) print()', value: 'print()' },
        { name: 'b) echo()', value: 'echo()' },
        { name: 'c) output()', value: 'output()' },
        { name: 'd) write()', value: 'write()' },
      ],
    },
    {
      message: "6) What is the correct way to end a PHP script?",
      name: "Question6",
      type: "list",
      choices: [
        { name: 'a) </php>', value: '</php>' },
        { name: 'b) ?>', value: '?>' },
        { name: 'c) </script>', value: '</script>' },
        { name: 'd) <? end ?>', value: '<? end ?>' },
      ],
    },
    {
      message: "7) In PHP, what does the concatenation operator . do?",
      name: "Question7",
      type: "list",
      choices: [
        { name: 'a) Adds two numbers', value: 'Adds two numbers' },
        { name: 'b) Multiplies two numbers', value: 'Multiplies two numbers' },
        { name: 'c) Combines two strings', value: 'Combines two strings' },
        { name: 'd) Divides two numbers', value: 'Divides two numbers' },
      ],
    },
    {
      message: "8) What does PHP's \"if\" statement do?",
      name: "Question8",
      type: "list",
      choices: [
        { name: 'a) Repeats a block of code a specified number of times', value: 'Repeats a block of code a specified number of times' },
        { name: 'b) Executes a block of code if a condition is true', value: 'Executes a block of code if a condition is true' },
        { name: 'c) Defines a function', value: 'Defines a function' },
        { name: 'd) Creates an array', value: 'Creates an array' },
      ],
    },
    {
      message: "9) Which of the following is not a valid PHP variable name?",
      name: "Question9",
      type: "list",
      choices: [
        { name: 'a) $my_variable', value: '$my_variable' },
        { name: 'b) $_variable', value: '$_variable' },
        { name: 'c) $123variable', value: '$123variable' },
        { name: 'd) $var123', value: '$var123' },
      ],
    },
    {
      message: "10) What is the purpose of PHP\'s \"include\" statement?",
      name: "Question10",
      type: "list",
      choices: [
        { name: 'a) To comment out code', value: 'To comment out code' },
        { name: 'b) To import external PHP files', value: 'To import external PHP files' },
        { name: 'c) To define a new function', value: 'To define a new function' },
        { name: 'd) To create a loop', value: 'To create a loop' },
      ],
    },
  ]);


  const correctAnswers = [
    'b) Hypertext Preprocessor',
    'c) fopen()',
    'a) /* This is a comment */',
    '<?php>',
    'b) echo()',
    '?>',
    'c) Combines two strings',
    'b) Executes a block of code if a condition is true',
    '$123variable',
    'b) To import external PHP files',
  ];

  
  let score = 0;
  for (let i = 1; i <= 10; i++) {
    const userAnswer = PHP[`Question${i}`];
    if (userAnswer === correctAnswers[i - 1]) {
      score++;
    }
  }
  return score;
};



export const REACT_language = async () => {
  const sleep = () => new Promise((r) => setTimeout(r,5000));
  const sleep1 = () => new Promise ((r) => setTimeout(r,8000));
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
    Ora1.succeed(chalk.bold.bgGreenBright('Quiz Started Successfully'.toUpperCase()))
  }
console.log();
await StartQuiz();
console.log();
  const userAnswers = await inquirer.prompt([
      {
          message: "1) What is React, and how does it differ from other JavaScript frameworks?",
          name: "Question1",
          type: "list",
          choices: [
            { name: "a) React is a JavaScript framework for building user interfaces.", value: "a) React is a JavaScript framework for building user interfaces." },
            { name: "b) React is a JavaScript library for making HTTP requests.", value: "b) React is a JavaScript library for making HTTP requests." },
            { name: "c) React is a backend framework for building server applications.", value: "c) React is a backend framework for building server applications." },
            { name: "d) React is a database management system.", value: "d) React is a database management system." },
          ],
        },
        {
          message: "2) What is JSX in React, and why is it important?",
          name: "Question2",
          type: "list",
          choices: [
            { name: "a) JSX is a JavaScript extension that allows you to write HTML-like code in your JavaScript files.", value: "a) JSX is a JavaScript extension that allows you to write HTML-like code in your JavaScript files." },
            { name: "b) JSX is a tool for compiling React components into native mobile apps.", value: "b) JSX is a tool for compiling React components into native mobile apps." },
            { name: "c) JSX is a server-side rendering technology for React.", value: "c) JSX is a server-side rendering technology for React." },
            { name: "d) JSX is a styling framework for React applications.", value: "d) JSX is a styling framework for React applications." },
          ],
        },
        {
          message: "3) How do you create a functional component in React?",
          name: "Question3",
          type: "list",
          choices: [
            { name: "a) By extending the React.Component class.", value: "a) By extending the React.Component class." },
            { name: "b) By defining a JavaScript function that returns JSX.", value: "b) By defining a JavaScript function that returns JSX." },
            { name: "c) By using the class keyword and constructor method.", value: "c) By using the class keyword and constructor method." },
            { name: "d) By importing a component from the React library.", value: "d) By importing a component from the React library." },
          ],
        },
        {
          message: "4) What is the purpose of state in a React component, and how do you declare it?",
          name: "Question4",
          type: "list",
          choices: [
            { name: "a) State is used for storing and managing data that can change over time in a component. You declare it using the this.state property.", value: "a) State is used for storing and managing data that can change over time in a component. You declare it using the this.state property." },
            { name: "b) State is used for defining the initial structure of a component. You declare it using the state() function.", value: "b) State is used for defining the initial structure of a component. You declare it using the state() function." },
            { name: "c) State is used for handling HTTP requests in a component. You declare it using the fetchState() method.", value: "c) State is used for handling HTTP requests in a component. You declare it using the fetchState() method." },
            { name: "d) State is used for managing routing in a React application. You declare it using the routeState() property.", value: "d) State is used for managing routing in a React application. You declare it using the routeState() property." },
          ],
        },
        {
          message: "5) What is the key difference between props and state in React?",
          name: "Question5",
          type: "list",
          choices: [
            { name: "a) Props are used for passing data from parent to child components, while state is used for managing data within a component.", value: "a) Props are used for passing data from parent to child components, while state is used for managing data within a component." },
            { name: "b) Props are used for managing data within a component, while state is used for passing data from parent to child components.", value: "b) Props are used for managing data within a component, while state is used for passing data from parent to child components." },
            { name: "c) Props and state are the same and can be used interchangeably.", value: "c) Props and state are the same and can be used interchangeably." },
            { name: "d) Props are used for styling components, while state is used for defining component structure.", value: "d) Props are used for styling components, while state is used for defining component structure." },
          ],
        },
        {
          message: "6) What is the React Virtual DOM, and how does it improve performance?",
          name: "Question6",
          type: "list",
          choices: [
            { name: "a) The React Virtual DOM is a virtual representation of the actual DOM, and it improves performance by minimizing direct manipulation of the actual DOM.", value: "a) The React Virtual DOM is a virtual representation of the actual DOM, and it improves performance by minimizing direct manipulation of the actual DOM." },
            { name: "b) The React Virtual DOM is a real-time database used for storing component data, and it improves performance by caching data.", value: "b) The React Virtual DOM is a real-time database used for storing component data, and it improves performance by caching data." },
            { name: "c) The React Virtual DOM is a tool for rendering 3D graphics in React applications.", value: "c) The React Virtual DOM is a tool for rendering 3D graphics in React applications." },
            { name: "d) The React Virtual DOM is used for creating virtual reality experiences in React applications.", value: "d) The React Virtual DOM is used for creating virtual reality experiences in React applications." },
          ],
        },
        {
          message: "7) What are React hooks, and how do they simplify state management in functional components?",
          name: "Question7",
          type: "list",
          choices: [
            { name: "a) React hooks are functions that allow you to use state and other React features in functional components without writing a class. They simplify state management by providing a concise way to manage component state and side effects.", value: "a) React hooks are functions that allow you to use state and other React features in functional components without writing a class. They simplify state management by providing a concise way to manage component state and side effects." },
            { name: "b) React hooks are a tool for connecting React components to a backend server. They simplify state management by handling server requests.", value: "b) React hooks are a tool for connecting React components to a backend server. They simplify state management by handling server requests." },
            { name: "c) React hooks are used for creating custom animations and transitions in React applications. They simplify state management by providing animation templates.", value: "c) React hooks are used for creating custom animations and transitions in React applications. They simplify state management by providing animation templates." },
            { name: "d) React hooks are used for managing database queries in React applications. They simplify state management by providing database synchronization.", value: "d) React hooks are used for managing database queries in React applications. They simplify state management by providing database synchronization." },
          ],
        },
        {
          message: "8) When might you consider using Redux in a React application, and what problem does it solve?",
          name: "Question8",
          type: "list",
          choices: [
            { name: "a) Redux is typically used in large and complex React applications to manage global state and simplify data flow. It solves the problem of prop drilling and provides a centralized store for application data.", value: "a) Redux is typically used in large and complex React applications to manage global state and simplify data flow. It solves the problem of prop drilling and provides a centralized store for application data." },
            { name: "b) Redux is used for creating animations and transitions in React applications. It solves the problem of complex animation code.", value: "b) Redux is used for creating animations and transitions in React applications. It solves the problem of complex animation code." },
            { name: "c) Redux is used for handling server requests and API calls in React applications. It solves the problem of network latency.", value: "c) Redux is used for handling server requests and API calls in React applications. It solves the problem of network latency." },
            { name: "d) Redux is used for optimizing React applications for mobile devices. It solves the problem of responsive design.", value: "d) Redux is used for optimizing React applications for mobile devices. It solves the problem of responsive design." },
          ],
        },
        {
          message: "9) What is React Router, and how do you implement client-side routing in a React application?",
          name: "Question9",
          type: "list",
          choices: [
            { name: "a) React Router is a library for handling routing in React applications. You can implement client-side routing by defining routes and components, and then rendering the appropriate component based on the URL.", value: "a) React Router is a library for handling routing in React applications. You can implement client-side routing by defining routes and components, and then rendering the appropriate component based on the URL." },
            { name: "b) React Router is a tool for server-side rendering in React applications. You can implement client-side routing by configuring the server to handle URL changes.", value: "b) React Router is a tool for server-side rendering in React applications. You can implement client-side routing by configuring the server to handle URL changes." },
            { name: "c) React Router is used for creating complex animations and transitions in React applications. You can implement client-side routing by defining animation routes.", value: "c) React Router is used for creating complex animations and transitions in React applications. You can implement client-side routing by defining animation routes." },
            { name: "d) React Router is a database management system for React applications. You can implement client-side routing by defining database routes.", value: "d) React Router is a database management system for React applications. You can implement client-side routing by defining database routes." },
          ],
        },
        {
          message: "10) Explain the component lifecycle methods in React and provide examples of when each method is called during a component's lifecycle.",
          name: "Question10",
          type: "list",
          choices: [
            { name: "a) The component lifecycle methods in React include componentDidMount, componentDidUpdate, and componentWillUnmount. componentDidMount is called after the component is rendered, componentDidUpdate is called when the component's state or props change, and componentWillUnmount is called before the component is removed from the DOM.", value: "a) The component lifecycle methods in React include componentDidMount, componentDidUpdate, and componentWillUnmount. componentDidMount is called after the component is rendered, componentDidUpdate is called when the component's state or props change, and componentWillUnmount is called before the component is removed from the DOM." },
            { name: "b) The component lifecycle methods in React include render, update, and remove. Render is called when the component is initially rendered, update is called when the component's state changes, and remove is called when the component is deleted from the code.", value: "b) The component lifecycle methods in React include render, update, and remove. Render is called when the component is initially rendered, update is called when the component's state changes, and remove is called when the component is deleted from the code." },
            { name: "c) The component lifecycle methods in React include create, modify, and delete. Create is called when the component is first created, modify is called when the component's state is updated, and delete is called when the component is removed from the DOM.", value: "c) The component lifecycle methods in React include create, modify, and delete. Create is called when the component is first created, modify is called when the component's state is updated, and delete is called when the component is removed from the DOM." },
            { name: "d) The component lifecycle methods in React include init, update, and finish. Init is called when the component is initialized, update is called when the component's props change, and finish is called when the component is finished rendering.", value: "d) The component lifecycle methods in React include init, update, and finish. Init is called when the component is initialized, update is called when the component's props change, and finish is called when the component is finished rendering." },
          ],
        },
  ]);

  const correctAnswers = [
    "a) React is a JavaScript framework for building user interfaces.",
    "a) JSX is a JavaScript extension that allows you to write HTML-like code in your JavaScript files.",
    "b) By defining a JavaScript function that returns JSX.",
    "a) State is used for storing and managing data that can change over time in a component. You declare it using the this.state property.",
    "a) Props are used for passing data from parent to child components, while state is used for managing data within a component.",
    "a) The React Virtual DOM is a virtual representation of the actual DOM, and it improves performance by minimizing direct manipulation of the actual DOM.",
    "a) React hooks are functions that allow you to use state and other React features in functional components without writing a class. They simplify state management by providing a concise way to manage component state and side effects.",
    "a) Redux is typically used in large and complex React applications to manage global state and simplify data flow. It solves the problem of prop drilling and provides a centralized store for application data.",
    "a) React Router is a library for handling routing in React applications. You can implement client-side routing by defining routes and components, and then rendering the appropriate component based on the URL.",
    "a) The component lifecycle methods in React include componentDidMount, componentDidUpdate, and componentWillUnmount. componentDidMount is called after the component is rendered, componentDidUpdate is called when the component's state or props change, and componentWillUnmount is called before the component is removed from the DOM.",
  ];

  let score = 0;
  for (let i = 1; i <= 10; i++) {
    const userAnswer = userAnswers[`Question${i}`];
    if (userAnswer === correctAnswers[i - 1]) {
      score++;
    }
  }
  return score;
};
