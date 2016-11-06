# wakayamarb.org

[![CircleCI](https://circleci.com/gh/wakayamarb/wakayamarb.org/tree/master.svg?style=shield)](https://circleci.com/gh/wakayamarb/wakayamarb.org) [![Build Status](https://travis-ci.org/wakayamarb/wakayamarb.org.svg?branch=master)](https://travis-ci.org/wakayamarb/wakayamarb.org)

Website of local ruby community Wakayama.rb.
- [http://wakayamarb.org](http://wakayamarb.org)
- [https://wakayamarb.github.io/wakayamarb.org/](https://wakayamarb.github.io/wakayamarb.org/)

## development
OK >=Node.js: 4

```
$ git clone https://github.com/wakayamarb/wakayamarb.org.git
$ npm install
$ npm run start
```

### developmental scripts & CI / 開発用のスクリプトとCI環境

- `npm run build` builds the project.
- `npm start` performs live-compile project files and starts developmental live-reloading server.
- `npm run lint` does code lint for JavaScript and SASS files.
- `npm test` does tests.
- `npm run keygen` resets deploy key pair. Do not run this command exept a committer who manage product deployment. If you leak the secret key `id_ecdsa`(access forbidden by `.gitignore` for others), run this command to reset the key pair.
Then do not forget to replace public key at GitHub from [here](https://github.com/wakayamarb/wakayamarb.org/settings/keys).
- `npm run screenshot` create screenshot of website at `./screenshots/`.
- **CircleCI** identified by the badge [![CircleCI](https://circleci.com/gh/wakayamarb/wakayamarb.org/tree/master.svg?style=shield)](https://circleci.com/gh/wakayamarb/wakayamarb.org) lint the codes and do tests, triggered by all **pull requests** and **pushes** except `gh-pages` branch.
- **Travis CI** identified by the badge [![Build Status](https://travis-ci.org/wakayamarb/wakayamarb.org.svg?branch=master)](https://travis-ci.org/wakayamarb/wakayamarb.org) deploy the website to `gh-pages` and to the production server, triggered by **pushes** to `master` branch.

### How to commit ?

1. **Checkout** new branch.
1. Commit modification and push it.
1. Make **pull request** to `master`.
1. Check **CircleCI's status** on the [pull request page](https://github.com/wakayamarb/wakayamarb.org/pulls).
1. If build success, **Merge** it.
1. If build failed, fix and commit until build successed.

### How to contribute ?

1. **Fork** this repository.
1. Commit modification and push it.
1. Make **pull request** to `base:master`.
1. Check **CircleCI's status** on the [pull request page](https://github.com/wakayamarb/wakayamarb.org/pulls).
1. If build success, wait **Merge** or comments.
1. If build failed, fix and commit until build successed.
