const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("double-article")
  .withLabel("Double Column Article")
  .withDescription("")
  .withIcon(Icon.TEXT)
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.image.withLabel("Image Details (Left)"),
    cx.part.image.withLabel("Image Details (Right)"),
    cx.part.link.withLabel("Button Details (Left)"),
    cx.part.link.withLabel("Button Details (Right)"),
    cx.part.formattedText.withLabel("Text Editor (Left)"),
    cx.part.formattedText.withLabel("Text Editor (Right)")
  );
