# wakayamarb.org

[![CircleCI](https://circleci.com/gh/wakayamarb/wakayamarb.org/tree/master.svg?style=shield)](https://circleci.com/gh/wakayamarb/wakayamarb.org) [![Build Status](https://travis-ci.org/wakayamarb/wakayamarb.org.svg?branch=master)](https://travis-ci.org/wakayamarb/wakayamarb.org)

Website of local ruby community Wakayama.rb.

[http://wakayamarb.org](http://wakayamarb.org)

[https://wakayamarb.github.io/wakayamarb.org/](https://wakayamarb.github.io/wakayamarb.org/)

## development
OK >=Node.js: 4

```
$ git clone https://github.com/wakayamarb/wakayamarb.org.git
$ npm install
$ npm run serve
```

[CircleCI](https://circleci.com/gh/wakayamarb/wakayamarb.org/) lint the codes and do tests, triggered by all **pull requests** and **pushes** except `gh-pages` branch.

[Travis CI](ttps://travis-ci.org/wakayamarb/wakayamarb.org) deploy codes to gh-pages (and to the production server, in future) triggered by **pushes** to `master` branch.

## participating

### for commiters

1. **Checkout** new branch.
1. Commit modification and push it.
1. **Make pull request** to `master`.
1. Check **CircleCI's status** on the [pull request page](https://github.com/wakayamarb/wakayamarb.org/pulls).
1. If build passed, **Merge** it.
1. If not, fix and commit until build being passed.
1. Merge it.

### for contributors

1. **Fork** this repository.
1. Commit modification and push it.
1. **Make pull request** to `base:master`.
1. Check **CircleCI's status** on the [pull request page](https://github.com/wakayamarb/wakayamarb.org/pulls).
1. If build not passed, fix and commit until build being passed.
1. Check comments of commiters.
1. Without problem, wait merge.

## deploy key reset (for commiters)

If you leak the secret key `id_ecdsa`, run `npm run keygen` to reset the key pair.
Then replace public key at GitHub from [here](https://github.com/wakayamarb/wakayamarb.org/settings/keys).
