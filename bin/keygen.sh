#!/bin/bash

echo 'Are you sure that this command rests deploy key? [y/N]'
read RESET
if [[ $RESET != 'y' ]]; then
  exit 0
fi

if [[ -f ./id_ecdsa ]]; then
  rm ./id_ecdsa
fi

if [[ -f ./id_ecdsa.enc ]]; then
  rm ./id_ecdsa.enc
fi

if [[ -f ./id_ecdsa.pub ]]; then
  rm ./id_ecdsa.pub
fi

ssh-keygen -t ecdsa -f ./id_ecdsa -q -N '' -C ''
travis encrypt-file ./id_ecdsa

echo ''
echo "Be sure to remove old Public key from GitHub with one below:"
echo -e "\033[1;32m$(cat ./id_ecdsa.pub)\033[0m"
