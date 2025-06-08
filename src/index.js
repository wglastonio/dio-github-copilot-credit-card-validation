/**
 * Identifies the credit card type based on the card number.
 * Patterns are based on the rules in assets/credit-card-rules.png.
 * @param {string} cardNumber - The credit card number as a string.
 * @returns {string} - The card type or 'Unknown'.
 */
function getCreditCardType(cardNumber) {
    const sanitized = cardNumber.replace(/\D/g, '');

    // Rules based on typical card number prefixes and lengths
    if (/^4\d{12}(\d{3})?(\d{3})?$/.test(sanitized)) {
        return 'Visa';
    }
    if (/^5[1-5]\d{14}$/.test(sanitized) || /^2(2[2-9]\d{12}|[3-6]\d{13}|7[01]\d{12}|720\d{12})$/.test(sanitized)) {
        return 'MasterCard';
    }
    if (/^3[47]\d{13}$/.test(sanitized)) {
        return 'American Express';
    }
    if (/^3(0[0-5]|[68]\d)\d{11}$/.test(sanitized)) {
        return 'Diners Club';
    }
    if (/^6(011|5\d{2})\d{12}$/.test(sanitized)) {
        return 'Discover';
    }
    if (/^(2131|1800|35\d{3})\d{11}$/.test(sanitized)) {
        return 'JCB';
    }
    return 'Unknown';
}

// Example usage:
console.log(getCreditCardType('4111111111111111')); // Visa
console.log(getCreditCardType('5500000000000004')); // MasterCard
console.log(getCreditCardType('340000000000009'));  // American Express