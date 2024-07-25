const path = require("path");

const {
  BuildConfig,
  ModuleConfig,
  WebpackConfigBuilder,
  Version,
  DesignType,
} = require("@bsi-cx/design-build");

const emailBuildConfig = new BuildConfig()
    .withName('email')
    .withVersion('2.0.0')
    .withDesignType(DesignType.EMAIL)
    .withTargetVersion(Version.CX_22_0)
    .withRootPath(path.resolve(__dirname, 'templates', 'email'))
    .withPropertiesFilePath(path.resolve(__dirname, 'properties.js'))
    .withAdditionalFilesToCopy({
        from: path.resolve(__dirname, 'resources', 'img'),
        to: 'img',
    }, {
      from: path.resolve(__dirname, 'templates', 'email', 'preview.png'),
      to: 'static/preview.png',
  });

    module.exports = WebpackConfigBuilder.fromConfigs(
      emailBuildConfig
          .clone()
          .withName('email-jb-foundation-de')
          .withPropertiesFilePath(path.resolve(__dirname, 'lang-de.js')),
      emailBuildConfig
          .clone()
          .withName('email-jb-foundation-en')
          .withPropertiesFilePath(path.resolve(__dirname, 'lang-en.js'))
  );
