module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      ['module-resolver', {
        alias: {
          '@db': './src/db',
          '@models': './src/models',
          '@controller': './src/controller',
          '@routes': './src/routes'
        }
      }]
    ],
    ignore: [
      '**/*.spec.ts'
    ]
  }