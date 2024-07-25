const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("button")
  .withLabel("Button")
  .withDescription("")
  .withIcon(Icon.SIGNPOST)
  .withFile(require("./template.twig"))
  .withParts(cx.part.link.withLabel("Button Link"));
