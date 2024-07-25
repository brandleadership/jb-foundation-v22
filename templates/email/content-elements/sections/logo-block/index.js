const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("logo-block")
  .withLabel("Logo Block")
  .withDescription("")
  .withIcon(Icon.IMAGE)
  .withFile(require("./template.twig"))
  .withDropzones(
    cx.dropzone
      .withDropzone("logo-block-dropzone")
      .withAllowedElements(require("../../elements/image"))
  );
