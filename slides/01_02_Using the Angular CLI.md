<!-- .slide: data-state="title" -->
# Learn Angular
Angular CLI

> > Author Notes:
Something common in modern frameworks is to provide a quick way to set up your projects and Angular does this using something called the Angular CLI. Let's take a look  at what it is and how it works.

---

## Angular CLI

- Command Line Interface
- Scaffolds an application
- Highly opinionated
- Requirements

> > Author Notes:
- A CLI is a commmand line interface, or an application that you access through a terminal to perform a variety of common tasks.
- The Angular CLI is mainly used to scaffold an application. That means creating an application with common settings quickly using a simple command.
- Angular's CLI is highly opinionated, so the basic scaffolding command is going to set up an application that not be the way you would set up your own application, but it's pretty common to use it to get started and I'll walk you through what it does and how to customize things.
- Using the CLI requires a separate installation and you have to make sure you've already installed NodeJS as well as Git. Within Node.js, you'll also be using npm or the Node Package Manager, which means you should be familiar with those technologies.

---

## Main CLI Commands

- `ng new NAME`
- `ng serve`
- `ng build`
- `ng g TYPE NAME`

> > Author Notes:
The CLI has a several commands you can use to create, serve, build, generate components and much more. They all start with the ng prefix. Let's take a look at the most common commands, some of which we'll be using on this course.

- The first command you'll get used to using is the ng new command, it allows you to create also called scaffold a new application. It creates all of the files you need for a basic project and then some. We'll cover that file structure in the next video. You use it by typing in ng new and then the name of the project.

- After ng new, you'll probably want to see what your application looks like while in development. For that you can use ng serve to run the application in development mode. This will use webpack, which is a tool that processes the code in your application and run a temporary live server that will auto update as you make changes to your project.

- Once you're done developing your application, you'll probably want to publish it to a server. The `ng build` will command will process your files and get them ready for deploying. This is a slightly different process than using ng serve, because it produces files that you can push or pass onto a server.

- Finally  the Angular CLI provides a set of commands that will automatically generate different pieces of Angular code for you. The `ng g` command can be used with different types to generate the code for things like components, types and other pieces that you can use in your application.


Let's go ahead an install the CLI and then try some of these commands.


## Conclusion
The Angular CLI is going to save you a lot of time when creating projects. It's highly opinionated, so make sure you take some time to learn how it works and how it can help you get up and running quickly. You can get more detailed information about the CLI at the bottom of this Angular Quickstart URL: https://angular.io/guide/quickstart
