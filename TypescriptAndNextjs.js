import inquirer from "inquirer";
import ora from "ora";
import chalk from "chalk";
export const TYPESCRIPT_language = async () => {
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
    const Typescript = await inquirer.prompt([
        {
            message: '1) What is TypeScript?',
            type: 'list',
            name: 'Question1',
            choices: [
                { name: 'a) A superset of JavaScript', value: 'A superset of JavaScript' },
                { name: 'b) A new programming language', value: 'A new programming language' },
                { name: 'c) A style of HTML coding', value: 'A style of HTML coding' },
                { name: 'd) A database management system', value: 'A database management system' },
            ],
        },
        {
            message: "2) Which tool is commonly used to transpile TypeScript to JavaScript?",
            name: "Question2",
            type: "list",
            choices: [
                { name: 'a) Webpack', value: 'Webpack' },
                { name: 'b) TypeScript Compiler (tsc)', value: 'TypeScript Compiler (tsc)' },
                { name: 'c) Babel', value: 'Babel' },
                { name: 'd) Node.js', value: 'Node.js' },
            ],
        },
        {
            message: "3) What is a key benefit of using TypeScript?",
            name: "Question3",
            type: "list",
            choices: [
                { name: 'a) It adds runtime type checking to JavaScript', value: 'It adds runtime type checking to JavaScript' },
                { name: 'b) It allows you to write HTML code', value: 'It allows you to write HTML code' },
                { name: 'c) It compiles directly to machine code', value: 'It compiles directly to machine code' },
                { name: 'd) It replaces the need for CSS', value: 'It replaces the need for CSS' },
            ],
        },
        {
            message: "4) How do you define a variable with a specific type in TypeScript?",
            name: "Question4",
            type: "list",
            choices: [
                { name: 'a) Using the "var" keyword', value: 'Using the "var" keyword' },
                { name: 'b) Using the "let" keyword', value: 'Using the "let" keyword' },
                { name: 'c) Using the "const" keyword', value: 'Using the "const" keyword' },
                { name: 'd) Using the colon notation, e.g., "x: number"', value: 'Using the colon notation, e.g., "x: number"' },
            ],
        },
        {
            message: "5) Which TypeScript feature allows you to define custom data types?",
            name: "Question5",
            type: "list",
            choices: [
                { name: 'a) Interfaces', value: 'Interfaces' },
                { name: 'b) Loops', value: 'Loops' },
                { name: 'c) Classes', value: 'Classes' },
                { name: 'd) Promises', value: 'Promises' },
            ],
        },
        {
            message: "6) What is the purpose of the TypeScript \"class\" keyword?",
            name: "Question6",
            type: "list",
            choices: [
                { name: 'a) To define a function', value: 'To define a function' },
                { name: 'b) To create an instance of an object', value: 'To create an instance of an object' },
                { name: 'c) To define a custom data type', value: 'To define a custom data type' },
                { name: 'd) To import external libraries', value: 'To import external libraries' },
            ],
        },
        {
            message: "7) How do you declare an array of numbers in TypeScript?",
            name: "Question7",
            type: "list",
            choices: [
                { name: 'a) let numbers = []', value: 'let numbers = []' },
                { name: 'b) let numbers = {}', value: 'let numbers = {}' },
                { name: 'c) let numbers: number[] = []', value: 'let numbers: number[] = []' },
                { name: 'd) let numbers: array = []', value: 'let numbers: array = []' },
            ],
        },
        {
            message: "8) Which TypeScript feature allows you to handle asynchronous operations more effectively?",
            name: "Question8",
            type: "list",
            choices: [
                { name: 'a) Interfaces', value: 'Interfaces' },
                { name: 'b) Promises', value: 'Promises' },
                { name: 'c) Classes', value: 'Classes' },
                { name: 'd) Loops', value: 'Loops' },
            ],
        },
        {
            message: "9) How do you import external modules in TypeScript?",
            name: "Question9",
            type: "list",
            choices: [
                { name: 'a) Using the "import" keyword', value: 'Using the "import" keyword' },
                { name: 'b) Using the "require" keyword', value: 'Using the "require" keyword' },
                { name: 'c) By copying and pasting the code', value: 'By copying and pasting the code' },
                { name: 'd) There is no way to import modules in TypeScript', value: 'There is no way to import modules in TypeScript' },
            ],
        },
        {
            message: "10) What TypeScript tool can help catch common coding mistakes and enforce coding standards?",
            name: "Question10",
            type: "list",
            choices: [
                { name: 'a) TypeScript Linter', value: 'TypeScript Linter' },
                { name: 'b) TypeScript Debugger', value: 'TypeScript Debugger' },
                { name: 'c) TypeScript Bundler', value: 'TypeScript Bundler' },
                { name: 'd) TypeScript Transpiler', value: 'TypeScript Transpiler' },
            ],
        },
    ]);
    const correctAnswers = [
        'a) A superset of JavaScript',
        'b) TypeScript Compiler (tsc)',
        'a) It adds runtime type checking to JavaScript',
        'd) Using the colon notation, e.g., "x: number"',
        'a) Interfaces',
        'c) To define a custom data type',
        'c) let numbers: number[] = []',
        'b) Promises',
        'a) Using the "import" keyword',
        'a) TypeScript Linter',
    ];
    let score = 0;
    for (let i = 1; i <= 10; i++) {
        const userAnswer = Typescript[`Question${i}`];
        if (userAnswer === correctAnswers[i - 1]) {
            score++;
        }
    }
    return score;
};
export const NEXTJS_language = async () => {
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
    const Nextjs = await inquirer.prompt([
        {
            type: 'list',
            name: 'Question1',
            message: '1. What is Next.js?',
            choices: [
                { name: 'a) A JavaScript runtime environment', value: 'a) A JavaScript runtime environment' },
                { name: 'b) A front-end JavaScript framework', value: 'b) A front-end JavaScript framework' },
                { name: 'c) A full-stack JavaScript framework', value: 'c) A full-stack JavaScript framework' },
                { name: 'd) A back-end JavaScript framework', value: 'd) A back-end JavaScript framework' },
            ],
        },
        {
            type: 'list',
            name: 'Question2',
            message: '2. What is the primary advantage of server-side rendering (SSR) in Next.js?',
            choices: [
                { name: 'a) Improved SEO (Search Engine Optimization)', value: 'a) Improved SEO (Search Engine Optimization)' },
                { name: 'b) Faster initial page load', value: 'b) Faster initial page load' },
                { name: 'c) Enhanced client-side interactivity', value: 'c) Enhanced client-side interactivity' },
                { name: 'd) Simpler code structure', value: 'd) Simpler code structure' },
            ],
        },
        {
            type: 'list',
            name: 'Question3',
            message: '3. Which Next.js lifecycle method allows data fetching on the server side?',
            choices: [
                { name: 'a) componentDidMount', value: 'a) componentDidMount' },
                { name: 'b) getServerSideProps', value: 'b) getServerSideProps' },
                { name: 'c) useEffect', value: 'c) useEffect' },
                { name: 'd) getInitialProps', value: 'd) getInitialProps' },
            ],
        },
        {
            type: 'list',
            name: 'Question4',
            message: '4. What folder is used to create dynamic routes in Next.js?',
            choices: [
                { name: 'a) components', value: 'a) components' },
                { name: 'b) pages', value: 'b) pages' },
                { name: 'c) routes', value: 'c) routes' },
                { name: 'd) dynamic', value: 'd) dynamic' },
            ],
        },
        {
            type: 'list',
            name: 'Question5',
            message: '5. Which command is used to create a new Next.js application?',
            choices: [
                { name: 'a) npm create next-app', value: 'a) npm create next-app' },
                { name: 'b) npm init react-app', value: 'b) npm init react-app' },
                { name: 'c) npx create-next-app', value: 'c) npx create-next-app' },
                { name: 'd) npm install next', value: 'd) npm install next' },
            ],
        },
        {
            type: 'list',
            name: 'Question6',
            message: '6. What is the purpose of the "_app.js" or "_app.tsx" file in a Next.js project?',
            choices: [
                { name: 'a) Defining global CSS styles', value: 'a) Defining global CSS styles' },
                { name: 'b) Creating API routes', value: 'b) Creating API routes' },
                { name: 'c) Configuring server settings', value: 'c) Configuring server settings' },
                { name: 'd) Initializing Redux state', value: 'd) Initializing Redux state' },
            ],
        },
        {
            type: 'list',
            name: 'Question7',
            message: '7. Which package is used to add TypeScript support to a Next.js project?',
            choices: [
                { name: 'a) next-typescript', value: 'a) next-typescript' },
                { name: 'b) @types/next', value: 'b) @types/next' },
                { name: 'c) typescript', value: 'c) typescript' },
                { name: 'd) TypeScript is built-in; no package needed', value: 'd) TypeScript is built-in; no package needed' },
            ],
        },
        {
            type: 'list',
            name: 'Question8',
            message: '8. How do you create a custom 404 error page in Next.js?',
            choices: [
                { name: 'a) Create a file named "_error.js" in the "pages" directory', value: 'a) Create a file named "_error.js" in the "pages" directory' },
                { name: 'b) Create a file named "404.js" in the "pages" directory', value: 'b) Create a file named "404.js" in the "pages" directory' },
                { name: 'c) Use the "Error" component from "next/error"', value: 'c) Use the "Error" component from "next/error' },
                { name: 'd) Configure it in the "next.config.js" file', value: 'd) Configure it in the "next.config.js" file' },
            ],
        },
        {
            type: 'list',
            name: 'Question9',
            message: '9. What is the purpose of the "getStaticPaths" function in Next.js?',
            choices: [
                { name: 'a) Pre-rendering dynamic routes at build time', value: 'a) Pre-rendering dynamic routes at build time' },
                { name: 'b) Handling form submissions', value: 'b) Handling form submissions' },
                { name: 'c) Managing API requests', value: 'c) Managing API requests' },
                { name: 'd) Enabling serverless functions', value: 'd) Enabling serverless functions' },
            ],
        },
        {
            type: 'list',
            name: 'Question10',
            message: '10. How can you deploy a Next.js application to a production server?',
            choices: [
                { name: 'a) Run "npm run deploy"', value: 'a) Run "npm run deploy"' },
                { name: 'b) Copy and paste the files to the server manually', value: 'b) Copy and paste the files to the server manually' },
                { name: 'c) Use Vercel, Netlify, or other hosting platforms that support Next.js', value: 'c) Use Vercel, Netlify, or other hosting platforms that support Next.js' },
                { name: 'd) Use FTP to upload the files to the server', value: 'd) Use FTP to upload the files to the server' },
            ],
        },
    ]);
    const correctAnswers = [
        'b) A front-end JavaScript framework',
        'a) Improved SEO (Search Engine Optimization)',
        'b) getServerSideProps',
        'b) pages',
        'c) npx create-next-app',
        'a) Defining global CSS styles',
        'd) TypeScript is built-in; no package needed',
        'a) Create a file named "404.js" in the "pages" directory',
        'a) Pre-rendering dynamic routes at build time',
        'c) Use Vercel, Netlify, or other hosting platforms that support Next.js',
    ];
    let score = 0;
    for (let i = 1; i <= 10; i++) {
        const userAnswer = Nextjs[`Question${i}`];
        if (userAnswer === correctAnswers[i - 1]) {
            score++;
        }
    }
    return score;
};
