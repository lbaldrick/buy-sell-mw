const accountRoute = require('express').Router();
const accountService = require('../../../../services/account/AccountService');
const AccountDetailsDto = require('../../../../dtos/AccountDetailsDto');
const AccountDetailsResponseDto = require('../../../../dtos/AccountDetailsResponseDto');
var AuthUtil = require('../../../../utils/AuthUtil');


accountRoute.post('/create', (req, res) => {
    const password = AuthUtil.encrypt(req.body.password);
    const body = req.body;
    const user = {
        username: body.username,
        firstName: body.firstName,
        lastName: body.lastName,
        password: password,
        email: body.email,
    };

    console.log(JSON.stringify(user));


    accountService.insertAccountIntoDb(user)
        .then((account) => {
            const acc = new AccountDetailsResponseDto(
                new AccountDetailsDto(account.accId, account.balance, account.firstName, account.lastName, account.username),
                AuthUtil.createToken(account.accId, account.username)
            );
            res.status(200).send(acc);
        })
        .catch((err) => res.status(500).send(err));
});

accountRoute.post('/login', (req, res) => {
    accountService.getAccount(req.body)
        .then((account) => {
            if (account) {
                res.status(200).send(new AccountDetailsResponseDto(
                    new AccountDetailsDto(account.accId, account.balance, account.firstName, account.lastName, account.username)
                    , AuthUtil.createToken(account.accId, account.username)
                ));
            } else {
                res.status(404).send('Account not found');
            }

        })
        .catch((err) => res.status(500).send(err));
});





module.exports = accountRoute;