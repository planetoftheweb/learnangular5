<!-- .slide: data-state="title" -->
# Learn Angular
Events

> > Author Notes:
Managing user input is an important part of any application. Angular allows you to bind events to a component using a special notation in your templates. Let's take a look.

---

## Angular Events
- `( EVT )`
- Bind to a method
- `$event` info
- Pass data

---
##


> > Author Notes:

- To use an event in your templates, you simply include the event name inside parenthesis.

- You can then bind this event to a method in your component and inside that method you can do whatever you want.

- You can use a special variable called $event to pass along the event itself as a parameter to the method, although it's not necessarily a good idea to do that since it includes a ton of information.

- You can also pass it along any data from the template in order to do things with that data. This is how you can make your templates talk to your component logic.

## Conclusion
Components become more powerful when they allow us to work with data. Directives allow you to manipulate the data in order to display within templates and as you'll learn soon...do a lot more.
