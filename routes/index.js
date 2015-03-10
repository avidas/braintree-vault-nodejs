var express = require('express');
var router = express.Router();
var braintree = require('braintree');

var gateway = braintree.connect({
    environment:  braintree.Environment.Sandbox,
    merchantId:   'ffdqc9fyffn7yn2j',
    publicKey:    'qj65nndbnn6qyjkp',
    privateKey:   'a3de3bb7dddf68ed3c33f4eb6d9579ca'
});

router.get('/', function(req, res) {
  gateway.clientToken.generate({}, function (err, response) {
    var token = response.clientToken;
    res.render('index', {token: token});
  });
});

router.post('/process', function(req, res) {
  var nonce = req.body.payment_method_nonce;
  var plan = req.body.plan;

  gateway.customer.create({
    paymentMethodNonce: nonce
  }, function (err, result) {
    if (result.success) {
      var token = result.customer.paymentMethods[0].token;

      gateway.transaction.sale({
        paymentMethodToken: token,
        amount: '1.00',
        recurring: true
      }, function (err, result) {
        res.render('result', {result: result});
      });
    }
  });
});

module.exports = router;