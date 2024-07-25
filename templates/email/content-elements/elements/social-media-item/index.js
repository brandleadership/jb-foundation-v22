const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("social-media-item")
  .withLabel("Socials Image")
  .withDescription("")
  .withIcon(Icon.SOCIAL_SHARE)
  .withFile(require("./template.twig"))
  .withParts(cx.part.image.withLabel("Social Media Icon + Link"));
