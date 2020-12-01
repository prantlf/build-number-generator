const { startService } = require('@prantlf/esbuild')
let service

function build (suffix, { format, minify }) {
  const globalName = format === 'umd' ? 'buildnumgen' : undefined
  return service.build({
    entryPoints: [`${__dirname}/../lib/index.js`],
    outfile: `${__dirname}/../dist/index.${suffix}`,
    bundle: true, sourcemap: true,
    minify, format, globalName
  })
}

(async () => {
  try {
    service = await startService()
    await Promise.all([
      build('js', { format: 'cjs' }),
      build('umd.js', { format: 'umd' }),
      build('umd.min.js', { format: 'umd', minify: true }),
      build('mjs', { format: 'esm' }),
      build('min.mjs', { format: 'esm', minify: true })
    ])
  } catch (error) {
    console.log(error)
    process.exitCode = 1
  } finally {
    if (service) service.stop()
  }
})()
