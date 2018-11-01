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

Apply common layouts via `display` and `position` properties:

```html
<div block></div>
<div inline-block></div>
<div grid></div>
<div absolute></div>
<div fixed></div>
```

Simplify flexbox layout:

```html
<div flex-row>
  <span shrink>One</span> <!-- flex-shrink: 1; min-width: 0; -->
  <span spacer></span> <!-- flex-grow: 1 -->
  <span shrink>Two</span> <!-- flex-shrink: 1; min-width: 0; -->
</div>
```

There are helpers for aligning flex content:

```html
<div flex-row content-start></div>
<div flex-row content-end></div>
<div flex-row content-center></div>
<div flex-row content-distribute></div>
<div flex-row content-space-around></div>
```

Including a centering helper:

```html
 <!-- Set an explicit height if it needs to be larger than its content -->
<div center-xy>
  <div>I'm centered!</div>
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

Use the same system for height, width, or both via size:

```html
<div height-0.5></div> <!-- height: 4px; -->
<div width-10></div> <!-- width: 80px; -->
<div size-18></div> <!-- width: 144px; height: 144px; -->
```

It's also possible to specify that elements should fill their available width,
height, or both:

```html
<div height-full></div> <!-- height: 100%; -->
<div width-full></div> <!-- width: 100%; -->
<div size-full></div> <!-- width: 100%; height: 100%; -->
```

Apply opacities:

```html
<div opacity-none></div> <!-- opacity: 0 -->
<div opacity-0></div> <!-- opacity: 0 -->
<div opacity-10></div> <!-- opacity: 0.10 -->
<div opacity-20></div> <!-- opacity: 0.20 -->
<div opacity-25></div> <!-- opacity: 0.25 -->
<div opacity-30></div> <!-- opacity: 0.30 -->
<div opacity-40></div> <!-- opacity: 0.40 -->
<div opacity-50></div> <!-- opacity: 0.50 -->
<div opacity-60></div> <!-- opacity: 0.60 -->
<div opacity-70></div> <!-- opacity: 0.70 -->
<div opacity-75></div> <!-- opacity: 0.75 -->
<div opacity-80></div> <!-- opacity: 0.80 -->
<div opacity-90></div> <!-- opacity: 0.90 -->
<div opacity-100></div> <!-- opacity: 1 -->
<div opacity-full></div> <!-- opacity: 1 -->
```

Resize icon fonts:

```html
<i icon-xs class="material-icons icon">add</i> <!-- 16px -->
<i icon-s class="material-icons icon">close</i> <!-- 20px -->
<i icon-m class="material-icons icon">brush</i> <!-- 24px -->
<i icon-l class="material-icons icon">notes</i> <!-- 28px -->
<i icon-xl class="material-icons icon">layers</i> <!-- 32px -->
```

Resize text:

```html
<p text-xxxs></p> <!-- font-size: 11px -->
<p text-xxs></p> <!-- font-size: 12px -->
<p text-xs></p> <!-- font-size: 13px -->
<p text-s></p> <!-- font-size: 14px -->
<p text-m></p> <!-- font-size: 16px -->
<p text-l></p> <!-- font-size: 20px -->
<p text-xl></p> <!-- font-size: 24px -->
<p text-xxl></p> <!-- font-size: 32px -->
<p text-xxxl></p> <!-- font-size: 48px -->
```

Apply text transforms:

```html
<span capitalize></span>
<span uppercase></span>
<span lowercase></span>
```

Apply vertical alignment to inline elements:

```html
<span align-baseline></span>
<span align-sub></span>
<span align-super></span>
<span align-text-top></span>
<span align-text-bottom></span>
<span align-middle></span>
<span align-top></span>
<span align-bottom></span>
```

Apply borders:

```html
<div stroke></div>
<div stroke-y></div> <!-- top and bottom -->
<div stroke-x></div> <!-- left and right -->
<div stroke-top></div>
<div stroke-right></div>
<div stroke-bottom></div>
<div stroke-left></div>
```

Apply greyscale text colors and modify them on hover:

```html
<div color-000></div>
<div color-111></div>
<div color-222></div>
<div color-333></div>
<div color-444></div>
<div color-555></div>
<div color-666></div>
<div color-777></div>
<div color-888></div>
<div color-999></div>
<div color-aaa></div>
<div color-bbb></div>
<div color-ccc></div>
<div color-ddd></div>
<div color-eee></div>
<div color-fff></div>

<div hover-color-000></div>
<div hover-color-111></div>
<div hover-color-222></div>
<div hover-color-333></div>
<div hover-color-444></div>
<div hover-color-555></div>
<div hover-color-666></div>
<div hover-color-777></div>
<div hover-color-888></div>
<div hover-color-999></div>
<div hover-color-aaa></div>
<div hover-color-bbb></div>
<div hover-color-ccc></div>
<div hover-color-ddd></div>
<div hover-color-eee></div>
<div hover-color-fff></div>
```

Do the same for background colors:

```html
<div bg-000></div>
<div bg-111></div>
<div bg-222></div>
<div bg-333></div>
<div bg-444></div>
<div bg-555></div>
<div bg-666></div>
<div bg-777></div>
<div bg-888></div>
<div bg-999></div>
<div bg-aaa></div>
<div bg-bbb></div>
<div bg-ccc></div>
<div bg-ddd></div>
<div bg-eee></div>
<div bg-fff></div>

<div hover-bg-000></div>
<div hover-bg-111></div>
<div hover-bg-222></div>
<div hover-bg-333></div>
<div hover-bg-444></div>
<div hover-bg-555></div>
<div hover-bg-666></div>
<div hover-bg-777></div>
<div hover-bg-888></div>
<div hover-bg-999></div>
<div hover-bg-aaa></div>
<div hover-bg-bbb></div>
<div hover-bg-ccc></div>
<div hover-bg-ddd></div>
<div hover-bg-eee></div>
<div hover-bg-fff></div>
```

Apply rounded corners:

```html
<div rounded-none></div> <!-- 0 -->
<div rounded-xs></div> <!-- 1px -->
<div rounded-s></div> <!-- 2px -->
<div rounded-m></div> <!-- 4px -->
<div rounded-l></div> <!-- 8px -->
<div rounded-xl></div> <!-- 16px -->
<div rounded-xxl></div> <!-- 32px -->
```

It's also possible to selectively apply corner rounding:

```html
<div rounded-top-none></div> <!-- 0 -->
<div rounded-top-xs></div> <!-- 1px -->
<div rounded-top-s></div> <!-- 2px -->
<div rounded-top-m></div> <!-- 4px -->
<div rounded-top-l></div> <!-- 8px -->
<div rounded-top-xl></div> <!-- 16px -->
<div rounded-top-xxl></div> <!-- 32px -->

<div rounded-left-none></div> <!-- 0 -->
<div rounded-left-xs></div> <!-- 1px -->
<div rounded-left-s></div> <!-- 2px -->
<div rounded-left-m></div> <!-- 4px -->
<div rounded-left-l></div> <!-- 8px -->
<div rounded-left-xl></div> <!-- 16px -->
<div rounded-left-xxl></div> <!-- 32px -->

<div rounded-right-none></div> <!-- 0 -->
<div rounded-right-xs></div> <!-- 1px -->
<div rounded-right-s></div> <!-- 2px -->
<div rounded-right-m></div> <!-- 4px -->
<div rounded-right-l></div> <!-- 8px -->
<div rounded-right-xl></div> <!-- 16px -->
<div rounded-right-xxl></div> <!-- 32px -->

<div rounded-bottom-none></div> <!-- 0 -->
<div rounded-bottom-xs></div> <!-- 1px -->
<div rounded-bottom-s></div> <!-- 2px -->
<div rounded-bottom-m></div> <!-- 4px -->
<div rounded-bottom-l></div> <!-- 8px -->
<div rounded-bottom-xl></div> <!-- 16px -->
<div rounded-bottom-xxl></div> <!-- 32px -->
```

There's even a shortcut for applying rounding when the element is the first or
last child with the following attributes. This is helpful for creating pill
button-like styling when it's inconvenient to selectively apply attributes to
the first and last children.

```html
<!-- horizontal pill -->
<button rounded-x-first-last-m>First</button> <!-- rounded-left-m -->
<button rounded-x-first-last-m>Middle</button> <!-- no rounding applied -->
<button rounded-x-first-last-m>Last</button> <!-- rounded-right-m -->

<!-- vertical pill -->
<button rounded-y-first-last-m>First</button> <!-- rounded-top-m -->
<button rounded-y-first-last-m>Middle</button> <!-- no rounding applied -->
<button rounded-y-first-last-m>Last</button> <!-- rounded-bottom-m -->
```

There are some attributes to apply styling that affects interaction:

```html
<div no-select>This text not selectable</div>
<div scroll-x>scrollable in the x direction</div>
<div scroll-y>scrollable in the y direction</div>
```

Apply cursor values:

```html
<div cursor-auto></div>
<div cursor-default></div>
<div cursor-none></div>
<div cursor-context-menu></div>
<div cursor-help></div>
<div cursor-pointer></div>
<div cursor-progress></div>
<div cursor-wait></div>
<div cursor-cell></div>
<div cursor-crosshair></div>
<div cursor-text></div>
<div cursor-vertical-text></div>
<div cursor-alias></div>
<div cursor-copy></div>
<div cursor-move></div>
<div cursor-no-drop></div>
<div cursor-not-allowed></div>
<div cursor-e-resize></div>
<div cursor-n-resize></div>
<div cursor-ne-resize></div>
<div cursor-nw-resize></div>
<div cursor-s-resize></div>
<div cursor-se-resize></div>
<div cursor-sw-resize></div>
<div cursor-w-resize></div>
<div cursor-ew-resize></div>
<div cursor-ns-resize></div>
<div cursor-nesw-resize></div>
<div cursor-nwse-resize></div>
<div cursor-col-resize></div>
<div cursor-row-resize></div>
<div cursor-all-scroll></div>
<div cursor-zoom-in></div>
<div cursor-zoom-out></div>
<div cursor-grab></div>
<div cursor-grabbing></div>
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
# or
npm version major
```

Then log in and publish:

```sh
npm login
npm publish
```

## Production use

Not recommended. There are no tests, and there's no guarantee that these
attribute names don't conflict with other libraries.
