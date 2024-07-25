const {
    EnterMode,
    Feature,
    Format,
    cx,
    bsiProperty,
} = require('@bsi-cx/design-build');

module.exports = cx.htmlEditorConfig
    .withIdentifier('editor-config-35co7H')
    .withFeatures(
        Feature.BOLD,
        Feature.ITALIC,
        Feature.UNDERLINE,
        Feature.TEXT_COLOR,
        Feature.BACKGROUND_COLOR,
        Feature.FORMAT_OL,
        Feature.FORMAT_UL,
        Feature.OUTDENT,
        Feature.INDENT,
        Feature.PARAGRAPH_FORMAT,
        Feature.QUOTE,
        Feature.SPECIAL_CHARACTERS,
        Feature.INSERT_LINK,
        Feature.CLEAR_FORMATTING,
        Feature.UNDO,
        Feature.REDO,
        Feature.FULLSCREEN,
        Feature.SELECT_ALL,
        Feature.HTML,
        Feature.HELP
    )
    .withTextColors('#000000')
    .withFormats(Format.P)
    .withEnterMode(EnterMode.BR)
    .withFontSizes(8, 9, 10, 11, 12, 14, 16)
    //.withFontSizeUnit(FontSizeUnit.PX)
    .withFontSizeDefault(12)
    .withLineHeights(1, 1.1, 1.5);
