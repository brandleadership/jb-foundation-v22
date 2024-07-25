const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("image-header")
  .withLabel("Image Header")
  .withDescription("")
  .withIcon(Icon.IMAGE)
  .withFile(require("./template.twig"))
  .withParts(cx.part.image.withLabel("Image Details"));
