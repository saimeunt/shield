#!/bin/bash

echo "#####################"
echo "# RESET APPLICATION #"
echo "#####################"

APPLICATION_NAME=shield

cd ~/meteor
# delete directory if it already exists
rm -rf $APPLICATION_NAME-meteor

# create meteor app
meteor create $APPLICATION_NAME-meteor
cd $APPLICATION_NAME-meteor

# remove auto-generated files
rm *.css *.js *.html

ln -s ~/Dropbox/meteor/$APPLICATION_NAME-src/client client
ln -s ~/Dropbox/meteor/$APPLICATION_NAME-src/lib lib
ln -s ~/Dropbox/meteor/$APPLICATION_NAME-src/private private
ln -s ~/Dropbox/meteor/$APPLICATION_NAME-src/public public
ln -s ~/Dropbox/meteor/$APPLICATION_NAME-src/server server

# remove base packages
meteor remove insecure
meteor remove autopublish

# add app specific packages
# STANDARD
meteor add less
meteor add spiderable
# ATMOSPHERE
meteor add kadira:flow-router
meteor add kadira:blaze-layout
# CUSTOM
meteor add bootstrap-views
meteor add bootstrap-less
meteor add flow-router-helpers
meteor add font-awesome-less
meteor add lightbox

# test launching using meteor
cd ~/meteor/$APPLICATION_NAME-meteor
meteor
