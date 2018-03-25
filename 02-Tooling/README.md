# TOOLING

- Intro
- Resources
- Review
- SVG
    - Creating SVGs
    - Interacting with SVGs
- Dev Tools
- Visual Studio Code
- Node.js
    - NPM
- Terminal
- Zeit
    - Now CLI
    - Now Desktop
- Excercise
    - Structure
    - Serving
    - Deploying
- Homework


## Intro

Today we are going to make use of the following services/software:

- Zeit.co / Now (Deployments)
- Node.js
- NPM Modules
- Local Development
- Code editing

## Resources

- https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Introduction (SVG Intro)
- https://www.sketchapp.com (Sketch)
- https://gist.github.com/poopsplat/7195274 (Terminal Cheat Sheet)
- https://www.npmjs.com NPM
- https://nodejs.org/en Node.js
- https://code.visualstudio.com VS Code
- https://zeit.co Zeit
- https://zeit.co/blog/now-app (Now App)
- https://www.npmjs.com/package/serve (Serve)

## Review

Let's take a couple of minutes to go over what we learned last lesson.

- Structure
- HTML
- CSS
- JS

## SVG

Scalable Vector Graphics, a XML defined vector based graphics.

```html
<!DOCTYPE html>
<html>
    <body>

    <h1>SVG Example</h1>

    <svg width="100" height="100">

        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />

    </svg>

    </body>
</html>
```

## Creating an SVG

Most of any vector based software will generate SVG images. My recommendation is Sketch, simple and very powerful. PLease check resources above for the link.

![alt text](https://cdn.pbrd.co/images/HdxjYV3.gif "Sketch")

## Interacting with an SVG

Being an HTML element, we can interact with SVGs in a very similar way as we interact with other elements.

```html
<!DOCTYPE html>
<html>
    <body>

    <svg width="100" height="100">

        <circle id="main_circle" cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />

    </svg>

    </body>
</html>
```

```css
svg circle {
  stroke: blue;
}

/* OR */

#main_circle {
  stroke: yellow;
}
```

```js
document.querySelector("#main_circle").style.stroke = "red";
document.querySelector("svg rect").style.stroke = "red";

// New methods / attributes
document.querySelector("#main_circle").setAttribute("fill", "red");
```

## Dev Tools

Google Chrome can help us debug and edit our code.


```bash
option + command + i
```


This will open the Dev Tools. You can see the JavaScript Console, DOM and Styles.


## Visual Studio Code


Download & Install: https://code.visualstudio.com


Feel free to use any other editor, but I'll be using VS Code for the rest of the course.


Recommended Extensions:

- Terminal (required)
- Prettier - Code Formatter
- Beautify

![alt text](https://cdn.pbrd.co/images/HdxzgGi.gif "VS Code")

## Node.js


**macOs installations should be non trivial. If you use Windows and run into any issues, please let me know! We'll figure it out outside of the lesson time**


Download & Install Node.js: https://nodejs.org/en/


JavaScript server side development/runtime environment.

- Open Source
- NPM (largest ecosystem of packages)
- Robust Development Environment
- Well suited for realtime, multiple connection projects, websites, etc.

### NPM

Check out: https://www.npmjs.com/


Javascript Package Manager. World largest software registry.


Here we can find external libraries, code projects, useful snippets - and add them directly to our projects.


We'll be using two packages: `now` and `serve`, but we'll cover the installation once we interact with the terminal.


Please note NPM is not the only way to add external packages to your project, but it does streamline the process. We'll not be using `npm` to the full capacity, but I'll create code examples.

## Terminal

![alt text](https://cdn.pbrd.co/images/HdxHwkn.gif "Terminal")


Provides text-based access to the operating system. A text-based emulator that allow us interacting with files, tasks, etc.


**Terminal** is the default for macOS/Linux, **Command Prompt** in Windows.


There are many emulators available. I personally like Hyper since it can be edited with CSS/JS, making it extremely extendable. Not needed, but worth checking out!


- Hyper: https://hyper.is/


### Useful commands

```bash
~ ls (list directories)
~ cd _directory_ (go to directory)
~ cd ... (go back/up one directory)
```

Check out the Cheat Sheet
https://gist.github.com/poopsplat/7195274


## Zeit

Platform to deploy and host websites, instantly.

- Sign up: https://zeit.co/signup
- Verify Code sent to your email.
- Select Individual Plan
- Pick your Username


### Now CLI

https://zeit.co/download#now-cli


Now command line interface. This allow us to interact with Now through the terminal.


```bash
~ npm install -g now
```


Let's login to our Zeit Now account:


```bash
~ now login
```


Confirm the email sent and that's it!


You can always donwload the binary/app directly from the link above.


### Now Desktop

If you have issues working with the terminal, you can always use the Desktop App:


Download & install: https://zeit.co/download


You can deploy anything by drag + drop. In our case, we can just drag our project folder and deploy it to a custom URL generated by Now.


Some extra information: https://zeit.co/blog/now-app

## Putting it All Together

We are going to create a sample project locally and deploy it to Zeit. Please follow along if you can!

### Basic Project Structure

Let's create the basic project structure.

- **/html-structure**
  - index.html
  - css
    - styles.css
  - js
    - scripts.js
  - media
    - huey.jpg

Download the code examples under Resources or create a new folder from scratch. I'll be creating all this from scracth using VS Code.

**index.html**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Meta Tags / Head Info / Standard -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Extarnal Styles -->
    <link rel="stylesheet" href="./css/styles.css" />
    <!-- CDN Styles -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/0.5.1/tailwind.min.css" />
    <title>Title</title>
</head>

<body>
    <!-- Content goes here -->
    <h1>
        hi! :)
    </h1>
    <script src="./js/scripts.js"></script>
</body>

</html>
```

**css/styles.js**

```css
/*
        Comments :~)
    */
body {
  background-color: teal;
  color: gold;
}
p {
  color: white;
  background: black;
}
```

**js/scripts.js**

```js
console.log("I'm useful");
// alert("Hello, world!");
// document.querySelector("p").style.background = "purple";
```

### Serving

We need to create a small server in our project folder to `run` the website. Static websites (just HTML + CSS) can run directly in the browser with no `server`. When we add the JavaScript layer, we need to add a `server` and `serve` the website, to be able to interact with the DOM.


- Open Terminal in VS Code.
  - Or open your project directory with Terminal itself


We are goind to use a NPM package called Serve. Serve creates a small serve for our project directory.

```bash
~ npm install -g serve
```


This command will install the package and make it avaliable for us to use with Terminal.


Let's try to serve our current project.


Make sure you are in the project directory that contains the `index.html`

```bash
~ serve
```

To shut down the server,

```bash
control + c
```

### Deploying

To deploy this to a web address that can be shared, we'll use Now.


In the root directory, type in the Terminal:

```bash
now
```


If this is your first time, type `y` and `return` when prompted about the terms of your free plan.


Now will copy the generated url to your clipboard:


https://html-structure-kkecqllyog.now.sh/


You can also do this using Now Desktop by draggin your project folder to it.

**ALIASES**

One of the nice things of Zeit Now is that it let us create an `alias` for our deployments. The URLs generated by Zeit are somewhat random, we can make them a little prettier.


```bash
~ now alias https://html-structure-kkecqllyog.now.sh/ some-nice-name
```

This will map your deployment to some-nice-name.now.sh


We can map to domain names we purchase as well, but not under the free plan.


## Homework

Create and deploy a web application, using the tools from this lesson.

### Requirements

- Correct HTML project strcuture.
- Serve and work locally.
- Include at least on SVG element.
- Include Images using the `<img>` tag.
- Interact with the SVG element using JavaScript.
- Include and external library and use it (**extra**) 
- Deploy website to Now.
- Create an alias for your project.

### Submission

Let's keep the same submission structure, but this time we are also goign to include the local project, under the /assets folder.


Refer to the code examples (hw-template) / resources at the top of the page.


Please include your Zeit Now deployment URL and Alias URL in the markdown file.


**Please Read Introduction**

- https://eloquentjavascript.net/00_intro.html


**DUE! SATURDAY APRIL 1st**

- Local Project + ZIP export

_Please submit to CANVAS and follow the required submission structure_
