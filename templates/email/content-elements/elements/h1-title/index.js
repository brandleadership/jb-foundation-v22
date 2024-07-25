const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("h1-title")
  .withLabel("Title")
  .withDescription("")
  .withIcon(Icon.HEADING)
  .withFile(require("./template.twig"))
  .withParts(cx.part.plainText.withLabel("Text of Title"));
