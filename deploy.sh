#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist
# sed -i 's/\/static/.\/static/g' index.html

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://tiagopaes.github.io/soccer-standings
git push -f git@github.com:tiagopaes/soccer-standings.git master:gh-pages

cd -
