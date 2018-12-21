const css = require("tagged-template-noop");

const greyscale = {
  "000": css`#000`,
  "111": css`#111`,
  "222": css`#222`,
  "333": css`#333`,
  "444": css`#444`,
  "555": css`#555`,
  "666": css`#666`,
  "777": css`#777`,
  "888": css`#888`,
  "999": css`#999`,
  "aaa": css`#aaa`,
  "bbb": css`#bbb`,
  "ccc": css`#ccc`,
  "ddd": css`#ddd`,
  "eee": css`#eee`,
  "fff": css`#fff`,
};

module.exports = css`
/*
================================================================================
  COLORS
================================================================================
*/

${
  Object.entries(greyscale).map(([name, value]) => css`
    
    [color-${name}] {
      color: ${value};
    }
    
    [color-${name}] {
      color: ${value};
    }
    
    [hover-color-${name}]:hover {
      color: ${value};
    }
    
    [bg-${name}] {
      background-color: ${value};
    }
    
    [hover-bg-${name}]:hover {
      background-color: ${value};
    }
    
  `).join("\n")
}

`;
