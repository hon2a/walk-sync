import { resolve } from 'path'

import { walkSync } from './index'

describe('walkSync', () => {
  it('returns paths of all the files in a folder and its sub-folders', () => {
    const folder = resolve(__dirname, '../test')
    const paths = []
    for (const path of walkSync(folder)) {
      paths.push(path.slice(folder.length))
    }
    expect(paths).toEqual(['/dummyFile', '/sub/folder/otherDummyFile', '/sub/folder/yetAnother'])
  })
})
