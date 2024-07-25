const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("footer-links-item")
  .withLabel("Footer Link")
  .withDescription("")
  .withIcon(Icon.CHAIN)
  .withFile(require("./template.twig"))
  .withParts(cx.part.link.withLabel("Footer Link Details"));
