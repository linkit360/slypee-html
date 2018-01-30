#!/bin/sh

while getopts b:e:n: option
do
  case "${option}"
    in
    b) BRANCH=${OPTARG};;
    e) ENV=${OPTARG};;
    n) NAME=${OPTARG};;
  esac
done

TIMESTAMP=$(date +"%s")

cat << EOF > ecosystem.json
{
  "deploy" : {
    "production" : {
      "ssh_options": ["StrictHostKeyChecking=no", "PasswordAuthentication=no", "ForwardAgent=yes"],
      "user" : "slypee",
      "host" : "slypee-direct.snpdev.ru",
      "repo" : "git@git.snpdev.ru:saltpepper/slypee-site-front.git",
      "ref"  : "origin/$BRANCH",
      "path" : "/var/www/$NAME/cs/releases/$TIMESTAMP",
      "post-setup": "cd /var/www/$NAME/cs/releases/$TIMESTAMP/source && git checkout $BRANCH && git fetch --all && git pull origin $BRANCH && source ~/.profile && yarn install && yarn build && pm2 delete /^$NAME/ || true && NODE_PATH=./src NODE_ENV=production PORT=3000 pm2 start /var/www/$NAME/cs/releases/$TIMESTAMP/source/index.js -n $NAME$TIMESTAMP && ln -sfn /var/www/$NAME/cs/releases/$TIMESTAMP/source /var/www/$NAME/cs/current && cd /var/www/$NAME/cs/releases && ls -t | tail -n +4 | xargs rm -rf"
    },
    "debug" : {
      "ssh_options": ["StrictHostKeyChecking=no", "PasswordAuthentication=no", "ForwardAgent=yes"],
      "user" : "slypee",
      "host" : "slypee-direct.snpdev.ru",
      "repo" : "git@git.snpdev.ru:saltpepper/slypee-site-front.git",
      "ref"  : "origin/$BRANCH",
      "path" : "/var/www/$NAME/cs/releases/$TIMESTAMP",
      "post-setup": "cd /var/www/$NAME/cs/releases/$TIMESTAMP/source && git checkout $BRANCH && git fetch --all && git pull origin $BRANCH && source ~/.profile && yarn install && yarn build:debug && pm2 delete /^$NAME/ || true && NODE_PATH=./src NODE_ENV=debug PORT=3000 pm2 start /var/www/$NAME/cs/releases/$TIMESTAMP/source/index.js -n $NAME$TIMESTAMP && ln -sfn /var/www/$NAME/cs/releases/$TIMESTAMP/source /var/www/$NAME/cs/current && cd /var/www/$NAME/cs/releases && ls -t | tail -n +4 | xargs rm -rf"
    }
  }
}
EOF

pm2 deploy ecosystem.json $ENV setup

rm ./ecosystem.json