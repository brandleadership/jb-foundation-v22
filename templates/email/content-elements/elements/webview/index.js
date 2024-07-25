const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("webview")
  .withLabel("Webview")
  .withDescription("")
  .withIcon(Icon.CHAIN)
  .withFile(require("./template.twig"))
  .withParts(cx.part.link.withLabel("Webview Link"));
