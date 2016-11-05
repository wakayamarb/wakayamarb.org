# wakayamarb.org

[![CircleCI](https://circleci.com/gh/wakayamarb/wakayamarb.org/tree/master.svg?style=shield)](https://circleci.com/gh/wakayamarb/wakayamarb.org/tree/master) [![Build Status](https://travis-ci.org/wakayamarb/wakayamarb.org.svg?branch=master)](https://travis-ci.org/wakayamarb/wakayamarb.org)

Website of local ruby community Wakayama.rb.
http://wakayamarb.org


# development
OK >=Node.js: 4

```
$ git clone https://github.com/wakayamarb/wakayamarb.org.git
$ npm install
$ npm run serve
```

[CircleCI](https://circleci.com/gh/wakayamarb/wakayamarb.org/) works on code linting.
[Travis CI](ttps://travis-ci.org/wakayamarb/wakayamarb.org) works on deployment to gh-pages (and production, in future).

# production deployment

```
$ npm run production
$ scp ./wakayamarb.org.tar.gz {{user}}@wakayamarb.org:{{port}}/path/to/html/public
$ cd /path/to/html/public
$ tar xvzf wakayamarb.org.tar.gz
```

# deploy key reset (for commiters)

Run `$ npm run keygen`.
Then remove old key and add new one from here.
https://github.com/wakayamarb/wakayamarb.org/settings/keys
