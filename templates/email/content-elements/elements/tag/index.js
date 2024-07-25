const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("tag")
  .withLabel("Tag")
  .withDescription("")
  .withIcon(Icon.SIGNPOST)
  .withFile(require("./template.twig"))
  .withParts(cx.part.link.withLabel("Tag Link"));
