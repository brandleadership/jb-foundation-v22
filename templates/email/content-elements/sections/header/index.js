const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("header")
  .withLabel("Header Section")
  .withDescription("")
  .withIcon(Icon.HEADING)
  .withFile(require("./template.twig"))
  .withParts(cx.part.image.withLabel("Article Image"))
  .withDropzones(
    cx.dropzone
      .withDropzone("header")
      .withAllowedElements(require("../../elements/image-header"))
  );
