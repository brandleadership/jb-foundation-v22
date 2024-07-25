// element.card-two-columns.label=Card Two Columns
// element.card-two-columns.icon=section
// element.card - two - columns.styles=cardbackgroundcolor

const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("card-two-columns")
  .withLabel("Card Two Columns")
  .withDescription("")
  .withIcon(Icon.TWO_COLUMNS)
  .withFile(require("./template.twig"))
  .withDropzones(
    cx.dropzone
      .withDropzone("card-column-left")
      .withAllowedElements(require("../../elements/spacer")),
    cx.dropzone
      .withDropzone("card-column-right")
      .withAllowedElements(require("../../elements/spacer"))
  );
