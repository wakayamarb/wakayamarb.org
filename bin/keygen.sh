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

ssh-keygen -t ecdsa -f ./id_ecdsa -q -N ""
travis encrypt-file ./id_ecdsa

echo "Public key:"
cat ./id_ecdsa.pub
