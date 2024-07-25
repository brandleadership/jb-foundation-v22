const { cx } = require("@bsi-cx/design-build");

module.exports = cx.style
  .withIdentifier("card-bgc-SHcUzT")
  .withLabel("Card Background Color")
  .withCssClasses(
    cx.cssClass.withLabel("White").withCssClass("card-white"),
    cx.cssClass.withLabel("Blue").withCssClass("card-blue")
  );
