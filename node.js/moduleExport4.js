class MyMail {

    constructor(senderMail , SenderPassword)
    {
        this.senderMail = senderMail;
        this.SenderPassword = SenderPassword;
    }

    SendMail (recieveMail , subject , message)
    {
        console.log("Email sent.........")
    }
}

module.exports = {MyMail}