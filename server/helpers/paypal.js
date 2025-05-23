const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox', // or 'live'
  client_id: 'AcRIHHiwW6OugRJ1fhw_rg3vhrfkwasZf5NnBaoPqrC42EIJoruZxP401yMJeJjHthXSOro7dHIAx63N',
  client_secret: 'EI3viBIrUOBDeHLPchQ51gGmf6IcWmzQJRGGfe1xFwMgUICHQCdl9i9v3VYyAL7-qwGTwO6Si-XljKEZ'
});

module.exports = paypal;
