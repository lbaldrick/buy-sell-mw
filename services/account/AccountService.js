const Account = require('../../schemas/Account');
const mongoose = require('mongoose');

const insertAccountIntoDb = ({ username, firstName, lastName }) => {
    return new Promise((resolve, reject) => {
        if (username && firstName && lastName) {
            const balance = 0.00;
            const dateOpened = Date.now();
            const accId = new mongoose.mongo.ObjectId();
            Account.create({ accId, username, firstName, lastName, dateOpened, balance }, (error, account) => {
                if (error) {
                    reject(error);
                } else {
                    console.log(account)
                    resolve(account);
                }
            });
        } else {
            reject('User data missing');
        }
    });
};

const getAccount = ({ username }) => {
    return new Promise((resolve, reject) => {
        if (username) {
            Account.findOne({$query: { 'username': username }, $maxTimeMS: 1000}, (error, account) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(account);
                }
            });
        } else {
            reject('Username missing');
        }
    });
};

module.exports.insertAccountIntoDb =  insertAccountIntoDb;
module.exports.getAccount =  getAccount;
