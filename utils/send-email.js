const nodemailer=require('nodemailer')
const path=require('path')
const hbs=require("nodemailer-express-handlebars")


const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"a.rakhha91@gmail.com",
        pass:"wgguyqiyxnfrpvtw"
    }
})


const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
};

transporter.use("compile",hbs(handlebarOptions))



const sendEmail=(req,res)=>{

    const mailOptions={
        from:"a.rakhha91@gmail.com",
        to:"programmersedsp@gmail.com",
        subject:"Test Message-105",
        // text:"Hello, world from MWF class"
        // html:"<b>Hello, world from <i>MWF</i> class <img src='https://th.bing.com/th/id/OIP.AjicYDq3grBh7AdVeA0GdAHaEK?rs=1&pid=ImgDetMain'> </b>",
        template:"email",
        context:{
            name:"Peter",
            message:"lorem ipsum dolor sit amet",
            link:"http://www.google.com"
        }
   
   
    }

    try {
        transporter.sendMail(mailOptions, (err,info)=>{
           
            if (err){
                return res.status(500).json({message:err});
            }

            if(info.messageId){
                return res.status(200).json({message:info.messageId});
            }
            
        })
        
    } catch (error) {
        return res.status(500).json({message:error});
    }

}

module.exports=sendEmail