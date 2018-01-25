class AccountDetailsDto {
    constructor(accId, balance, firstName, lastName, username) {
        this.accId = accId;
        this.balance = balance;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
    }
}

module.exports = AccountDetailsDto;