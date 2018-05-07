import babel from 'rollup-plugin-babel';

const config = {
  input: './src/index.js',
};

export default [
  {
    ...config,
    output: {
      file: './index.js',
      format: 'cjs',
    },
    plugins: [
      babel({
        presets: [
          [
            'env',
            {
              targets: {
                node: 6,
              },
              modules: false,
            },
          ],
        ],
      }),
    ],
  },
  {
    ...config,
    output: {
      file: './index.mjs',
      format: 'es',
    },
    plugins: [
      babel({
        presets: [
          [
            'env',
            {
              targets: {
                node: 6,
              },
              modules: false,
            },
          ],
        ],
      }),
    ],
  },
];
