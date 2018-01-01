const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const path = require('path');

module.exports = {
  // debug: true,
  // webpack_assets_file_path: 'webpack-assets.json',
  webpack_stats_file_path: 'webpack-stats.json',
  modulesDirectories: ['src', 'node_modules'],
  alias: {
    _constants: path.resolve(process.cwd(), 'src/actions/constants'),
    _sagas: path.resolve(process.cwd(), 'src/sagas'),
    _api: path.resolve(process.cwd(), 'src/api'),
    _reducers: path.resolve(process.cwd(), 'src/reducers'),
    _actions: path.resolve(process.cwd(), 'src/actions'),
    _components: path.resolve(process.cwd(), 'src/components'),
    _containers: path.resolve(process.cwd(), 'src/containers'),
    _pages: path.resolve(process.cwd(), 'src/pages'),
    _styles: path.resolve(process.cwd(), 'src/styles'),
    _utils: path.resolve(process.cwd(), 'src/utils'),
    _images: path.resolve(process.cwd(), 'images'),
    _modals: path.resolve(process.cwd(), 'src/modals')
  },
  assets: {
    images: {
      extensions: ['png', 'jpg', 'jpeg', 'gif'],
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser
    },
    fonts: {
      extensions: ['eot', 'ttf', 'woff', 'woff2'],
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser
    },
    svg: {
      extension: 'svg',
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser
    },
    style_modules: {
      extensions: ['css', 'scss'],
      filter: (module, regex, options, log) => {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_filter(
            module,
            regex,
            options,
            log
          );
        }

        return regex.test(module.name);
      },
      path: (module, options, log) => {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_path_extractor(
            module,
            options,
            log
          );
        }

        return module.name;
      },
      parser: (module, options, log) => {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.css_modules_loader_parser(
            module,
            options,
            log
          );
        }

        return module.source;
      }
    }
  }
};
