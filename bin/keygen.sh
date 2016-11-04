#!/bin/bash

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
travis encrypt-file ./id_ecdsa >/dev/null 2>&1

echo "Add the public key below at 'https://github.com/wakayamarb/wakayamarb.org/settings/keys' if you have grant to access the repository."
echo "If you regenerate this public key, it is recommendable to remove the old key."

cat ./id_ecdsa.pub
