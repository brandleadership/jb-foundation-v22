const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("article-section")
  .withLabel("Article Section Grey")
  .withDescription("")
  .withIcon(Icon.TEXT)
  .withFile(require("./template.twig"))
  .withParts(cx.part.image.withLabel("Article Image"))
  .withDropzones(
    cx.dropzone
      .withDropzone("article-section-dropzone")
      .withAllowedElements(require("../../elements/spacer-grey"),
        require("../../elements/h3-subtitle"),
        require("../../elements/text-formatted"),
        require("../../elements/image"))
);

