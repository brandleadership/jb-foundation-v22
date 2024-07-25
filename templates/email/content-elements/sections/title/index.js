const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("title")
  .withLabel("Title Section")
  .withDescription("")
  .withIcon(Icon.HEADING)
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.plainText.withLabel("Title Bold"),
    cx.part.plainText.withLabel("Title Regular"),
    cx.part.plainText.withLabel("Subtitle")
  );
