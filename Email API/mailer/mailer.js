require('dotenv').config()

const Mailer = require('nodemailer').createTransport({
    service:"gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
})

Mailer.verify = async () => {
    try{
        transporter.verify();
        console.log("Server is ready to take our messages");
    } catch (err){
        console.log(`Error while verifying: /n${err}`)
    }
}

Mailer.sendVerificationMail = async (personalInfo,otp = Mailer.generateOTP(personalInfo.email)) => {
    const mail = Mailer.createVerificationMail(personalInfo,otp)
    const res = await Mailer.sendMail(mail)
    return {res:res,otp:otp}
}

Mailer.createVerificationMail = (personalInfo,otp=Mailer.generateOTP(personalInfo.email),attachments=[{filename: "taguig-logo.png",path:"./assets/taguig-city-logo.png",disposition: "inline",type: "image",content_id:"taguig_city_logo"},{filename: "healthcare-logo.png",path: "./assets/health-office-logo.png",disposition: "inline",type: "image",content_id:"healthcare_logo"}]) => {return {
        from:{email:process.env.SMTP_USER},
        to:[personalInfo.email],
        subject:`Email Account Verification`,
        text:"",
        html:   `
                <div style=" 
                font-size: 1.25rem;
                line-height: 1.75rem; ">
                    <div style="display: flex; 
                    justify-content: center;  
                    background: #A50036;
                    background: linear-gradient(90deg,rgba(165, 0, 54, 1) 50%, rgba(193, 0, 7, 1) 100%);
                    padding:2rem;">
                        <img src="cid:healthcare_logo" style="width: 10rem; height: 10rem; "></img>
                        <div style="margin-left: 1rem;
                        margin-top:auto;
                        margin-bottom:auto;
                        margin-right: 1rem;
                        color:#fff1f2">
                            <div style="font-size: 1.5rem;
                            line-height: 2rem; 
                            font-weight: 700; 
                            ">Taguig Health Center</div>
                            <div>Greetings From Our Faculty</div>
                        </div>
                    </div>
                    <div style="margin-top: 1.25rem; 
                    font-size: 2rem;
                    line-height: 2.25rem; 
                    margin-left:auto;
                    margin-right:auto;
                    font-weight: 700;
                    padding:10px;
                    ">
                        <div style="margin:auto;text-align:center">
                            Hello,
                        </div>
                    </div>
                    <div style="margin-top: 1.25rem;
                    margin-bottom: 1.25rem; 
                    margin-left: 5rem;
                    margin-right: 5rem;">
                        There was a request to use your email address to create an account for our website use the verification code below to continue.
                    </div>

                    <div style="padding: 2.5rem;  
                    font-size: 1.5rem;
                    line-height: 2rem; 
                    margin-left:10px;
                    margin-right:10px;
                    color:#fff1f2">
                        <div style="font-size: 4.5rem;
                        line-height: 1;
                        margin:auto;
                        text-align:center;
                        display:flex">
                            <div style="margin:auto;background:#6a7282;padding:2rem;border-radius: 0.375rem;">
                                ${otp}
                            </div>
                        </div>
                    </div>
                    <hr style="margin-top: 1.25rem; margin-bottom: 1.25rem; "></hr>
                    <div style="margin-top: 1.25rem;
                    margin-bottom: 1.25rem; 
                    font-weight: 700; 
                    margin-left:auto;
                    margin-right:auto;">
                        If this was not a request made by you, You can safely ignore this email.
                    </div>
                    <div style="display: flex; 
                    justify-content: center;  
                    background: #A50036;
                    background: linear-gradient(90deg,rgba(165, 0, 54, 1) 50%, rgba(193, 0, 7, 1) 100%);
                    margin-top:10px;
                    padding:2rem;">
                        <img src="cid:taguig_city_logo" style="width: 10rem; height: 10rem;"></img>
                        <div style="margin-left: 1rem;
                        margin-top:auto;
                        margin-bottom:auto;
                        margin-right: 1rem;
                        color:#fff1f2">
                            <div style="font-size: 1.5rem;
                            line-height: 2rem; 
                            font-weight: 700; ">City of Taguig</div>
                            <div>Think Big. Dream Big. Love Taguig</div>
                        </div>
                    </div>
                </div>`,
        attachments:attachments,
        category:"Verification"
    }
}

Mailer.generateOTP = (email,length = 6) => {
    var out = ""
    for(i = 0;i<length;i++){
        out += Math.floor(Math.random()*10)
    }
    // VerifyingAccounts.insertOne({email:email,otp:out})
    return out
}

module.exports = Mailer