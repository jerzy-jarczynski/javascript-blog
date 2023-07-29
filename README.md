
# JavaScript Blog - SPA

`javascript-blog` is a **single page app** (SPA) that allows you to view blog posts added to your website. Each post has an interactive title, author and list of tags that allow you to switch posts and filter the list of posts.
The project was implemented as part of learning JavaScript during the **Kodilla Bootcamp Full Stack Developer** course.
No design guidelines or .psd template were provided with the page.

## Installation

No installation is necessary. Just clone the repository and open index.html in your browser.

```
git clone git@github.com:jerzy-jarczynski/javascript-blog.git
```

### For developers

There is a package.json file in the repository containing task-runner. Dependencies can be installed in the standard way using npm:

```
npm install
```

In development mode, eslint-watch is used, which must be manually installed:

```
`npm install --save-dev eslint-watch`
```

Then you can run task watch on localhost:3000 with automatic refreshing of changes in the browser and conversion of SASS to CSS.

```
npm run watch
```

## Release

To place the project on the server, copy directories and files from the list:
- `index.html`
- `css` directory with content
- `images` directory with content
- `js` directory with content

## Used technologies

`HTML`, `CSS/SASS`, `RWD`,  `JavaScript`, `Handlebars.js`, `Functional programming`

The interactive elements on the page were loaded using Handlebars.js.
The content of the posts is kept statically in the index.html file, which is not a good practice, but databases have not yet been introduced at this stage of the course. Using JS, I also developed an animation of the height of the blocks depending on the size of the content.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Demo

You can see living demo without cloning or downloading the repo:

1. CodePen:

[https://codepen.io/jerzyjarczynski/pen/PodPxam](https://codepen.io/jerzyjarczynski/pen/PodPxam)

2. My personal domain:

[https://blog-spa.jarczynski-dev.pl/](https://blog-spa.jarczynski-dev.pl/)

## Issues

The mechanism of downloading the height of elements for animation is not perfectly refined, which may cause the page to break down. The bug is visible especially when changing the page resolution to check the RWD.
The height of the elements is not synchronized if the side columns are higher than the middle one (shorter blog post). The height in such a situation could be blocked to the height of the side columns.
