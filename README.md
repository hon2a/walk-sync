# walk-sync

Super simple generator that returns absolute paths of all files in a folder and sub-folders

## Use

```sh
npm install @hon2a/walk-sync
```

```javascript
import { walkSync } from '@hon2a/walk-sync'

for (const path of walkSync('/path/to/folder')) {
  console.log(path)
}
```

Note that `walkSync` is a generator function, so it needs to be used through the iterator.

## Development

### Install

Install dependencies using:

```sh
npm install
```

### Develop

After you modify sources, run the following (or set up your IDE to do it for you):

- format the code using `npm run format`
- lint it using `npm run lint`
- test it using `npm test`

and fix the errors, if there are any.

### Publish

Publishing is done in two steps:

1. Create a new version tag and push it to the repository:
    ```sh
    npm version <patch|minor|major>
    git push --follow-tags
    ```
1. Build and publish the new version as a npm package:
    ```sh
    npm publish --access public
    ``` 
