const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
admin.initializeApp();

exports.comments = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
        if (req.method === 'POST') {
            admin.database().ref('/comments/' + req.query.id).push({ comment: req.body.comment });
            res.status(200).send('Comment added');
        }
    })

});