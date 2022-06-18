interface GenerateOptions {
  version?: string
  versionSeparator?: string
}

export function generate(options?: GenerateOptions | string): string

export function validate(build: string): boolean

export function parse(build: string): Date

export function format(date: string | Date): Date
