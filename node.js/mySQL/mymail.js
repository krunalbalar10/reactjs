var nodemailer = require('nodemailer');
class MyMail {
    constructor() {
        this.sender = 'bholubalar41@gmail.com';
        this.password = 'etrr davh mudm wbzh';
        this.MailSender = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: this.sender,
                pass: this.password,
            },
        });
        this.MailSender.verify().then(console.log).catch(console.error);
    }
    SendMail(ReceiverEmail, Subject, Message) {
        this.MailSender.sendMail({
            from: "Your Name" + `<${this.sender}>`, // sender address
            to: ReceiverEmail, // list of receivers
            subject: Subject, // Subject line
            html: Message, // html body
        }).then(info => { console.log({ info }); }).catch(console.error);
        console.log("email sent......");
    }
}
module.exports = MyMail;