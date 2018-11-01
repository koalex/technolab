SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"
cd $SCRIPTPATH

mongod --logpath "../logs/mongodb.log" --dbpath ../volumes/mongodb/data --port 27017 --config ./mongod.conf
