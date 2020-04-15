#!/bin/bash

STATUS="$(git status)"

if [[ $STATUS == *"nothing to commit, working directory clean"* ]]
then
    sed -i '/dist/d' ./.gitignore
    git add .
    git commit -m "Edit .gitignore to publish"
    git subtree split --prefix dist/apps/website/browser/ -b release-to-master
    git push origin release-to-master:master --force
    git reset HEAD~
    git checkout .gitignore
else
    echo "Need clean working directory to publish"
fi

