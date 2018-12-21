const css = require("tagged-template-noop");

module.exports = css`

/*
================================================================================
RESETS
================================================================================
*/

[focus-reset],
[focus-no-outline],
[no-outline] {
  &:focus {
    outline: none;
  }
}

/* TODO: bg:reset or bg:none? */
[reset],
[button-reset] {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  
  &:focus {
    outline: none;
  }
}

`;
