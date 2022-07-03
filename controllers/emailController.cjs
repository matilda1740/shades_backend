const mailjet = require('node-mailjet')
	.apiConnect("036cb99c9349eaaebe73abf13bdf7328", "8b9e2baf8408044c57337abe9fade8a5");

exports.greetingsEmail = (mail) => {
    return mailjet
        .post("send", {'version': 'v3.1'})
        .request({
            "Messages":[
                {
                "From": {
                    "Email": "matilda5164@gmail.com",
                    "Name": "Matilda"
                },
                "To": [
                    {
                    "Email": "matilda5164@gmail.com",
                    "Name": "Matilda"
                    }
                ],
                "Subject": "Greetings from Mailjet.",
                "TextPart": "My first Mailjet email",
                "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
                "CustomID": "AppGettingStartedTest"
                }
            ]
        })
        .then((result) => {
        console.log(result.body)
        })
        .catch((err) => {
        console.log(err.statusCode)
        })
}



