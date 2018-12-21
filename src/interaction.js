const css = require("tagged-template-noop");

module.exports = css`
/*
================================================================================
INTERACTION
================================================================================
*/

[no-select] {
  user-select: none;
}

[scroll-y] {
  overflow-y: auto;
}

[scroll-x] {
  overflow-x: auto;
}

[no-mouse] {
  pointer-events: none;
}

/* Source: https://developer.mozilla.org/en-US/docs/Web/CSS/cursor */

${
([
  "auto",
  "default",
  "none",
  "context-menu",
  "help",
  "pointer",
  "progress",
  "wait",
  "cell",
  "crosshair",
  "text",
  "vertical-text",
  "alias",
  "copy",
  "move",
  "no-drop",
  "not-allowed",
  "e-resize",
  "n-resize",
  "ne-resize",
  "nw-resize",
  "s-resize",
  "se-resize",
  "sw-resize",
  "w-resize",
  "ew-resize",
  "ns-resize",
  "nesw-resize",
  "nwse-resize",
  "col-resize",
  "row-resize",
  "all-scroll",
  "zoom-in",
  "zoom-out",
  "grab",
  "grabbing",
]).map(value => css`
  
  [cursor-${value}] {
    cursor: ${value};
  }
  
`).join("\n")
}

`;
