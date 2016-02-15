const qauth = require('qauth');
const xtoy = require('x-to-y');

module.exports = function qToY(q, y, lang, ignore) {
    qauth.init().then(creds => xtoy(q, y, 'en', Object.assign(creds, { access_token: creds.access_token_key }), ignore));
};
