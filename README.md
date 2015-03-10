# Braintree Vault Node Sample

Put a credit card or PayPal account in the Braintree vault for later charges.

The demo shows:

* Vaulting a PayPal or Credit Card Account, sending a nonce to server
* Create a new customer, exchanging nonce for reusable token
* Charge customer using the token

## Technology

This demo uses

* Node 0.10.31 or higher
* The [Express](http://expressjs.com/) web framework
* The [Braintree Node.js SDK](https://developers.braintreepayments.com/javascript+node/sdk/server/overview)

## Running the demo locally

* Run `npm install` to install all dependencies
* Run `npm start` to start the Express app
* Visit `http://127.0.0.1:3000/` in your browser
* Fill in the form using PayPal or a Credit Card:
    * PayPal
        * Email: us-customer@commercefactory.org
        * Password: test1234    
    * Credit Card
        * Number: `4111 1111 1111 1111`
        * CVV: `123`
        * Expiration date: `11/2020`
* Click Pay
* You will receive a message that says "Vault Transaction Successful"

## Useful links

* [The Braintree Node.js SDK](https://developers.braintreepayments.com/javascript+node/sdk/server/overview)
* [Braintree Vault using Web Client and Node SDK](https://developers.braintreepayments.com/javascript+node/guides/paypal/vault)
* [Subscription example using Braintree SDK](https://github.com/commercefactory/017-braintree-subscription-node), which this project borrows from