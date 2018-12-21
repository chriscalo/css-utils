const css = require("tagged-template-noop");

module.exports = css`

/*
================================================================================
  TEXT
==============================================================================*/

${
  Object.entries({
    "xxxs": "11px",
    "xxs": "12px",
    "xs": "13px",
    "s": "14px",
    "m": "16px",
    "l": "20px",
    "xl": "24px",
    "xxl": "32px",
    "xxxl": "48px",
  }).map(([name, value]) => css`
    
    [text-${name}] {
      font-size: ${value};
    }
    
  `).join("\n")
}

/* text-transform */
[capitalize] {
  text-transform: capitalize;
}
[uppercase] {
  text-transform: uppercase;
}
[lowercase] {
  text-transform: lowercase;
}

/* TODO: remove the align-* selectors? */
/* TODO: text-align-text-top => text-align:ascender */
/* TODO: text-align-text-bottom => text-align:descender */
/* TODO: text-align: $value; */
${
  ([
    "baseline",
    "sub",
    "super",
    "text-top",
    "text-bottom",
    "middle",
    "top",
    "bottom",
  ]).map(value => css`
    
    [text-align-${value}],
    [align-${value}] {
      vertical-align: ${value};
    }
    
  `).join("\n")
}


/* TODO: remove the align-* selectors? */
/* TODO: text-align: $value; */
${
  ([
    "left",
    "center",
    "right",
    "justify",
  ]).map(value => css`
    
    [text-align-${value}],
    [align-${value}] {
      text-align: ${value};
    }
    
  `).join("\n")
}

[break-word] {
  overflow-wrap: break-word;
}

${
  Object.entries({
    "hairline": 100,
    "thin": 200,
    "light": 300,
    "normal": 400,
    "medium": 500,
    "semibold": 600,
    "bold": 700,
    "extrabold": 800,
    "black": 900,
  }).map(([name, value]) => css`
    
    [text-weight-${name}] {
      font-weight: ${value};
    }
    
  `).join("\n")

}

`;
