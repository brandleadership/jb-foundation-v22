const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("article-section-white")
  .withLabel("Article Section White")
  .withDescription("")
  .withIcon(Icon.TEXT)
  .withFile(require("./template.twig"))
  .withParts(cx.part.image.withLabel("Article Image"))
  .withDropzones(
    cx.dropzone
      .withDropzone("article-section-white-dropzone")
      .withAllowedElements(
        require("../../elements/spacer"),
        require("../../elements/title-section"),
        require("../../elements/image"),
        require("../../elements/text-link"))
);



 
