<!-- .slide: data-state="title" -->
# Learn Angular
Data Binding

> > Author Notes:
Angular lets you use the data in your components inside templates. That's known as binding.

---

## Angular Templates
- `{{ VAR }}` expressions
- Directives
- `constructor()` method
- Declaring var types

---
## 


> > Author Notes:
- Your components interact with templates in a variety of ways, one of the most common is through the use of expressions. This involves making objects declared in your components available in your templates using curly braces. The content in the curly braces can be simple in the case of when we just output a variable or more complex.

- Another way of interacting with your templates is through the use of Directives. Directives are a fancy name for commands which are usually used in your HTML template and look like HTML attributes.

- Inside your components, you can set up variables and initialize their values. One of the ways of doing this is through something called a constructor. A constructor is a way of giving values to your variables when the class gets created...or constructed, which is also called instantiating the class.

- Although Angular can run in different ways, most of the examples use a version of the language called TypeScript, which uses a style where you clearly define variable types before they're created. We'll take a look at how that works.


- Lets start by declaring a variable and specifying it's type.

```
export class AppComponent {
  query: string;
```

Now we can declare a constructor, which is used to initialize variables.

```
constructor() {
  this.query = "Barot";
```

Let's go ahead and add this to our template

```
<div class="form-group">
  <div class="form-label"><strong>For:</strong> {{ query }}</div>
```

So, that's pretty good for simple data. Let's take a look at what it takes to do a more complex data object. We can do that using directives...or commands inside our templates.

- []

```
query: string;
artists: object;
```

This data will be an array of objects, so we can use the object type or also use the any type if you're not picky about the type of data this will carry. This also means that inside our constructor we initialize the variable with some data.

Let's modify our template so that we can add some additional content. We'll get this data from a gist at this URL: [Data.json](https://gist.github.com/planetoftheweb/8bc1698e423ef0ff3db734f4115bf214)


```
this.artists = ...;
```

Now it's time to update our template. Let's load up some Bootstrap HTML to make this work.

```
<div class="position-relative container">

...

</div><!-- position -->
```

Copy this from gist: https://gist.github.com/planetoftheweb/e8bfea3c0251bc3a3e2dafbf01abb8e3

We can use the `ng-for` directive in the template to loop through the elements of this object and display them in the template.

```
<div class="position-absolute container" style="z-index:10">
  <div class="row justify-content-center">
    <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5">
      <div class="list-group">
        <a href="#"
          class="list-group-item list-group-item-action flex-column align-items-start"
          *ngFor="let artist of artists">
            <div class="media">
              <div class="media-body align-self-center">
                <h5 class="m-0">{{ artist.name }}</h5>
                {{ artist.reknown }}
              </div>
            </div>
        </a>
      </div><!-- list-group -->
    </div><!-- col -->
  </div><!-- row -->
</div><!-- container -->
```

One last thing, we need to add a style to make this look better so that there isn't a double border on the first list element.

```
,
  styles: [
    `.list-group-item:first-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: 0;
      }`
  ]
```

## Conclusion
Components become more powerful when they allow us to work with data. Directives allow you to manipulate the data in order to display within templates and as you'll learn soon...do a lot more.
