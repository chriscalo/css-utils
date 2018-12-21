const css = require("tagged-template-noop");

module.exports = css`

/*
================================================================================
EDGE PINNING
Requires position: absolute
================================================================================
*/

[pin-all] {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

[pin-top] {
  top: 0;
}

[pin-right] {
  right: 0;
}

[pin-bottom] {
  bottom: 0;
}

[pin-left] {
  left: 0;
}

[pin-x] {
  right: 0;
  left: 0;
}

[pin-y] {
  top: 0;
  bottom: 0;
}

[unpin-all] {
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
}

[unpin-top] {
  top: auto;
}

[unpin-right] {
  right: auto;
}

[unpin-bottom] {
  bottom: auto;
}

[unpin-left] {
  left: auto;
}

[unpin-x] {
  right: auto;
  left: auto;
}

[unpin-y] {
  top: auto;
  bottom: auto;
}

`;
