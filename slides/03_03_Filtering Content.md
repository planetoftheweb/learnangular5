<!-- .slide: data-state="title" -->
# Learn Angular
Filtering with pipes

> > Author Notes:
In order to help us perform our search, we're going to need to learn about pipes. Angular has some built in pipes, but they're sort of lame, for anything substantial, you're going to need to learn to build your own.

---

## Generating Components
- Dates, text-transform
- Generate with CLI
- `transform(pipeData, pipeModifier)`

> > Author Notes:

- Alright, so maybe calling them lame is a bit extreme, but angular pipes are good for a couple of things, formatting dates and maybe modifying text, but most of that can be accomplished with these days.

- The CLI is going to be the quickest way to create a pipe and it's going to give you a nice template to do your transformation, so the scripts you have to write will be much simpler. Pipes are similar and bit different than components and appear at the same level as your main component.

- Once you set things up with the CLI, you'll have access to the the transform command in your pipe. Transform takes in two values, the original data and the item that potentially modifies that data. Let's take a look.

## Conclusion
Custom pipes allows you to create powerful transformations that can be really useful in building your applications.
