class AccountDetailsResponseDto {
    constructor(accountDetails, token) {
        this.auth = true;
        this.token = token;
        this.accountDetails = accountDetails;
    }
}

module.exports = AccountDetailsResponseDto;