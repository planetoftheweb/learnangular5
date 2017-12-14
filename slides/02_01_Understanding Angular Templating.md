<!-- .slide: data-state="title" -->
# Learn Angular
Templates

> > Author Notes:
The CLI automatically creates some things for us, but it's important that you understand how you can change things. Let's take a look at how Angular works with templates.

---

## Angular Templates
- `templateUrl`
- `template`
- ES6 template syntax

> > Author Notes:
Pickup Template
https://gist.github.com/planetoftheweb/d49a0491276543aacaca4a8e2be0a7cb

Update background of body
```
<body class="bg-light">
```

Delete app.component.spect.ts
Delete app.component.css
Remove this code
```
styleUrls: ['./app.component.css']
```

## Conclusion
Angular templates are pretty easy to work with, especially if you're familiar with how ES6 templates work.

Because Angular uses Webpack to manage how your code gets generated, it doesn't really matter if you'd rather keep everything within the component code, or on separate files.
