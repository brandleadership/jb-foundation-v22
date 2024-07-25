require("./styles/styles.scss");

const { cx, Locale } = require("@bsi-cx/design-build");

module.exports = cx.design
  .withTitle("E-Mail Scaffold")
  .withAuthor("BSI Business Systems Integration AG")
  .withDate("20.05.2022")
  // .withPreviewImage(require("./thumbnail.png"))
  .withDefaultLocale(Locale.EN)
  .withLocales(Locale.EN, Locale.DE)
  .withContentElementGroups(
    cx.contentElementGroup
      .withGroupId("elements")
      .withLabel("Elements")
      .withContentElements(
      // require("./content-elements/elements/text"),
        require("./content-elements/elements/text-link"),
        require("./content-elements/elements/text-formatted"),
        require("./content-elements/elements/h1-title"),
        require("./content-elements/elements/h2-subtitle"),
        require("./content-elements/elements/h3-subtitle"),
        require("./content-elements/elements/h4-subtitle"),
        require("./content-elements/elements/tag"),
        require("./content-elements/elements/spacer"),
        require("./content-elements/elements/spacer-grey"),
        require('./content-elements/elements/image'),
        require("./content-elements/elements/button"),
        require("./content-elements/elements/divider"),
        require("./content-elements/elements/title-section"),
        require("./content-elements/elements/image-header"),
        require("./content-elements/elements/footer-links-item"),
        require("./content-elements/elements/social-media-item"),
        require("./content-elements/elements/webview"),
        require("./content-elements/elements/audio"),
        require("./content-elements/elements/raw-html"),
    
      ),
    cx.contentElementGroup
      .withGroupId("sections")
      .withLabel("Sections")
      .withContentElements(
        require("./content-elements/sections/header"),
        require("./content-elements/sections/title"),
        require("./content-elements/sections/article-section"),
        require("./content-elements/sections/article-section-white"),
        require("./content-elements/sections/double-article"),
        require("./content-elements/sections/text-quote-block"),
        require("./content-elements/sections/socials"),
        require("./content-elements/sections/footer-links"),
        require("./content-elements/sections/copyright")
      )
  )
  .withDropzones(
    cx.dropzone
      .withDropzone("header_container")
      .withAllowedElements(
        require("./content-elements/sections/header"),
        require("./content-elements/elements/webview"),

      ),
    cx.dropzone
      .withDropzone("container")
      .withAllowedElements(
        require("./content-elements/sections/title"),
        require("./content-elements/sections/article-section"),
        require("./content-elements/sections/article-section-white"),
        require("./content-elements/sections/double-article"),
        require("./content-elements/sections/text-quote-block"),
        require("./content-elements/sections/socials"),
        require('./content-elements/elements/image'),
      ),
    cx.dropzone
      .withDropzone("footer_container")
      .withAllowedElements(
        require("./content-elements/sections/footer-links"),
        require("./content-elements/sections/copyright")
      )
  );
