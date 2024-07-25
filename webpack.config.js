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
    .withTargetVersion(Version.CX_1_3)
    .withRootPath(path.resolve(__dirname, 'templates', 'email'))
    .withPropertiesFilePath(path.resolve(__dirname, 'properties.js'))
    .withAdditionalFilesToCopy({
        from: path.resolve(__dirname, 'resources', 'img'),
        to: 'img',
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
