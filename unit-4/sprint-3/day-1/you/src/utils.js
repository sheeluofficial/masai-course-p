
const transporter = require("./configs/mail")


const verificationMail = async (userg) => 
{
await transporter.sendMail(
    {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: userg.email, // list of receivers
        subject: `Welcome to ABC system ${userg.first_name} ${userg.last_name}`, // Subject line
        text: `Hi ${userg.first_name}, Please confirm your email address`, // plain text body
        html: "<h1>Hello haha world?</h1>", // html body
      }
    
)};
const mailToAdmin = async (userg,adming) =>{
     await   transporter.sendMail(  {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: adming, // list of receivers
        subject: `${userg.first_name} ${userg.last_name} has registred with us`, // Subject line
        text: `please welcome ${userg.first_name} ${userg.last_name}`, // plain text body
        html: "<h1>Hello haha world?</h1>", // html body
      });
}    

  module.exports = {verificationMail,mailToAdmin}