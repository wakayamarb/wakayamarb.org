#!/usr/bin/env bash

if [[ $CI != "true" && $TRAVIS != "true" ]]; then
  echo 'Not callable witout travis CI.'
  exit 0
fi

rm -rf './bin'

if [[ $2 != "$3" ]]; then
  echo "Not suitable to deploy. '$2' expected to be '$3'."
  exit 0
fi

if [[ $TRAVIS_PULL_REQUEST != "false" ]]; then
  echo 'Not deploying from Pull Request.'
  exit 0
fi

if [[ $1 != '' ]]; then
  echo 'Deploying to GitHub page brnch..'
  GITHUB_BRANCH_TO_DEPLOY=$1

  rm -rf .git/
  git init
  git config user.name 'travis'
  git config user.email "travis@wakayamarb.org"
  git remote add origin "git@github.com:$TRAVIS_REPO_SLUG.git"
  git checkout -b $GITHUB_BRANCH_TO_DEPLOY
  git add .
  git commit -m "Deploy from travis [ci skip]"
  git push --force origin $GITHUB_BRANCH_TO_DEPLOY
fi

if [[ $PRODUCTION_DIR != '' && $PRODUCTION_USER != '' && $PRODUCTION_HOST != '' ]]; then

  echo 'Deploying to production server..'
  if [[ $PRODUCTION_PORT == '' ]]; then
    $PRODUCTION_PORT='22'
  fi

  echo "rm -r $PRODUCTION_DIR/*" | ssh user@hostname -P $PRODUCTION_PORT ./* $PRODUCTION_USER@$PRODUCTION_HOST > /dev/null 2>&1
  scp -r -P $PRODUCTION_PORT ./* $PRODUCTION_USER@$PRODUCTION_HOST:$PRODUCTION_DIR > /dev/null 2>&1

fi
