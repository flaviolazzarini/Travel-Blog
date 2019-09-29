const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
admin.initializeApp();

exports.comments = functions.https.onRequest((req, res) => {
    // if (req.method === 'PUT') {
    //     return res.status(403).send('Forbidden!');
    // }

    return cors(req, res, () => {
        if (req.method === 'POST') {
            admin.database().ref('/comments/' + req.query.id).push({ comment: req.body.comment });
            res.status(200).send('Comment added');
        }

        else if (req.method === 'GET') {
            let comment;
            admin.database().ref('/comments/' + req.query.id).on('value', (data) => { comment = data.val() }, (err) => { console.log(err) });
            res.status(200).send(comment);
        }

        else {
            res.status(403).send("Not allowed");
        }
    })

});