# Gatsby Strapi Typescript Starter

## Features :clipboard:

- pre-configured :wrench:
- ultra fast :dash:
- designed to scale :chart_with_upwards_trend:

## Technologies :computer:

- Gatsby v2
- Strapi CMS connected and set up for static pages and a blog
- Typescript
- Styled components
- Typefaces (NPM webfonts; increases performance and beneficial for GDPR)
- Designing system inspired by ATOMIC design
- React-spring for animations (hooks :fire:)
- Custom extensible iconfont using icomoon

## Launch :rocket:

1. Make sure to have Gatsby `npm i gatsby-cli -g` and Strapi `npm i strapi@alpha -g` CLI installed globally
2. Clone repo using `git clone` or download ZIP
3. Open project folder in a command line tool of your choice (e.g. MacOS terminal or Hyper), type `cd cms` run `npm i` and start cms `strapi start`
4. In a second tab `cd frontend` then run `npm i`. Finally start the development server `npm run develop`.

## Instructions / tips

### Iconfont

#### It's 2019! Why not inline SVG?!

Simplicity and performance.

Just use the Icon component/atom and take advantage of fonts `<Icon color="your-custom-color-goes-here" name="icon-name" size="pass-a-size" />`. No matter how many icons you are using, thanks to the iconfont it's just **1** request.

Extra tip: No need for .svg, .eot or .ttf. Just import **.woff**. All relevant browsers are supported (even IE).
