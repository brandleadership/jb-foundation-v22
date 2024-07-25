const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("title-section")
  .withLabel("Title Section Text")
  .withDescription("")
  .withIcon(Icon.HEADING)
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.plainText.withLabel("Title Section"),
    cx.part.formattedText.withLabel("Text Editor")
    // .withHtmlEditorConfig(require("../../../configs/full")),
  );
