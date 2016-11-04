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

# ssh-keygen -t ecdsa -f ./id_ecdsa -q -N ""
# travis encrypt-file ./id_ecdsa >/dev/null 2>&1

ssh-keygen -t rsa -f ./id_rsa -q -N ""
travis encrypt-file ./id_rsa >/dev/null 2>&1

echo "The keys has been reset. Add the public key shown below at 'https://github.com/wakayamarb/wakayamarb.org/settings/keys' if you have grant to access the repository."
echo "If you regenerate this public key, it is recommendable to remove the old key."
echo ""
cat ./id_ecdsa.pub
