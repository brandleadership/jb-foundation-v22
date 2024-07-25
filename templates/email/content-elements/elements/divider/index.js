// style.dividercolor.label=Divider Color
// style.dividercolor.class.divider-grey.label=Grey
// style.dividercolor.class.divider-blue.label=Blue

// element.divider.label=Divider
// element.divider.icon=divider
// element.divider.styles=dividercolor

const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("divider")
  .withLabel("Divider")
  .withDescription("")
  .withIcon(Icon.DIVIDER)
  .withFile(require("./template.twig"));
