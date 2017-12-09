<!-- .slide: data-state="title" -->
# Learn Angular
Understanding the Angular Scaffold

> > Author Notes:
Let's take a look at what we get when we install an Angular CLI project. The CLI installs a lot of files and folders, so you'll want to know how it's structured. At the end of the last video, we deleted the folder you created, so we're going to be using the files from my Github repo for this video to make sure we're all working with exactly the same folder. Before you watch the rest of the course, make sure that you've watched the video on `Using the exercises`

---

## Root Folder
- `src` folder
- `dist` folder
- Configuration files

> > Author Notes:

The root is the main folder that is generated when you use the `ng new` command and it should have a couple of folders as well as several files. Now this may look a bit different depending on what commands you've run or the version of the CLI you're using.

- The src folder is probably the most important folder in your project. It's where the main files for your project will live and where you'll be doing most of your development.
- If you run then ng build command, you'll have an additional folder called dist. It's where the files that you would upload to your server will live.
- The rest of the files are configuration files for different tools. So you may see here the typical node-modules folder as well as a .gitignore file that you're used to if you've worked with node.js tools before. But you may not recognize some of the other files like the 

---

## src Folder

- Rayveal assumes you want to use markdown to create slides. The `index.html` file points to a markdown file in `slides/demo.md`.

- It does whatever [reveal.js can](https://github.com/hakimel/reveal.js) can. You can add invisible notes for yourself using two &gt; &gt; after a carriage return (<a href="slides/demo.md">see markdown file</a>)

> > Author Notes: Author notes are similar to markdown blockquotes, but you use double greater than signs. They won't appear on your slides, so I personally use them as reading notes, but Reveal.js has a presentation mode that allows you to see them in your slides.

---

## Persistent Navigation

<small>**Notice:** the persistent navigation bar at the bottom is on every page. It will disappear after 5 seconds. You can also toggle it by hitting the `ctrl-t` key. To modify, look for the following code (delete it if you don't need it)</small>

```
<footer class="footer">
  <div class="persistent">
    <strong>Slides:</strong> <a href="http://bit.ly/thenext50">bit.ly/thenext50</a> &bull; <strong>Contact:</strong>
    <a href="https://www.linkedin.com/in/planetoftheweb">LinkedIn</a> | <a href="https://www.linkedin.com/learning/instructors/ray-villalobos">courses</a> | <a href="http://twitter.com/planetoftheweb">@planetoftheweb</a> | <a href="http://github.com/planetoftheweb">github</a>
  </div>
  <div class="smaller">Use arrows to navigate, esc for overview</div>
</footer>
```


> > Author Notes: Author notes are similar to markdown blockquotes, but you use double greater than signs. They won't appear on your slides, so I personally use them as reading notes, but Reveal.js has a presentation mode that allows you to see them in your slides.

---

## Multiple slides

You can use multiple markdown files within the same slide, just add a different slide in the slides folder and [link to it](?d=Bootstrap 4 Cards&). (see [markdown](slides/demo.md) file for how it works)
---

## Sidebar Menu

Press the `ctrl-m` key to show [sidebar menu](https://github.com/denehyg/reveal.js-menu). You can use it to jump to different slides. There is also an [index.txt](slides/index.txt) file in the slides menu, where you can add other slides you want to feature in your menu.

---

## Standalone Folder
Presentations live in a docs folder within the main project, simply upload the docs folder to a server and change the name if you want. It's self contained. It's also easy to add as documentation using Github Pages.

---

## Fragments

1. Are on by default
2. You can write HTML lists
  - if you don't want them

---

  ## Code options

- [Bootstrap](http://getbootstrap.com)-like colors for code
- <code class="code-primary">primary</code> <code class="code-success">success</code> <code class="code-info">info</code> <code class="code-warning">warning</code> <code class="code-danger">danger</code>
- <a class="tooltip" href="#">`tooltips`<span>for overlay explanations</span></a> on rollover

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-html5"></i> Has Icon

- Template with an icon
- Preloading [font-awesome](http://fontawesome.io) <small>by Dave Gandy</small>
- &lt;!-- .slide: data-state="hasicon" --&gt;

---

# Background Video

<!-- .slide: data-state="textonvideo" data-background-video="http://planetoftheweb.com/i/video.mp4" -->

<small>&lt;!-- .slide: data-state="textonvideo" data-background-video="http://planetoftheweb.com/i/video.mp4" --&gt;</small>

> > Note: You also have the option of creating video as a background using regular reveal.js tags.

---

<!-- .slide: data-state="textonimage" data-background-image="http://planetoftheweb.com/i/photo.jpg" -->

## Background with an image
And some text, small shadow...

<small>&lt;!-- .slide: data-state="textonimage" data-background-image="http://planetoftheweb.com/i/photo.jpg" --&gt;</small>

---

## Here's some code

```javascript
var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;

app.on('ready', function() {
  var appWindow;
  appWindow = new BrowserWindow();
  appWindow.loadURL('http://raybo.org');
});
```
<!-- .element: data-trim="true" contenteditable="true" -->

Syntax highlighted, editable by default

---

## Embedded Code
<small>Here's a sample of an embeded CodePen. Use an iframe.</small>

<iframe height='300' scrolling='no' title='Bootstrap 4' src='//codepen.io/planetoftheweb/embed/bgdOzX/?height=300&theme-id=27192&default-tab=html,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 50vh;'>See the Pen <a href='http://codepen.io/planetoftheweb/pen/bgdOzX/'>Bootstrap 4</a> by Ray Villalobos (<a href='http://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

---

## Tables

Here's what a table looks like. Use the <a href="http://www.tablesgenerator.com/markdown_tables">tables generator</a> to help you write the markdown.

| |  Extra small <small>< 768px</small> | Small <small> ≥ 768px</small> | Medium <small>≥992px</small> | Large <small>≥1200px</small> |
|---|---|---|---|---|
| **Container**	| Auto | 750px | 970px | 1170px |
| **Size**	| .col-xs- | .col-sm- | .col-md- | .col-lg- |
| **Column width** | Auto | ~62px | ~81px | ~97px |

---
<!-- .slide: data-state="circles" -->

# Circles

- one
- two
- three
- four
- five
- just list items

&lt;!-- .slide: data-state="circles" --&gt;
