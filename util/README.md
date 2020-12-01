# Development Notes

## Build Performance

Initially, the build was performed by executing `esbuild` on the command line to produce CJS, UMD and ESM bundles including minified versions with sourcemaps:

    esbuild --bundle --format=cjs --sourcemap \
      --outfile=dist/index.js lib/index.js
    esbuild --bundle --sourcemap --format=umd --global-name=buildnumgen \
      --outfile=dist/index.umd.js lib/index.js
    esbuild --minify --bundle --sourcemap --format=umd --global-name=buildnumgen \
      --outfile=dist/index.umd.min.js lib/index.js \
    esbuild --bundle --sourcemap --format=esm \
      --outfile=dist/index.mjs lib/index.js
    esbuild --minify --bundle --sourcemap --format=esm \
      --outfile=dist/index.min.mjs lib/index.js

The build time looked like this:

    real  0m1.696s
    user  0m1.439s
    sys   0m0.356s

Later, I wrote a script to build all targets using the `esbuild` service and run those five build commands in parallel:

    node util/build

The build time improved greatly:

    real  0m0.346s
    user  0m0.327s
    sys   0m0.095s
