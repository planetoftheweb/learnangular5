<!-- .slide: data-state="title" -->
# Learn Angular
CLI Projects

> > Author Notes:
Let's look at an overview of what we get when we install an Angular CLI project. The CLI installs a lot of files and folders and it can be overwhelming. At the end of the last video, I encouraged you to play around with the different, so we're going to be using the clean files from my Github repo for this video...to make sure we're all working with exactly the same files as a clean installation. Before you watch the rest of the course, make sure that you've watched the video on `Using the exercises`

---

## Root Folder
- `src` folder
- `dist` folder
- Configuration files

> > Author Notes:

The root is the main folder that is generated when you use the `ng new` command and it should have a couple of folders as well as several files. Now this may look a bit different depending on what commands you've run or the version of the CLI you're using.

- The src folder is probably the most important folder in your project. It's where the main files for your project will live and where you'll be doing most of your development.

- If you run then `ng build` command, you'll have an additional folder called `dist`. It's where the files that you would upload to your server will live.

- The rest of the files are configuration files for different tools. So you may see here the typical `node-modules` folder as well as a `.gitignore`, `README.md` and `package.json` files files that you're used to if you've worked with node.js tools before.

However, there are also a number of other files you might have not seen.

The most important file here is the `angular-cli.json` file. This file determines how the project is set up by the CLI. It's also where you can re-configure your project if you want the commands to behave differently.

The CLI installs a number of test frameworks and you can see some of their files here. So, for example, the `karma.conf.js`, the `e2e` folder and the `protractor.conf.js` are files for those testing frameworks and you can customize them here if you want to.

There is a file called `.editorconfig` here. That file is a way to help different people work with consistent editor settings. So, for example if you want your whole team to work with 2 spaces instead of tabs, you can make that happen here. You have to install a plugin or have an editor that uses these things by default, so messing around with it is definitely optional.

There are a couple of configuration files related to how Angular works with TypeScript. Although technically angular uses regular JavaScript, most of the examples and people who use angular work with this special version of the language that adds a few features. The `tsconfig.json` and `tslint.json` files let you configure how typescript is going to work and control settings for error checking in your editor.

---

## src Folder

- `app` folder
- Support files
- Application files

> > Author Notes:
The src folder has a number of files and is where you'll be doing most of your work.

- Inside this folder there is an `app` folder. This is the main place where you'll be working with your app. This is where components go, which is the main way you create features within an Angular project.

- Also inside the `src folder` are a number of support files for your application. By that I mean files that will support the creation of your application. So you can see that there is an `index.html` file. That's your main page, as well as a `style.css` file, obviously the global stylesheet for your app.

There's also a `favicon.ico` file which is an icon that appears in the search bar in most browsers and then an `assets folder` where you can place graphics and such. This one has a little invisible file called `.gitkeep` because normally github will not keep folders with empty files. You can delete this folder if you don't want it.

- There is also an environments folder here with a couple of files. The CLI uses these files when you execute an `ng start` or `ng build` command to switch the programming environment from development to production. Not something you need to mess with.

- A few other setup files in this folder are the test.ts, where you write any tests for your application you want. There's also a couple of TypeScript config files `tsconfig.app` and `tsconfig.spec`. You shouldn't have to mess with those.

- The `pollyfills.ts` file is important because it helps the code you write be more compatible with older browsers. However, you shouldn't have to mess with it.

- A really important file here is the `main.ts` file. This is the first file that your application will load, so it boots up the application and loads up all of the different modules. We'll be going over how Angular applications work in the next video.

## Conclusion
The Angular CLI makes setting up projects easy...but it creates a lot of files and folders, which can be overwhelming. Still, I hate working with a file structure I don't like or don't know how to customize and configure. If you want to learn more about the Angular CLI, check out the Angular CLI Wiki page: https://github.com/angular/angular-cli/wiki
