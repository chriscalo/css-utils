const css = require("tagged-template-noop");

module.exports = css`

/*
================================================================================
LAYOUT
================================================================================
*/

/* // TODO: outline:cyan, etc */
[debug],
[outline] {
  outline: solid 1px magenta;
  outline-offset: -1px; // inset instead of outset
}

[hidden] {
  display: none;
}

[block] {
  display: block;
}

[inline-block] {
  display: inline-block;
}

[grid] {
  display: grid;
}

[fill-grid] {
  grid-row: 1 / -1;
  grid-column: 1 / -1;
}

[container],
[relative] {
  position: relative;
}

[positioned],
[absolute] {
  position: absolute;
}

[fixed] {
  position: fixed;
}

/* // TODO: [content:center]? */
[content\\:center-xy],
[center-xy] {
  display: flex;
  justify-content: center;
  align-items: center;
}

`;
