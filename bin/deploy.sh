#!/bin/bash

if [[ $CI != "true" && $TRAVIS != "true" ]]; then
  echo 'Not callable witout travis CI.'
fi

if [[ $TRAVIS_PULL_REQUEST == "false" ]]; then
  echo 'Not deploying from Pull Request.'
  exit 0
fi

echo 'Deploying to GitHub page brnch..'
if [[ -d './git/' ]]; then
  rm -rf .git/
fi

git init
git config user.name "wakayamarb"
git config user.email "wakayamarb@travis-ci.org"
git remote add origin "git@github.com:$TRAVIS_REPO_SLUG.org.git"
git checkout -b gh-pages
git add .
git commit -m"Deploy from travis"
git push --force origin gh-pages
