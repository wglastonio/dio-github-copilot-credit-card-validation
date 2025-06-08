# Credit Card Validation

This project provides a simple JavaScript function to identify the type of a credit card based on its number. The detection is based on common industry rules and patterns, as referenced in `assets/credit-card-rules.png`.

## Function: `getCreditCardType`

The function [`getCreditCardType`](src/index.js) takes a credit card number as input and returns the card type as a string. Supported card types include:

- Visa
- MasterCard
- American Express
- Diners Club
- Discover
- JCB

If the card number does not match any known pattern, the function returns `'Unknown'`.

### Usage

```javascript
const type1 = getCreditCardType('4111111111111111'); // Visa
const type2 = getCreditCardType('5500000000000004'); // MasterCard
const type3 = getCreditCardType('340000000000009');  // American Express
```

## Credits
This project was created by Microsoft Copilot, as part of the GitHub Copilot training offered by DIO, and it was adjusted by Wglastonio.

**Prompt:**
@workspace Based in the file credit-card-rules.png under the folder assets, create a function in javascript in the index.js file to identify the credit card type based on the credit card number was input in the application.