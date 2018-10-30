# css-utils
A collection of common CSS utilities for rapid prototyping.

When you're trying to move quickly, typing out `class=""` is far too slow. This
library explores the idea of applying common styles via attributes.

## Examples

Confused why a layout is doing what it's doing? Make the bounding boxes visible:

```html
<!-- outline: solid 1px magenta -->
<div outline>
  <div outline>child one</div>
  <div outline>child two</div>
  <div outline>child two</div>
</div>
```

Apply common layout via display properties:


```html
<div block></div>
```

Simplify flexbox layout:

```html
<div flex-row>
  <span shrink>One</span> <!-- flex-shrink: 1; min-width: 0; -->
  <span spacer></span> <!-- flex-grow: 1 -->
  <span shrink>Two</span> <!-- flex-shrink: 1; min-width: 0; -->
</div>
```


Apply padding and margin based on an 8px grid:

```html
<div pad-0></div> <!-- padding: 0; -->
<div pad-0.5></div> <!-- padding: 4px; -->
<div pad-1></div> <!-- padding: 8px; -->
<div pad-2></div> <!-- padding: 16px; -->
<div pad-10></div> <!-- padding: 80px; -->

<div margin-0></div> <!-- margin: 0 -->
<div margin-0.5></div> <!-- margin: 4px -->
<div margin-1></div> <!-- margin: 8px -->
<div margin-2></div> <!-- margin: 16px -->
<div margin-10></div> <!-- margin: 80px -->
```

But it's also possible to only apply horitontal or vertical padding:
```html
<div pad-x-0></div> <!-- padding-left: 0; padding-right: 0; -->
<div pad-y-0.5></div> <!-- padding-top: 4px; padding-bottom: 4px; -->
```

Use the same system for height, width, or both:

```html

<div height-0.5></div> <!-- height: 4px; -->
<div width-10></div> <!-- width: 80px; -->
<div size-18></div> <!-- width: 144px; height: 144px; -->
```

There are several more attributes available:

```text
content-start content-end content-center content-distribute content-space-around
icon-xs icon-s icon-m icon-l icon-xl
text-xxxs text-xxs text-xs text-s text-m text-l text-xl text-xxl text-xxxl
uppercase
stroke stroke-y stroke-x stroke-top stroke-right stroke-bottom stroke-left
no-select scroll-y scroll-x
color-000 color-111 color-222 … color-fff
hover-color-000 hover-color-111 hover-color-222 … hover-color-fff
bg-000 bg-111 bg-222 … bg-fff
hover-bg-000 hover-bg-111 hover-bg-222 … hover-bg-fff
rounded-none rounded-xs rounded-s rounded-m rounded-l rounded-xl rounded-xxl
first-rounded-none first-rounded-xs first-rounded-s first-rounded-m first-rounded-l first-rounded-xl first-rounded-xxl
last-rounded-none last-rounded-xs last-rounded-s last-rounded-m last-rounded-l last-rounded-xl last-rounded-xxl
```


## Local development

To develop, run the following commands:

```sh
yarn # install dependencies
yarn run watch # start dev mode
```

## Publish to npm

First, update the version:

```sh
npm version patch
# or
npm version minor
```

Then log in and publish:

```sh
npm login
npm publish
```

## Production use

Not recommended. There are no tests, and there's no guarantee that these
attribute names don't conflict with other libraries.
