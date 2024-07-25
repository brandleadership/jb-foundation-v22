const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("h4-subtitle")
  .withLabel("Subtitle H4")
  .withDescription("")
  .withIcon(Icon.HEADING)
  .withFile(require("./template.twig"))
  .withParts(cx.part.plainText.withLabel("Subtitle"));
