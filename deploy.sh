·!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git checkou -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:ferreiroariel1/FRONT_Arcade_World_PF_Henry:gh-pages

cd -