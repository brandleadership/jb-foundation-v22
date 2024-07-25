const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("text")
  .withLabel("Text")
  .withDescription("")
  .withIcon(Icon.TEXT)
  .withFile(require("./template.twig"))
  .withParts(cx.part.plainText.withLabel("Text"));
