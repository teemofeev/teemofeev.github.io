#!/bin/bash
set -e

log() {
  printf "\n$1\n"
}

back_to_main() {
  log "Going back to main branch..." &&
  git checkout main &&
  log "Deleting tmp branch..." &&
  git branch -D tmp-release
}

cancel() {
  log "Some error occurred... cancelling the release process"
  back_to_main
}

release() {
  log "Deleting old branch..."
  git branch -D tmp-release
  log "Checking out to a new tmp-release branch..." &&
  git checkout -b tmp-release &&
  log "Merging with main..." &&
  git merge --no-edit main &&
  log "Unignoring dist folder..." &&
  sed -i '/dist/d' ./.gitignore &&
  log "Deleting the index.original.html..." &&
  echo 'index.original.html' >> ./.gitignore &&
  log "git add..." &&
  git add . &&
  log "commit..." &&
  git commit -m "Edit .gitignore to release" &&
  log "Deleting old release-to-master split branch..." &&
  (git branch -D release-to-master &>/dev/null || true) &&
  log "Subtree split ..." &&
  git subtree split --prefix dist/apps/website/browser/ -b release-to-master &&
  log "Pushing to master..." &&
  git push origin release-to-master:master --force
}

if [ -z "$(git status --porcelain)" ]
then
  (release && back_to_main) || cancel
else
  log "Clean working directory to release"
fi

