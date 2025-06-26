#!/usr/bin/env node

import { generate, validate, format } from '../dist/index.mjs'

function help() {
  console.log(`Generates a unique build number with a human-readable build time.

Usage: [options] [build_number|product_version]

Options:
  -s|--separator <separator>  separates product version from build number
  -v|--validate               only validates a build number
  -V|--version                print version number
  -h|--help                   print usage instructions

Examples:
  $ buildnumgen
  180625392
  $ buildnumgen 1.0.3
  1.0.3.180625392
  $ buildnumgen 180625392
  Mon Jun 25 2018 13:04
  $ buildnumgen 1.0.3.180625392
  Mon Jun 25 2018 13:04`)
}

const { argv } = process
let   versionSeparator, validateOnly, version

for (let i = 2, l = argv.length; i < l; ++i) {
  const arg = argv[i]
  const match = /^(?:-|--)?([a-zA-Z][-a-zA-Z]*)$/.exec(arg)
  if (match) {
    switch (match[1]) {
      case 's': case 'separator':
        versionSeparator = argv[++i]
        continue
      case 'v': case 'validate':
        validateOnly = true
        continue
      case 'V': case 'version':
        {
          const { readFile } = await import('node:fs/promises')
          const { fileURLToPath } = await import('node:url')
          const { join, dirname } = await import('node:path')
          const pkg = join(dirname(fileURLToPath(import.meta.url)), '../package.json')
          console.log(JSON.parse(await readFile(pkg, 'utf8')).version)
          process.exit(0)
        }
        continue
      case 'h': case 'help':
        help()
        process.exit(0)
    }
    console.error(`unknown option: "${match[0]}"`)
    process.exit(1)
  }
  version = arg
}

const valid = validate(version)

if (validateOnly) {
  process.exit(valid ? 0 : 1)
}

const output = valid ? format(version) : generate({ version, versionSeparator })
console.log(output)
