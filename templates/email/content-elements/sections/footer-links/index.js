const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("footer-links")
  .withLabel("Footer Section")
  .withDescription("")
  .withIcon(Icon.CHAIN)
  .withFile(require("./template.twig"))
  .withDropzones(
    cx.dropzone
      .withDropzone("footercolumn1-dropzone")
      .withAllowedElements(
        require("../../elements/footer-links-item"),
    ),
    cx.dropzone
    .withDropzone("footercolumn2-dropzone")
    .withAllowedElements(
      require("../../elements/footer-links-item"),
     )
);
  
