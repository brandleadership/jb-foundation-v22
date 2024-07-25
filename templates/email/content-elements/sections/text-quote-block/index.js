const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("text-quote-block")
  .withLabel("Quote Section")
  .withDescription("")
  .withIcon(Icon.SNIPPET)
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.plainText.withLabel("Quote"),
    cx.part.plainText.withLabel("Authors Name")
  );
