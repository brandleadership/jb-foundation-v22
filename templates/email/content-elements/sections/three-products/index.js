// element.card-image.label=Card Image
// element.card-image.icon=section
// element.card-image.styles=cardbackgroundcolor
const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("three-products")
  .withLabel("Three Products")
  .withDescription("")
  .withIcon(Icon.IMAGE)
  .withFile(require("./template.twig"));
//   .withParts(
//     cx.part.image.withLabel("Image"),
//     cx.part.plainText.withLabel("Title"),
//     cx.part.formattedText
//       .withLabel("Text")
//       .withHtmlEditorConfig(require("../../../configs/full")),
//     cx.part.link.withLabel("Link")
//   );
