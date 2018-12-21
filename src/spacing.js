const css = require("tagged-template-noop");

const grid = {
  value: 8,
  unit: "px",
};

const spacingScale = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8,
  9, 10, 11, 12, 13, 14, 16, 18, 20, 24, 28, 32,
];

const nudgeScale = [1, 2, 3, 4, 6, 8];

// escape css selectors
function esc(input) {
  return String(input).replace(/([\.\:])/g, "\\$1");
}


const gridLength = n => `${ n * grid.value }${ grid.unit }`;

module.exports = css`
  
/*
================================================================================
Spacing and sizing based on an 8px grid
================================================================================
*/
${
  spacingScale.map(n => css`
    
    [gap-${esc(n)}] {
      grid-gap: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  spacingScale.map(n => css`
    
    [gap-x-${esc(n)}] {
      grid-column-gap: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  spacingScale.map(n => css`
    
    [gap-y-${esc(n)}] {
      grid-row-gap: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  spacingScale.map(n => css`
    
    [pad-${esc(n)}] {
      padding: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  spacingScale.map(n => css`
    
    [pad-x-${esc(n)}] {
      padding-left: ${gridLength(n)};
      padding-right: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  spacingScale.map(n => css`
    
    [pad-l-${esc(n)}],
    [pad-left-${esc(n)}] {
      padding-left: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  spacingScale.map(n => css`
    
    [pad-r-${esc(n)}],
    [pad-right-${esc(n)}] {
      padding-right: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  spacingScale.map(n => css`
    
    [pad-y-${esc(n)}] {
      padding-top: ${gridLength(n)};
      padding-bottom: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  spacingScale.map(n => css`
    
    [pad-t-${esc(n)}],
    [pad-top-${esc(n)}] {
      padding-top: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  spacingScale.map(n => css`
    
    [pad-b-${esc(n)}],
    [pad-bottom-${esc(n)}] {
      padding-bottom: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  spacingScale.map(n => css`
    
    [margin-${esc(n)}] {
      margin: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  spacingScale.map(n => css`
    
    [margin-x-${esc(n)}] {
      margin-left: ${gridLength(n)};
      margin-right: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  spacingScale.map(n => css`
    
    [margin-l-${esc(n)}],
    [margin-left-${esc(n)}] {
      margin-left: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  spacingScale.map(n => css`
    
    [margin-r-${esc(n)}],
    [margin-right-${esc(n)}] {
      margin-right: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  spacingScale.map(n => css`
    
    [margin-y-${esc(n)}] {
      margin-top: ${gridLength(n)};
      margin-bottom: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  spacingScale.map(n => css`
    
    [margin-t-${esc(n)}],
    [margin-top-${esc(n)}] {
      margin-top: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  spacingScale.map(n => css`
    
    [margin-b-${esc(n)}],
    [margin-bottom-${esc(n)}] {
      margin-bottom: ${gridLength(n)};
    }
    
  `).join("\n")
}

${
  nudgeScale.map(n => css`
  
    [nudge-down-${esc(n)}] {
      position: relative;
      top: ${gridLength(n)};
    }
    
    [nudge-up-${esc(n)}] {
      position: relative;
      top: ${gridLength(n * -1)};
    }
    
    [nudge-right-${esc(n)}] {
      position: relative;
      left: ${gridLength(n)};
    }
    
    [nudge-left-${esc(n)}] {
      position: relative;
      left: ${gridLength(n * -1)};
    }
    
  `).join("\n")
}


/* make gap-* work for vertical stacks */
[flex-col],
[stack-v],
[stack-y] {
  
  ${
    spacingScale.map(n => css`
      
      &[gap-${esc(n)}] > :not(:last-child) {
        margin-bottom: ${gridLength(n)};
      }
    
    `).join("\n")
  }

}

/* make gap-* work for horizontal stacks */
[flex-row],
[stack-h],
[stack-x] {
  ${
    spacingScale.map(n => css`
      
      &[gap-${esc(n)}] > :not(:last-child) {
        margin-right: ${gridLength(n)};
      }
    
    `).join("\n")
  }
}

`;
