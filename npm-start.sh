#!/bin/bash
cd /var/www/html/user
export NODE_OPTIONS=--max_old_space_size=4096
yarn run build
yarn cache clean
cp /var/www/html/.htaccess /var/www/html/user/build
