import nodemailer from 'nodemailer'
const sendEmail =async({to,subject,text})=>{
    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth :{
            user:'earnmoneyforfuture18@gmail.com',
            pass:'bfyg rdrn ocbz vpio'
        },

    })

    await transporter.sendMail({
        from :'earnmoneyforfuture18@gmail.com',
        to,
        subject,
        text

    })
}

export default sendEmail;