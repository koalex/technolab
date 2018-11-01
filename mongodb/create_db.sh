SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"
cd $SCRIPTPATH

adminPwd="dghzt77457gRyjt;paC4MdjYKK5467NZYU"
dbPwd="647hrtT5jcTuryj678xksKEfk2psJ790vsauT"
str="'"

mongod --logpath "../logs/mongodb.log" --dbpath ../volumes/mongodb/data --fork &&

mongo technolab --port 27017 --eval "db.createUser({user: 'technolabAdmin', pwd: $str$adminPwd$str, roles: [ { role: 'userAdminAnyDatabase', db: 'admin' } ]})" &&
mongo technolab --port 27017 --eval "db.createUser({user: 'technolab', pwd: $str$dbPwd$str, roles: [ { role: 'readWrite', db: 'technolab' } ]})" &&

pkill -f mongo
