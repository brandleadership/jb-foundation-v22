const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("h2-subtitle")
  .withLabel("Subtitle H2")
  .withDescription("")
  .withIcon(Icon.HEADING)
  .withFile(require("./template.twig"))
  .withParts(cx.part.plainText.withLabel("Subtitle"));
