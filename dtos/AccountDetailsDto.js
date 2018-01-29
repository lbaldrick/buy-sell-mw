class AccountDetailsDto {
    constructor(accId, balance, firstName, lastName, username, email) {
        this.accId = accId;
        this.balance = balance;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
    }
}

module.exports = AccountDetailsDto;