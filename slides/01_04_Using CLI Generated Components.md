<!-- .slide: data-state="title" -->
# Learn Angular
Generated Components

> > Author Notes:
Now that you've installed and learned the structure of the Angular CLI project, let's take a look at how Angular uses these generated files and start working with components.

---

## `main.ts` File
- `imports`
- `environment`
- Bootstrap

> > Author Notes:

The `main.ts` file is the main file which loads everything else in your application, so let's start with that one. Most of the time, you won't have to mess with this file.

- The first thing you'll notice in that file is a series of import statements. Angular itself is modular, which means that it's built in small pieces of code. In order to use different features you have to load them separately using this import statement.

Some items are imported from groups of modules called libraries and some are imported directly from the library

```
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
```
The first two import things from angular libraries that are in your node modules folder. The biggest one of which is the core module, which has most of the components you'll need for running applications.

Angular can run on more than just browsers, so this next import is information specific to running Angular in browsers.

```
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
```

The next two imports, as you can see have been separated from the generic library imports because they're local imports. The first imports the default module that the CLI automatically generates for you.

The second import loads up a variable called environment. If you remember from the previous video, we can run Angular in two modes called development or production and this loads a file called environment.ts that is in the environments folder inside our app folder.

One thing to note is that when you import files, using the import statement is that you don't add the extension, which here would be .ts.

The only thing left in this file is to use the environments variable to turn on the proper mode.

```
if (environment.production) {
  enableProdMode();
}
```
and then load up the modules. Here, we're using a special method called bootstrapModule to start the application using the AppModule that was automatically created.

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

---

## Modules

- Sets app logic
- Decorators
- Exports

> > Author Notes:
- In addition to the main file, the app module is where you set up parameters for the entire application and the application logic
- In addition to the usual import statements, you'll also see a pattern for coding called a Decorator. It's an ES6 pattern that takes an object describing the application.

- Here you identify the components you're using in this module as well as if there are any other modules or libraries you're using from somewhere else. You can see that we're using an AppComponent that was automatically generated for us and which we'll get to in a minute, plus you can see that we're using the BrowserModule library we imported in the main.ts file.

- Finally you'll see that there is an export statement that in essence exports the Module we're creating here. This is the same thing that is getting imported in our main file.

---

## Components
- Imports
- Decorators
- Exports
- Other files

> > Author Notes:
Components are the building blocks for modules and your applications.

- Like modules, they're built using imports decorators and exports, but what they have is a bit different.

- You can see here that we are declaring our decorator here, but the object is a bit different.
Inside our decorator we see an item called selector with a value of app-root. This identifies a custom HTML tag where the component will be installed. You can see this custom tag in your index.html file.

The next two parts are the template and the styles. Here we're using external files to load up a CSS and an HTML file, but you can write all of that code in here as well. We'll get to that in just a minute.

I also wanted to mention here, that although it looks like there needs to be a semicolon at the end of the decorator, but please don't add one.

You'll notice that our export statement looks a bit differently. We're creating a variable here. This variable will be accessible in our HTML.

- The CSS file will be empty right now, but you can add CSS there and it will exist anywhere we use this component.

- The HTML is just regular HTML, but you'll notice a couple of things. It's not really code for a whole page, just a piece of a page and you can see that we can use the title variable using something called an expression. Using the `{{}}` we can use any variable exposed by our export statement.

Finally, you'll notice that Angular has written a test for us. You can ignore or delete this file.

If you haven't done so already, let's change the value of the `title` variable and see what happens.

## Conclusion
There's quite a bit of stuff happening here, but once you understand how the CLI creates items, then you'll be on your way to creating applications you can do real work with.
