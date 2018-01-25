const User = require('../../schemas/User');


const insertUserToDb = ({ username, email, password, passwordConf, lastName, firstName }) => {
   return new Promise((resolve, reject) => {
      if (username && email && password && passwordConf &&  lastName && firstName ) {
         User.create({username, email, password, passwordConf, lastName, firstName }, (error, user) => {
            if (error) {
                reject(error);
            } else {
                resolve(user);
            }
         });
      } else {
         reject('User data missing');
      }
   });
};

const getUser = ({username, password}) => {
    return new Promise((resolve, reject) => {
        if (username && password) {
            User.findOne({$query: { 'username': username, 'password': password }, $maxTimeMS: 1000}, (error, user) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(user);
                }
            });
        } else {
            reject('Username or Password missing');
        }
    });
};

module.exports.insertUserToDb = insertUserToDb;
module.exports.getUser = getUser;
