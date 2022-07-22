import { generate, validate, parse, format } from 'build-number-generator'

let _generated: string
_generated = generate()
_generated = generate('1.0.3')
_generated = generate({ version: '1.0.3' })
_generated = generate({ version: '2018/06', versionSeparator: '-' })

const _validated: boolean = validate('1.0.3.180625392')

const _parsed: Date = parse('1.0.3.180625392')

let _formatted: string
_formatted = format('1.0.3.180625392')
_formatted = format(new Date)
