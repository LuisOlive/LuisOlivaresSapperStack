import sveltePreprocess from 'svelte-preprocess'

export default {
  preprocess: sveltePreprocess({
    babel: {
      plugins: [
        ['@babel/plugin-syntax-optional-chaining'],
        // very important this plugin before proposal class properties
        ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-do-expressions'],
        ['@babel/plugin-proposal-function-bind'],
        ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
        ['@babel/plugin-proposal-partial-application'],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ],
      presets: [
        [
          '@babel/preset-env',
          {
            loose: true,
            modules: false,
            targets: {
              esmodules: true
            }
          }
        ]
      ]
    },
    stylus: {
      includePaths: ['src']
    },
    postcss: {
      plugins: [require('autoprefixer')()]
    }
  })
}
