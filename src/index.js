import { readdirSync, statSync } from 'fs'
import { join } from 'path'

export function* walkSync(dir) {
  const files = readdirSync(dir)
  for (const file of files) {
    const pathToFile = join(dir, file)
    if (statSync(pathToFile).isDirectory()) {
      yield* walkSync(pathToFile)
    } else {
      yield pathToFile
    }
  }
}
