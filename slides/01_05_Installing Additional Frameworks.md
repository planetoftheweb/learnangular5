<!-- .slide: data-state="title" -->
# Learn Angular
Adding Frameworks

> > Author Notes:
Adding frameworks to angular is pretty easy, you just have to know where to do it. Let's take a look at what it would take to add jQuery and Bootstrap to an angular project.

---

## Installing Frameworks
- Use `npm`
- Update `.angular-cli.json`
- `styles` && `scripts`

> > Author Notes:
`npm install jquery --save-dev`
`npm install bootstrap@4.0.0-beta.2 --save-dev`


Updates to .angular-cli.json

```
"styles": [
  "../node_modules/bootstrap/dist/css/bootstrap.css",
  "styles.css"
],
"scripts": [
  "../node_modules/jquery/dist/jquery.js",
  "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
],
```

Replace in index.html and note that we don't have to add script or style tags.

```
<title>Learnangular5</title>
<base href="/">

<div class="container">
  <app-root></app-root>
</div>
```

Mention that this needs to be removed. Run

ng serve
ng build

## Conclusion
There's quite a bit of stuff happening here, but once you understand how the CLI creates items, then you'll be on your way to creating applications you can do real work with.
