const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("text-link")
  .withLabel("Text Link")
  .withDescription("")
  .withIcon(Icon.CHAIN)
  .withFile(require("./template.twig"))
  .withParts(cx.part.link.withLabel("Link"));
