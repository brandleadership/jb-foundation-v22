const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("spacer-grey")
  .withLabel("Spacer Grey")
  .withDescription("")
  .withIcon(Icon.DIVIDER)
  .withFile(require("./template.twig"));
