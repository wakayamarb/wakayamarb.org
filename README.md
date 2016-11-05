# wakayamarb.org

[![CircleCI](https://circleci.com/gh/wakayamarb/wakayamarb.org/tree/master.svg?style=shield)](https://circleci.com/gh/wakayamarb/wakayamarb.org/tree/master) [![Build Status](https://travis-ci.org/wakayamarb/wakayamarb.org.svg?branch=master)](https://travis-ci.org/wakayamarb/wakayamarb.org)

Website of local ruby community Wakayama.rb.

[http://wakayamarb.org](http://wakayamarb.org)

## development
OK >=Node.js: 4

```
$ git clone https://github.com/wakayamarb/wakayamarb.org.git
$ npm install
$ npm run serve
```

[CircleCI](https://circleci.com/gh/wakayamarb/wakayamarb.org/) works on code linting and small tests triggered by *pull requests* and *push* except `gh-pages` branch.
[Travis CI](ttps://travis-ci.org/wakayamarb/wakayamarb.org) works on deployment to gh-pages (and production, in future) triggered by *push* to `master` branch.

## participating

### commiters

1. *Checkout* new branch.
1. Commit modification and push.
1. Make pull request to `master` branch.

### contributors

1. *Fork* this repository.
1. Commit modification and push.
1. Make pull request to `base:master` branch.

## production deployment

```
$ npm run production
$ scp ./wakayamarb.org.tar.gz {{user}}@wakayamarb.org:{{port}}/path/to/html/public
$ cd /path/to/html/public
$ tar xvzf wakayamarb.org.tar.gz
```

## deploy key reset (for commiters)

If you leak the secret key `id_ecdsa`, run `$ npm run keygen` to reset the key pair.
Then remove old key and add new one at GitHub from [here](https://github.com/wakayamarb/wakayamarb.org/settings/keys).
