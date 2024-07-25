const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("h3-subtitle")
  .withLabel("Subtitle H3")
  .withDescription("")
  .withIcon(Icon.HEADING)
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.plainText.withLabel("Subtitle"),
    cx.part.formattedText.withLabel("Text Editor")
  );
