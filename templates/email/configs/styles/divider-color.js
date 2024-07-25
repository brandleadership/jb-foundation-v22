const { cx } = require("@bsi-cx/design-build");

module.exports = cx.style
  .withIdentifier("divider-color-SycAzZ")
  .withLabel("Divider Color")
  .withCssClasses(
    cx.cssClass.withLabel("Grey").withCssClass("divider-grey"),
    cx.cssClass.withLabel("Blue").withCssClass("divider-blue")
  );
