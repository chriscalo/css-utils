const css = require("tagged-template-noop");

module.exports = css`
/*
================================================================================
CORNERS
================================================================================
*/

/* TODO: rounded-top-* and rounded-bottom-* */
${
  Object.entries({
    "none": "0",
    "xs": "1px",
    "s": "2px",
    "m": "4px",
    "l": "8px",
    "xl": "16px",
    "xxl": "32px",
  }).map(([name, value]) => css`
    
  [rounded-${name}] {
    border-radius: ${value};
  }
  
  [rounded-left-${name}] {
    border-top-left-radius: ${value};
    border-bottom-left-radius: ${value};
  }
  
  [rounded-right-${name}] {
    border-top-right-radius: ${value};
    border-bottom-right-radius: ${value};
  }
  
  [rounded-top-${name}] {
    border-top-left-radius: ${value};
    border-top-right-radius: ${value};
  }
  
  [rounded-bottom-${name}] {
    border-bottom-left-radius: ${value};
    border-bottom-right-radius: ${value};
  }
  
  [rounded-x-first-last-${name}] {
    &:first-child {
      border-top-left-radius: ${value};
      border-bottom-left-radius: ${value};
    }
    
    &:last-child {
      border-top-right-radius: ${value};
      border-bottom-right-radius: ${value};
    }
  }
  
  [rounded-y-first-last-${name}] {
    &:first-child {
      border-top-left-radius: ${value};
      border-top-right-radius: ${value};
    }
    
    &:last-child {
      border-bottom-left-radius: ${value};
      border-bottom-right-radius: ${value};
    }
  }
  
  `).join("\n")
}

`;
