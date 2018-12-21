const css = require("tagged-template-noop");

const grid = {
  value: 8,
  unit: "px",
};

// TODO: adjust size scale for larger values
const sizeScale = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8,
  9, 10, 11, 12, 13, 14, 16, 18, 20, 24, 28, 32, 36, 40,
  
];

// escape css selectors
function esc(input) {
  return String(input).replace(/([\.\:])/g, "\\$1");
}

const gridLength = n => `${ n * grid.value }${ grid.unit }`;

module.exports = css`

/*
================================================================================
SIZES
================================================================================
*/


${
  sizeScale.map(n => css`
    
    [width-${esc(n)}] {
      width: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  sizeScale.map(n => css`
    
    [min-width-${esc(n)}] {
      min-width: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  sizeScale.map(n => css`
    
    [max-width-${esc(n)}] {
      max-width: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  sizeScale.map(n => css`
    
    [height-${esc(n)}] {
      height: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  sizeScale.map(n => css`
    
    [min-height-${esc(n)}] {
      min-height: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  sizeScale.map(n => css`
    
    [max-height-${esc(n)}] {
      max-height: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  sizeScale.map(n => css`
    
    [size-${esc(n)}] {
      width: ${gridLength(n)};
      height: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  sizeScale.map(n => css`
    
    [min-size-${esc(n)}] {
      min-width: ${gridLength(n)};
      min-height: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  sizeScale.map(n => css`
    
    [max-size-${esc(n)}] {
      max-width: ${gridLength(n)};
      max-height: ${gridLength(n)};
    }
    
  `).join("\n")
}


/* TODO: incorporate full into the scale */

[height-full] {
  height: 100%;
}

[width-full]  {
  width:  100%;
}

[size-full]  {
  width: 100%;
  height: 100%;
}

`;
