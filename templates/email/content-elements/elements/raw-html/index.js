const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("raw-html")
  .withLabel("HTML Element")
  .withDescription("")
  .withIcon(Icon.METADATA)
  .withFile(require("./template.twig"));
