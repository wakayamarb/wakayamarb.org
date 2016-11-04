#!/bin/bash

if [[ $CI != "true" && $TRAVIS != "true" ]]; then
  echo 'Not callable witout travis CI.'
fi

if [[ $2 != "$3" ]]; then
  echo "Not suitable to deploy. $2 expected to be $3."
fi

if [[ $TRAVIS_PULL_REQUEST == "true" ]]; then
  echo 'Not deploying from Pull Request.'
  exit 0
fi

echo 'Deploying to GitHub page brnch..'
if [[ -d './git/' ]]; then
  rm -rf .git/
fi

GITHUB_BRANCH_TO_DEPLOY=$1

git init
git config user.name "$USER"
git config user.email "$USER@travis-ci.org"
git remote add origin "git@github.com:$TRAVIS_REPO_SLUG.org.git"
git checkout -b $GITHUB_BRANCH_TO_DEPLOY
git add .
git commit -m"Deploy from travis"
git push --force origin $GITHUB_BRANCH_TO_DEPLOY
