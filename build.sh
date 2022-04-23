#! /bin/bash

VERSION=`node -p "require('./package.json').version"`
docker build . -f Dockerfile -t vesh95/smscatcher:$VERSION
docker tag vesh95/smscatcher:$VERSION vesh95/smscatcher
docker push vesh95/smscatcher:$VERSION
docker push vesh95/smscatcher