## Explanation of Exercise Files

# Introduction
All of the files for this course are freely available in GitHub for all users at this URL(https://github.com/planetoftheweb/learnangular5). In GitHub, you'll see that the project is organized into branches. Each branch corresponds to a video in the course. They are named according to the video they correspond to. If you see a branch that starts with a name like 01_03, that means that the branch corresponds to the `FIRST CHAPTER` and refers to the `THIRD` video in that chapter. Also, if you see an `E` at the end of the name, that's how the files looked like at the end of the video.

The best way to work with the project is to clone all the branches at once. In order to do that, you'll need Node.js as well as Git installed. You can find Node.js and download the installer at this [URL](https://nodejs.org/en/), and you can find Git and download the installer for your platform at this [URL](https://git-scm.com/). When you install Git, make sure you add the Git Bash terminal in Windows. It makes running the commands more consistent.

So, let me show you how to clone all the branches for this project. First, I'm going to go to the GitHub repo, and I'm going to click on this button to copy the link to the repo.

Once I do that, I'm going to switch over to a Terminal

`> cd ~/Desktop`

On a PC, I'll be running something like Git Bash or something that is compatible with Unix terminal commands. Once I do that, I can create a directory

`> mkdir learnangular5`
`> cd learnangular5`
`> git clone --bare URLTOREPO.git .git`.
`> git config --bool core.bare false`
`> git reset --hard command`

It's going to reset the head pointer, and this is going to give us all of the different branches. Let's go ahead and clear this out, and issue a `git branch` command. You can see that I have not just the master branch, but every other branch in the project.

The next thing we need to do is install the project dependencies we'll need for this project to run properly. In order to do that, I need to issue a

`> npm install`

Once the installation is done, I'm ready to switch to any of the branches.

You should start the videos with the project opened in your favorite text editor. I'll be using Visual Studio Code in this course.

This is now showing you the code from the end of the course.

If you want to watch a video at the beginning of `Chapter 1`, and it's the `03` movie, and I want to get the files at the end of that video, then I'm going to issue a `git stash && git checkout 04_04e`.

If you've made some modifications to files when you do a git checkout command, you can issue a git stash command before, so that it clears out any of the changes you have made. Now let's go ahead and checkout the master branch again.

Unless I say so in the video, I'll start each video in the course with the `ng build` command already running in the background, and the code running inside our editor as well as a copy of page opened up in a browser window.

Now that we're ready to get going, let's get started building our application.
