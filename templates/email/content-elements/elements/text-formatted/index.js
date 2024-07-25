// html-editor-config.text-simple.features=bold,italic,alignLeft,alignCenter,alignRight,formatOL,formatUL,textColor,fontSize
// html-editor-config.text-simple.formats=p
// html-editor-config.text-simple.font-sizes=10,11,12,13,14,16,18
// html-editor-config.text-simple.font-size-unit=px
// html-editor-config.text-simple.font-size-default=12
// html-editor-config.text-simple.text-colors=#00138a,#b0aa7e
// html-editor-config.text-simple.line-heights=1,1.15,1.5,2
// html-editor-config.text-simple.enter=p

const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("text-formatted")
  .withLabel("Formatted Text")
  .withDescription("")
  .withIcon(Icon.TEXT)
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.formattedText.withLabel("Text Editor")
    // .withHtmlEditorConfig(require("../../../configs/full")),
  );
