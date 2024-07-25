const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("socials")
  .withLabel("Socials Section")
  .withDescription("")
  .withIcon(Icon.SOCIAL_SHARE)
  .withFile(require("./template.twig"))
  .withDropzones(
    cx.dropzone
      .withDropzone("socials-dropzone")
      .withAllowedElements(6)
      .withAllowedElements(require("../../elements/social-media-item"))
  );
  
  

