const fs = require("fs-extra");
const styles = require("./src/css-utils");
const sass = require("node-sass");

const { css } = sass.renderSync({
  data: styles,
});

fs.outputFile("./dist/styles.css", css);
