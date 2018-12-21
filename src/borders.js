const css = require("tagged-template-noop");

const strokeColor = css`rgba(0, 0, 0, 0.1)`;
const stroke = css`solid 1px ${strokeColor}`;

module.exports = css`
/*
================================================================================
BORDERS
================================================================================
*/

[stroke] {
  border: ${stroke};
}

[stroke-y] {
  border-top: ${stroke};
  border-bottom: ${stroke};
}

[stroke-x] {
  border-right: ${stroke};
  border-left: ${stroke};
}

[stroke-top] {
  border-top: ${stroke};
}

[stroke-right] {
  border-right: ${stroke};
}

[stroke-bottom] {
  border-bottom: ${stroke};
}

[stroke-left] {
  border-left: ${stroke};
}

`;
