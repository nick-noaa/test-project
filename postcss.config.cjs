module.exports = {
  plugins: [
    require('postcss-jit-props')({
      files: ['./src/styles/*/**'],
    }),
    require('postcss-preset-env')({ stage: 0 }),
    require('cssnano'),
  ],
};
