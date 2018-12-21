const css = require("tagged-template-noop");

const iconScale = {
  "xs": "16px",
  "s": "20px",
  "m": "24px",
  "l": "28px",
  "xl": "32px",
};



module.exports = css`

/*
================================================================================
  ICONS
  Used to resize icon fonts.
==============================================================================*/


${
  
  Object.entries(iconScale).map(([name, value]) => css`
    
    [icon-${name}] {
      font-size: ${value};
    }
    
  `).join("\n")
  
}

`;
