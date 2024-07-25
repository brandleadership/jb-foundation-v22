const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("audio")
  .withLabel("Audio")
  .withDescription("")
  .withIcon(Icon.IMAGE)
  .withFile(require("./template.twig"))
  .withParts(cx.part.html.withLabel("Audio Element"));
