#!/bin/bash

# create tarball of production code files

DESTINE="./dest/"

npm install
npm run build

if [[ ! -d $DESTINE ]]; then
    mkdir $DESTINE
fi

tar cvzf ./wakayamarb.org.tar.gz fonts/ images index.html style.css bundle.js
