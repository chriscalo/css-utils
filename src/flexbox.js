const css = require("tagged-template-noop");

const crossAlignmentMap = {
  "start": "flex-start",
  "center": "center",
  "end": "flex-end",
  "baseline": "baseline", // for flex-direction: row | row-reverse parents only
  "fill": "stretch",
};



module.exports = css`

/*
================================================================================
  FLEXBOX
==============================================================================*/

[flex\\:col],
[flex-col],
[stack\\:v],
[stack-v],
[stack\\:y],
[stack-y] {
  display: flex;
  flex-direction: column;
}

[flex],
[flex\\:row],
[flex-row],
[stack],
[stack\\:h],
[stack-h],
[stack\\:x],
[stack-x] {
  display: flex;
  flex-direction: row;
}

[spacer],
[grow] {
  flex-grow: 1;
}

[no-grow] {
  flex-grow: 0;
}

[shrink] {
  flex-shrink: 1;
  min-width: 0;
  min-height: 0;
}

[no-shrink] {
  flex-shrink: 0;
}

/*
================================================================================
  Flex main-axis alignment
==============================================================================*/

[main\\:start],
[items\\:main-start],
[items\\:line-start] {
  justify-content: flex-start;
}

[main\\:center],
[items\\:main-center],
[items\\:line-center] {
  justify-content: center;
}

[main\\:end],
[items\\:main-end],
[items\\:line-end] {
  justify-content: flex-end;
}

[main\\:distribute],
[items\\:main-distribute],
[items\\:line-distribute] {
  justify-content: space-between;
}

[main\\:even],
[items\\:main-even],
[items\\:line-even] {
  justify-content: space-around;
}

/*
================================================================================
  Flex cross-axis alignment
==============================================================================*/

[cross\\:start],
[items\\:cross-start] {
  align-items: flex-start;
}

[cross\\:center],
[items\\:cross-center] {
  align-items: center;
}

[cross\\:end],
[items\\:cross-end] {
  align-items: flex-end;
}

[cross\\:baseline],
[items\\:cross-baseline] {
  align-items: baseline;
}

[cross\\:fill],
[items\\:cross-fill] {
  align-items: stretch;
}

/*
================================================================================
  Flex item overflow along main-axis
==============================================================================*/

[items\\:fit] {
  flex-wrap: nowrap;
  & > *:not(:last-child) {
    /* FIXME: need to figure out row vs column */
    min-width: 0;
    min-height: 0;
  }
}

[items\\:wrap],
[items\\:wrap-after] {
  flex-wrap: wrap;
}

[items\\:wrap-reverse],
[items\\:wrap-before] {
  flex-wrap: wrap-reverse;
}

[items\\:overflow] {
  flex-wrap: nowrap;
}

/*
================================================================================
  Flex line alignment
==============================================================================*/

[lines\\:start] {
  align-content: flex-start;
}

[lines\\:center] {
  align-content: center;
}

[lines\\:end] {
  align-content: flex-end;
}

[lines\\:distribute] {
  align-content: space-between;
}

[lines\\:even] {
  align-content: space-around;
}

[lines\\:fill] {
  align-content: stretch;
}

${
  // cross-axis self alignment
  Object.entries(crossAlignmentMap).map(([name, value]) => css`
    
    [self\\:${name}],
    [self\\:cross-${name}],
    [self-${name}],
    [self-align-${name}] {
      align-self: ${value};
    }
    
  `).join("\n")
}



`;
