// element.card-image.label=Card Image
// element.card-image.icon=section
// element.card-image.styles=cardbackgroundcolor
const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("card-image")
  .withLabel("Card Image")
  .withDescription("")
  .withIcon(Icon.IMAGE)
  .withFile(require("./template.twig"))
  .withDropzones(
    cx.dropzone
      .withDropzone("card-dropzone")
      .withAllowedElements(require("../../elements/spacer")
       )
);
