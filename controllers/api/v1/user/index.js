const userRoute = require('express').Router();
const userService = require('../../../../services/user/UserService');
const accountService = require('../../../../services/account/AccountService');
const AccountDetailsDto = require('../../../../dtos/AccountDetailsDto');
const AccountDetailsResponseDto = require('../../../../dtos/AccountDetailsResponseDto');



userRoute.post('/create', (req, res) => {
    userService.insertUserToDb(req.body)
        .then((user) => accountService.insertAccountIntoDb(user))
        .then((account) => {
            const acc = new AccountDetailsResponseDto(new AccountDetailsDto(account.accId, account.balance, account.firstName, account.lastName, account.username));
            res.send(acc);
        })
        .catch((err) => res.send(err));
});

userRoute.post('/login', (req, res) => {
    userService.getUser(req.body)
        .then((user) => {
            if (user) {
                return user;
            } else {
                res.send('User not found');
            }

        })
        .then((user) => accountService.getAccount({ username: user.username}))
        .then((account) => {
            if (user) {
                res.send(new AccountDetailsResponseDto(new AccountDetailsDto(account.accId, account.balance, account.firstName, account.lastName, account.username)));
            } else {
                res.send('User not found');
            }

        })
        .catch((err) => res.send(err));
});



module.exports = userRoute;
