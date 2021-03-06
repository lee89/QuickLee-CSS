# QuickLee CSS
### beta 1

QuickLee CSS is The mobile first, bare bones web development framework written in SASS

## Features

* Mobile first framework
* Responsive grid system
* Responsive collapsable menu
* No unnecessary default styling - *yes, that’s a feature*
* SASS Breakpoints with common breakpoints included
* Hooks to keep functionality and styling seperate
* Small digestible files
* Fully Supports IE9+  (with good support for earlier versions)

## Getting Started

1. Download QuickLee CSS and extract everything from the `QuickLee` folder
2. Setup your SASS compiler to watch `global.scss`
3. Open `_quicklee.scss` and set your variables for your project. Don't worry, there are just 5 variables!
4. Open `_defaults.scss` and style the common elements to suit your needs. **Don't forget to use your colour pallete variables for consistancy**
5. Write the rest of your CSS in `global.scss` or create your own `.scss` documents and import them into `global.scss`

## FAQs
**Where's the documentation?**

I'm working on it. In the meantime, read the comments in each of the `.scss` files, they will explain how to use each component.

**Why is this different to Bootstrap or Foundation, or any other framework?**

I'm calling this the *bare bones* framework because it doesn't come bundled with unnecessary functionality and styling unlike the others. It gives you just what you need to create a cross browser, responsive website while keep FULL aesthetic control.

**Why do you call QuickLee CSS an intermediate level framework?**

QuickLee CSS doesn't spoon feed you when it comes to styling, it just gives you the spoon you need to be able to feed yourself. Some care will be required on your part.

There are some features unique to QuickLee CSS which you will need to learn, but this shouldn't be too difficult to pick up as it piggy backs of the core SASS functionality.

**What are these '*Hooks*' you mentioned?**

From the start I wanted to keep the CSS that makes stuff work seperate from the CSS that changes the way something looks. So QuickLee CSS has little to no styling by default. To change the look and feel of something you use a hook. For example:

    %ql-nav-item {
    	background: black;
    	&:hover { background: grey }
    	&:active { /* You can style any state you like */ }
    }

The hook `%ql-nav-item` targets menu items without interferring with the CSS that makes the menu work.

**What about JavaScript functionality?**

There is 1 very small JavaScript file included which controls the responsive menu collapse. You are of course free to use use this JS file for your own scripts with minimal HTTP requests.

**How do I... ?**

If you have any questions drop me an email at `lee@lees.space` and I'll get back to you as soon as I can.

**Can I contribute?**

Sure. Feel free to fork this repo and change things, add things, remove things and submit a pull request. Just remember the ethos of QuickLee CSS.

If you find an bug or would like to request a feature, you can submit an issue here on GitHub