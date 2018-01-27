<!-- .slide: data-state="title" -->
# Learn Angular
Lifecycle Methods

> > Author Notes:
In order to load external data, we need to use something called a Lifecycle Methods. That's a way to perform a task as a specific point in the application.

---

## Two-way Data Binding
- `onInit`
- Additional imports
- Subscribe to observable
- `http.get`

> > Author Notes:

- The Lifecycle method that Angular provides is called onInit, it's a way to take care of things after the component has been built. It's a great place to load external data.

- Doing this will require some additional imports because it uses some functionality that is separate from what we're currently using.

- We're also going to need the ability to work with http verbs like get to receive the information so we'll have to add that to our code.

## Conclusion
Loading external data is pretty common in applications, so understanding Lifecycle methods as well as the http modules will help us create more flexible applications.
