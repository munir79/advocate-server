// strorage configuaration 

// ************************************* milter file Object Structure ******************************
// {
//   fieldname: 'image',
//   originalname: 'photo.jpg',
//   encoding: '7bit',
//   mimetype: 'image/jpeg',
//   destination: 'uploads/',
//   filename: 'some-random-name.jpg',
//   path: 'uploads/some-random-name.jpg',
//   size: 102394
// }

//  *****************************************milter file Object Structure****************************************

import multer from 'multer';
import path from 'path';
 

//  step 1 ************************************************************
const storage=multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null,'uploads/images');   // here null meaning  no error in call back function 
    },


//    cb হচ্ছে একটি ফাংশন, যেটা Multer কে "সব ঠিক আছে, এখন তুমি ফাইলটা সেভ করো" অথবা "না, সমস্যা আছে, ফাইলটা গ্রহণ করো না" – এই ধরনের নির্দেশ দেয়।


    filename:(req,file,cb)=>{
        const uniqueSuffix=Date.now() + '-' +Math.round(Math.random() * 1e9);
        cb(null,uniqueSuffix+path.extname(file.originalname)); 
    }

//     এখানে cb() কে বলা হচ্ছে:

// ✅ null মানে error নাই,

// ✅ uniqueName মানে এই নাম দিয়ে ফাইল সেভ করো।

// ✨ সংক্ষেপে মনে রাখো:
// Syntax	মানে
// cb(null, value)	সব ঠিক আছে, এই value ব্যবহার করো
// cb(error, false)	সমস্যা আছে, এই ফাইল cancel করো


});


//  step 2 ****************************************************************************************
//    ************************     filter need cause which type of  file  ****************************
const fileFilter=(req,file,cb)=>{
    if(file.mimetype==='image/jpeg' ||     //mimetype হলো একটি string (লেখা), যা ব্রাউজার বা Multer কে বলে ফাইলের টাইপ কী।


        file.mimetype ==='image/png' ||
        file.mimetype ==='image/jpg'
    )
    {
        cb(null ,true)
     
    }
    else{
        cb(new Error ('only jpeg, png and jpg file are allwoed',false));
    }
}

export const imageUploadMiddelware=multer({storage,fileFilter});