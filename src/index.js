require('./index.html');

const Elm = require('./Main');
Elm.embed(Elm.Main, document.getElementById('main'));
