module.exports = {
  root: true,
  extends: [
    'react-app',
    'react-app/jest'
  ],
  parserOptions: {
    babelOptions: {
      presets: [
        ['babel-preset-react-app']
      ],
    },
  },
}; 