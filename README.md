# 11ty Feedback

This repo hosts an [11ty starter project](https://www.11ty.dev/docs/starter/) for receiving meaningful feedback (e.g. from coworkers, clients, etc).

[![Netlify Status](https://api.netlify.com/api/v1/badges/9ae3dcba-86df-4732-b33d-f58afbd1042c/deploy-status)](https://app.netlify.com/sites/11ty-feedback/deploys)

Before continuing, you can check out a [live demo of the repo here](https://11ty-feedback.netlify.app/).

## Why?

I've documented the motivation for this project in `src/about.md`, but you can also see it below:

<details>
  <summary>Click here if you dare...</summary>

  Corporate style feedback processes can often be cold, invasive, and ultimately unfulfilling. 

  Typically feedback gets collected in the form of a _performance review_, which your manager, along with your manager's manger, and you manager's manager's manager (you get the point) have access to, even though it may be something you consider quite personal. 

  Further, the possibility that those in positions of power may read this feedback can influence both what the feedback-giver writes and how the feedback-receiver copes with the process as a whole. Reviews can cause anxiety, stress, and fear.

  In a sentence: traditional reviews can be awful.

  Giving and receiving feedback should be a sincere moment of mutual exchange, support, and learning! Both sides should feel as comfortable and safe as possible while fulfilling their parts.

  This site in turn hopes to provide a quick-and-easy means of attracting and receiving sincere, helpful feedback. While ideally such a process would take place in person, for a lot of us that isn't an option. Using this site over a video call however could be a decent alternative.

  The feedback process implemented on this site is inspired by an [amazing post by Chelsea Troy titled Attracting Feedback](https://chelseatroy.com/2018/11/26/leveling-up-skill-14-attracting-feedback/), in which she goes into great detail explaining the benefits of using a goal-based feedback process. 

  If you haven't read this post yet, I highly  encourage you to do so before the next time you plan on asking for feedback. Also note, if you're preparing to give feedback, Chelsea has written [other in-depth posts that look at all sides of the feedback process](https://chelseatroy.com/tag/feedback/).
</details>

Read on for more of the nitty-gritty. Otherwise, [try deploying it to your own Netlify instance now](https://app.netlify.com/start/deploy?repository=https://github.com/tmns/11ty-feedback)!

## Under the hood

First, let's give credit where credit is (majorly) due. I used:
- Ideas from [Chelse Troy's post on Attracting Feedback](https://chelseatroy.com/2018/11/26/leveling-up-skill-14-attracting-feedback/).
- Code from [Andy Bell's Eleventy course](https://piccalil.li/course/learn-eleventy-from-scratch).
- Code from [Josh Comeau's post on 3d buttons](https://www.joshwcomeau.com/animation/3d-button/).
- SVGs from [Teeny Icons](https://teenyicons.com/).
- Generated background SVG from [Components AI](https://components.ai/).
- [Netlify](https://netlify.com) for deploying, hosting, and form submission.
- [Eleventy](https://www.11ty.dev/) for everything else.

## Customization

The templating system used is [Nunjucks](http://mozilla.github.io/nunjucks/) and the styles are written in SASS (with a Gulp task set up for compilation).

As such, any customizing beyond the goals themselves will most likely take place in either template (html) or scss files.

### Content

To set your own goals and self-evaluations, edit the `goals` [front matter](https://www.11ty.dev/docs/data-frontmatter/) in `src/index.md`. 

If you don't want to provide self-evaluations, you can leave the `selfEval` fields blank.

Also note that I make some promises to the feedback-giver in the list in `src/index.md`. You should edit those if you don't also want to commit to them.

### Design

I made things simply as how I like them, knowing full well that I have an odd sense of taste and folks would def want to change the colors, sizing, etc.

To facilitate this, I declare up front some css variables in `src/scss/critical.scss` that you can easily change. 

For fonts, you can download whatever font set you want and place them in `src/fonts`, which will automatically get passed through to `dist/fonts` on build. Then, you can edit the `@font-face` rulesets in `src/scss/_fonts.scss`.

Similarly, for images you can replace whatever you want in `src/images/` and they will get passed through to `dist/images`. Note, since I'm just using a few svgs, I didn't set up any image optimmization task.

### Other?

In general, I tried to keep things as simple and lightweight as possible. If you notice any glaring mistakes / issues, please let me know!

## Local dev

First clone the repo:

```
git clone https://github.com/tmns/11ty-feedback.git my-feedback-site
```

Navigate to the directory:

```
cd my-feedback-site
```

Install necessary packages:

```
npm install
```

Start the local dev server:

```
npm start
```

That should result in some console output that looks a bit like this:

```
Using gulpfile gulpfile.js
Starting 'default'...
Starting 'sass'...
Finished 'sass' after 318 ms
Finished 'default' after 325 ms
[...]
[1] [Browsersync] Access URLs:
[1]  ------------------------------------
[1]        Local: http://localhost:8080
[1]  ------------------------------------
[1]           UI: http://localhost:3001
[1]  ------------------------------------
[1] [Browsersync] Serving files from: dist
```

At which point you should be able to access a local version of the project at `localhost:8080`.

You will probably also want to change the values in `src/_data/site.json`.
