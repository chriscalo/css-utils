# css-utils
A collection of common CSS utilities for rapid prototyping.

When you're trying to move quickly, typing out `class=""` is far too slow. This
library explores the idea of applying common styles via attributes.

## Get started

The easiest way to get started is by linking to the latest from any web page via
unpkg.com:

```html
<!-- will redirect to the latest version -->
<link
  href="https://unpkg.com/@chriscalo/css-utils/dist/css-utils.css"
  rel="stylesheet"
/>
```

Linking to the latest version may break things when the library changes, so to
link to a specific version:
1. Go to [unpkg.com/@chriscalo/css-utils/dist/css-utils.css][unpkg link]
2. You'll be redirected to a URL with the latest version embedded in it
3. Copy that URL and use it in your `<link>` tag

[unpkg link]: https://unpkg.com/@chriscalo/css-utils/dist/css-utils.css

For example:

```html
<!-- notice the version is specified -->
<link
  href="https://unpkg.com/@chriscalo/css-utils@0.14.0/dist/css-utils.css"
  rel="stylesheet"
/>
```

But you can also install these styles into your project via `npm` / `yarn`:

```sh
npm install @chriscalo/css-utils
# or
yarn add @chriscalo/css-utils
```

If your build tool knows to check the `node_modules` folder, you can then
reference the stylesheet from your HTML:

```html
<link
  rel="stylesheet"
  href="@chriscalo/css-utils/dist/css-utils.css"
/>
```

Otherwise, you'll need to tweak the `href` path.


## Usage

Confused why a layout is doing what it's doing? Make the bounding boxes visible:

```html
<!-- outline: solid 1px magenta -->
<div outline>
  <div outline>child</div>
  <div outline>child</div>
  <div outline>child</div>
</div>
```

Apply common layouts via `display` and `position` properties:

```html
<div hidden></div>
<div block></div>
<div inline-block></div>
<div grid></div>
<div absolute></div> <!-- or `positioned` -->
<div relative></div>
<div fixed></div>
```

Nudge in-flow elements:

```html
<span nudge-down-1></span>   <!-- down 1px -->
<span nudge-up-2></span>     <!-- up 2px -->
<span nudge-right-3></span>  <!-- right 3px -->
<span nudge-left-4></span>   <!-- left 4px -->
```

The full list of nudge values are:

```text
nudge-down-1  nudge-up-1  nudge-left-1  nudge-right-1
nudge-down-2  nudge-up-2  nudge-left-2  nudge-right-2
nudge-down-3  nudge-up-3  nudge-left-3  nudge-right-3
nudge-down-4  nudge-up-4  nudge-left-4  nudge-right-4
nudge-down-6  nudge-up-6  nudge-left-6  nudge-right-6
nudge-down-8  nudge-up-8  nudge-left-8  nudge-right-8
```

Simplify flexbox layout:

```html
<!-- flex-row or stack-x or stack-h -->
<div flex-row>
  <span grow shrink>Item</span>
  <span spacer></span> <!-- [spacer], [grow] { flex-grow: 1 } -->
  <span no-shrink>Item</span>
</div>
<!-- flex-col or stack-y or stack-v -->
<div flex-col>
  <span shrink no-grow>Item</span>
  <span spacer></span> <!-- [spacer], [grow] { flex-grow: 1 } -->
  <span grow shrink>Item</span>
</div>
```

Note that synonyms for `flex-row` are `stack-h` and `stack-x`. Similarly,
synonyms for `flex-col` are `stack-v` and `stack-y`.


There are helpers for grid layout:

```html
<div grid gap-1>
  <span>One</span>
   <!-- 8px gap here -->
  <span>Two</span>
</div>

<div grid>
  <!-- will fill the entire grid -->
  <span fill-grid>Fill grid</span>
</div>
```

All of the possible values for grid gaps are:

```text
gap-0    gap-x-0    gap-y-0
gap-0.5  gap-x-0.5  gap-y-0.5
gap-1    gap-x-1    gap-y-1
gap-1.5  gap-x-1.5  gap-y-1.5
gap-2    gap-x-2    gap-y-2
gap-2.5  gap-x-2.5  gap-y-2.5
gap-3    gap-x-3    gap-y-3
gap-3.5  gap-x-3.5  gap-y-3.5
gap-4    gap-x-4    gap-y-4
gap-4.5  gap-x-4.5  gap-y-4.5
gap-5    gap-x-5    gap-y-5
gap-6    gap-x-6    gap-y-6
gap-7    gap-x-7    gap-y-7
gap-8    gap-x-8    gap-y-8
gap-9    gap-x-9    gap-y-9
gap-10   gap-x-10   gap-y-10
gap-11   gap-x-11   gap-y-11
gap-12   gap-x-12   gap-y-12
gap-13   gap-x-13   gap-y-13
gap-14   gap-x-14   gap-y-14
gap-16   gap-x-16   gap-y-16
gap-18   gap-x-18   gap-y-18
gap-20   gap-x-20   gap-y-20
gap-24   gap-x-24   gap-y-24
gap-28   gap-x-28   gap-y-28
gap-32   gap-x-32   gap-y-32
```

The `gap-*` attributes work on `flex-*` and `stack-*` elements, but only in the
main axis direction. Note that `gap-x-*` and `gap-y-*` attributes have no effect
on `flex-*` and `stack-*` elements.

```html
<div flex-row gap-1>
  <span>Item</span>
  <!-- 8px gap -->
  <span>Item</span>
  <!-- 8px gap -->
  <span>Item</span>
</div>

<div stack-y gap-1>
  <span>Item</span>
  <!-- 8px gap -->
  <span>Item</span>
  <!-- 8px gap -->
  <span>Item</span>
</div>
```

There are helpers for edge-pinning absolutely-positioned layers:

```html
<div absolute pin-all>
  <!-- will fill nearest containing block -->
</div>

<div fixed pin-all>
  <!-- will fill the viewport -->
</div>

<div absolute pin-all unpin-left width-32>
  <!-- will create a left-docked panel -->
</div>
```

Here are of the available pinning values:

```text
pin-all
pin-top
pin-right
pin-bottom
pin-left
pin-x
pin-y

unpin-all
unpin-top
unpin-right
unpin-bottom
unpin-left
unpin-x
unpin-y
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
<div pad-0></div>   <!-- padding: 0; -->
<div pad-0.5></div> <!-- padding: 4px; -->
<div pad-1></div>   <!-- padding: 8px; -->
<div pad-2></div>   <!-- padding: 16px; -->
<div pad-10></div>  <!-- padding: 80px; -->

<div margin-0></div>   <!-- margin: 0 -->
<div margin-0.5></div> <!-- margin: 4px -->
<div margin-1></div>   <!-- margin: 8px -->
<div margin-2></div>   <!-- margin: 16px -->
<div margin-10></div>  <!-- margin: 80px -->
```

But it's also possible to apply padding and margin only to specific sides:

```html
<div pad-x-0></div>      <!-- padding-left: 0; padding-right: 0; -->
<div pad-y-0.5></div>    <!-- padding-top: 4px; padding-bottom: 4px; -->
<div pad-top-1></div>    <!-- padding-top: 8px; -->
<div pad-t-1></div>      <!-- padding-top: 8px; -->
<div pad-right-2></div>  <!-- padding-right: 16px; -->
<div pad-r-2></div>      <!-- padding-right: 16px; -->
<div pad-bottom-4></div> <!-- padding-bottom: 32px; -->
<div pad-b-4></div>      <!-- padding-bottom: 32px; -->
<div pad-left-8></div>   <!-- padding-left: 64px; -->
<div pad-l-8></div>      <!-- padding-left: 64px; -->

<div margin-x-0></div>      <!-- margin-left: 0; margin-right: 0; -->
<div margin-y-0.5></div>    <!-- margin-top: 4px; margin-bottom: 4px; -->
<div margin-top-1></div>    <!-- margin-top: 8px; -->
<div margin-t-1></div>      <!-- margin-top: 8px; -->
<div margin-right-2></div>  <!-- margin-right: 16px; -->
<div margin-r-2></div>      <!-- margin-right: 16px; -->
<div margin-bottom-4></div> <!-- margin-bottom: 32px; -->
<div margin-b-4></div>      <!-- margin-bottom: 32px; -->
<div margin-left-8></div>   <!-- margin-left: 64px; -->
<div margin-l-8></div>      <!-- margin-left: 64px; -->
```

Use the same system for `height`, `width`, or both via `size`:

```html
<div height-0.5></div> <!-- height: 4px; -->
<div width-10></div>   <!-- width: 80px; -->
<div size-18></div>    <!-- width: 144px; height: 144px; -->
```

It's also possible to specify that elements should fill their available width,
height, or both:

```html
<div height-full></div> <!-- height: 100%; -->
<div width-full></div>  <!-- width: 100%; -->
<div size-full></div>   <!-- width: 100%; height: 100%; -->
```

The full scale of spacing and sizing values are:

```text
 0    =>  0
 0.5  =>  4px
 1    =>  8px
 1.5  =>  12px
 2    =>  16px
 2.5  =>  20px
 3    =>  24px
 3.5  =>  28px
 4    =>  32px
 4.5  =>  36px
 5    =>  40px
 6    =>  48px
 7    =>  56px
 8    =>  64px
 9    =>  72px
10    =>  80px
11    =>  88px
12    =>  96px
13    =>  104px
14    =>  112px
16    =>  128px
18    =>  144px
20    =>  160px
24    =>  192px
28    =>  224px
32    =>  256px
```

Apply opacities:

```html
<div opacity-none></div> <!-- opacity: 0 -->
<div opacity-0></div>    <!-- opacity: 0 -->
<div opacity-10></div>   <!-- opacity: 0.10 -->
<div opacity-20></div>   <!-- opacity: 0.20 -->
<div opacity-25></div>   <!-- opacity: 0.25 -->
<div opacity-30></div>   <!-- opacity: 0.30 -->
<div opacity-40></div>   <!-- opacity: 0.40 -->
<div opacity-50></div>   <!-- opacity: 0.50 -->
<div opacity-60></div>   <!-- opacity: 0.60 -->
<div opacity-70></div>   <!-- opacity: 0.70 -->
<div opacity-75></div>   <!-- opacity: 0.75 -->
<div opacity-80></div>   <!-- opacity: 0.80 -->
<div opacity-90></div>   <!-- opacity: 0.90 -->
<div opacity-100></div>  <!-- opacity: 1 -->
<div opacity-full></div> <!-- opacity: 1 -->
```

Resize icon fonts:

```html
<i icon-xs class="material-icons icon">add</i>    <!-- 16px -->
<i icon-s class="material-icons icon">close</i>   <!-- 20px -->
<i icon-m class="material-icons icon">brush</i>   <!-- 24px -->
<i icon-l class="material-icons icon">notes</i>   <!-- 28px -->
<i icon-xl class="material-icons icon">layers</i> <!-- 32px -->
```

Resize text:

```html
<p text-xxxs></p> <!-- font-size: 11px -->
<p text-xxs></p>  <!-- font-size: 12px -->
<p text-xs></p>   <!-- font-size: 13px -->
<p text-s></p>    <!-- font-size: 14px -->
<p text-m></p>    <!-- font-size: 16px -->
<p text-l></p>    <!-- font-size: 20px -->
<p text-xl></p>   <!-- font-size: 24px -->
<p text-xxl></p>  <!-- font-size: 32px -->
<p text-xxxl></p> <!-- font-size: 48px -->
```

Set text weights:

```html
<p text-weight-hairline></p>  <!-- font-weight: 100; -->
<p text-weight-thin></p>      <!-- font-weight: 200; -->
<p text-weight-light></p>     <!-- font-weight: 300; -->
<p text-weight-normal></p>    <!-- font-weight: 400; -->
<p text-weight-medium></p>    <!-- font-weight: 500; -->
<p text-weight-semibold></p>  <!-- font-weight: 600; -->
<p text-weight-bold></p>      <!-- font-weight: 700; -->
<p text-weight-extrabold></p> <!-- font-weight: 800; -->
<p text-weight-black></p>     <!-- font-weight: 900; -->
```

Apply text transforms:

```html
<span capitalize></span>
<span uppercase></span>
<span lowercase></span>
```

Prevent long words from overflowing their containers:

```html
<span break-word></span>
```

Apply horizontal and vertical alignment to text:

```html
<span align-left></span>         <!-- or text-align-left -->
<span align-center></span>       <!-- or text-align-center -->
<span align-right></span>        <!-- or text-align-right -->
<span align-justify></span>      <!-- or text-align-justify -->

<span align-baseline></span>     <!-- or text-align-baseline -->
<span align-sub></span>          <!-- or text-align-sub -->
<span align-super></span>        <!-- or text-align-super -->
<span align-text-top></span>     <!-- or text-align-text-top -->
<span align-text-bottom></span>  <!-- or text-align-text-bottom -->
<span align-middle></span>       <!-- or text-align-middle -->
<span align-top></span>          <!-- or text-align-top -->
<span align-bottom></span>       <!-- or text-align-bottom -->
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
<div rounded-xs></div>   <!-- 1px -->
<div rounded-s></div>    <!-- 2px -->
<div rounded-m></div>    <!-- 4px -->
<div rounded-l></div>    <!-- 8px -->
<div rounded-xl></div>   <!-- 16px -->
<div rounded-xxl></div>  <!-- 32px -->
```

It's also possible to selectively apply corner rounding:

```html
<div rounded-top-none></div> <!-- 0 -->
<div rounded-top-xs></div>   <!-- 1px -->
<div rounded-top-s></div>    <!-- 2px -->
<div rounded-top-m></div>    <!-- 4px -->
<div rounded-top-l></div>    <!-- 8px -->
<div rounded-top-xl></div>   <!-- 16px -->
<div rounded-top-xxl></div>  <!-- 32px -->

<div rounded-left-none></div> <!-- 0 -->
<div rounded-left-xs></div>   <!-- 1px -->
<div rounded-left-s></div>    <!-- 2px -->
<div rounded-left-m></div>    <!-- 4px -->
<div rounded-left-l></div>    <!-- 8px -->
<div rounded-left-xl></div>   <!-- 16px -->
<div rounded-left-xxl></div>  <!-- 32px -->

<div rounded-right-none></div> <!-- 0 -->
<div rounded-right-xs></div>   <!-- 1px -->
<div rounded-right-s></div>    <!-- 2px -->
<div rounded-right-m></div>    <!-- 4px -->
<div rounded-right-l></div>    <!-- 8px -->
<div rounded-right-xl></div>   <!-- 16px -->
<div rounded-right-xxl></div>  <!-- 32px -->

<div rounded-bottom-none></div> <!-- 0 -->
<div rounded-bottom-xs></div>   <!-- 1px -->
<div rounded-bottom-s></div>    <!-- 2px -->
<div rounded-bottom-m></div>    <!-- 4px -->
<div rounded-bottom-l></div>    <!-- 8px -->
<div rounded-bottom-xl></div>   <!-- 16px -->
<div rounded-bottom-xxl></div>  <!-- 32px -->
```

There's even a shortcut for applying rounding when the element is the first or
last child with the following attributes. This is helpful for creating pill
button-like styling when it's inconvenient to selectively apply attributes to
the first and last children.

```html
<!-- horizontal pill -->
<button rounded-x-first-last-m>First</button>  <!-- rounded-left-m -->
<button rounded-x-first-last-m>Middle</button> <!-- no rounding applied -->
<button rounded-x-first-last-m>Last</button>   <!-- rounded-right-m -->

<!-- vertical pill -->
<button rounded-y-first-last-m>First</button>  <!-- rounded-top-m -->
<button rounded-y-first-last-m>Middle</button> <!-- no rounding applied -->
<button rounded-y-first-last-m>Last</button>   <!-- rounded-bottom-m -->
```

There are some attributes to apply styling that affects interaction:

```html
<div no-select>This text not selectable</div>
<div no-mouse>Anything inside this element will receive no mouse events</div>
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
