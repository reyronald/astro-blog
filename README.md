# Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

## TODO

- add all other blog posts ive written
- figure out hosting, find domain
- mdx, can it have interactive components?
- shiki for syntax highlighting
- can we preload in the background all routes from the homepage?
- speculation rules?
- add github's contribution calendar
- add longer readme/about me
- show more component from employer portal?

- change astro's default 404 page
- can i have the github contribution calendar somewhere?
- HAve claude do an a11y and seo audit
- find better font
- animations
- share button/copy link button
- revise all meta tags
- find a modern css reset
- language picker english/spa/jp
- can it do cookies?
- rss feed https://docs.astro.build/en/tutorial/5-astro-api/4/
- preact comps https://docs.astro.build/en/tutorial/6-islands/1/
- check out 21st dev to get inspiration and see if i can stand out a bit more
- ui idea: smoothly transition the about me sidebar to the edge of the screen when clicking a blogpost
- add a calendar icon next to the date, "3 min read" https://allthingssmitty.com/2026/01/12/stop-turning-everything-into-arrays-and-do-less-work-instead/?ck_subscriber_id=174125299
- try out the background gradient grid here https://libpdf.documenso.com/
  favicon https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
- write blogs in substack and long twitter, dev.to, medium, liknkedin
