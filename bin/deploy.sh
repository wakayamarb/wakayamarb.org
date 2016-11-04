#!/bin/bash

if [[ $CI != "true" && $TRAVIS != "true" ]]; then
  echo 'Not callable witout travis CI.'
  exit 0
fi

if [[ $2 != "$3" ]]; then
  echo "Not suitable to deploy. $2 expected to be $3."
  exit 0
fi

if [[ $TRAVIS_PULL_REQUEST == "true" ]]; then
  echo 'Not deploying from Pull Request.'
  exit 0
fi

echo 'Deploying to GitHub page brnch..'

GITHUB_BRANCH_TO_DEPLOY=$1

rm -rf .git/
echo 1
git init
echo 2
git config --global user.name "wakayamarb"
git config --global user.email "wakayamarb@travis-ci.org"
echo 3
git remote add origin "git@github.com:wakayamarb.wakayamarb.org.git"
git remote -v
echo 4
git checkout -b $GITHUB_BRANCH_TO_DEPLOY
git branch
echo 5
git add .
git commit -m "Deploy from travis"
echo 6
git push --force origin $GITHUB_BRANCH_TO_DEPLOY
echo 7
