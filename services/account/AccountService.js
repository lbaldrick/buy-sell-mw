const Account = require('../../schemas/Account');
const mongoose = require('mongoose');
const AuthUtil = require('../../utils/AuthUtil');

const insertAccountIntoDb = ({ username, firstName, lastName, password }) => {
    return new Promise((resolve, reject) => {
        if (username && firstName && lastName && password) {
            const balance = 0.00;
            const dateOpened = Date.now();
            const accId = new mongoose.mongo.ObjectId();
            Account.create({ accId, username, firstName, lastName, dateOpened, balance, password }, (error, account) => {
                if (error) {
                    reject(error);
                } else {
                    console.log(account);
                    resolve(account);
                }
            });
        } else {
            reject(`User data missing username:${username} firstName:${firstName} lastName:${lastName}`);
        }
    });
};

const getAccount = ({ username, password }) => {
    return new Promise((resolve, reject) => {
        console.log(`AccountService: getAccount with password ${password} username: ${username}`);
        if (username && password) {
            Account.findOne({$query: { 'username': username }, $maxTimeMS: 1000}, (error, account) => {
                if (error) {
                    reject(error);
                } else if (account && AuthUtil.compare(password, account.password)) {
                    console.log(`AccountService: getAccount successful account found  ${account}`);
                    resolve(account);
                } else {
                    reject(error);
                }
            });
        } else {
            reject('Username or password missing');
        }
    });
};

module.exports.insertAccountIntoDb =  insertAccountIntoDb;
module.exports.getAccount =  getAccount;