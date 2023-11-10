#!/bin/bash
# Message de commit
commit_message="Automated commit"
while true; do
  # Vérifier s'il y a des changements
  git_status=$(git status --porcelain)
  
  if [[ -n "$git_status" ]]; then
    # Effectuer un commit avec tous les fichiers modifiés
    git config --global credential.helper store
    git add 
    git config --global user.email "feppdougou@gmail.com"
    git config --global user.name "cheikhmodiouf"
    git commit -m "$commit_message"
    
    # Envoyer les modifications sur le serveur distant
    git push origin master
  fi
  # Attendre 5 minutes
  sleep 300
done