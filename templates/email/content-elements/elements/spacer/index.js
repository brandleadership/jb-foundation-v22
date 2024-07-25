const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("spacer")
  .withLabel("Spacer White")
  .withDescription("")
  .withIcon(Icon.DIVIDER)
  .withFile(require("./template.twig"));
