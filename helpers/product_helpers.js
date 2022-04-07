const { promiseCallback } = require('express-fileupload/lib/utilities');
const async = require('hbs/lib/async');
var promise=require('promise')
var db=require('../config/connection')

var bcrypt = require('bcrypt')




module.exports={
project_signup:(userdata)=>{
    console.log(userdata)
   return new promise(async(resolve,reject)=>{

       
      db.get().collection('project_data').insertOne(userdata).then((data)=>{
         
          resolve(data)
       
      })
   })},
   takeproduct:()=>{
    return new promise(async(resolve,reject)=>{
        let products =await  db.get().collection('project_data').find().toArray()
       resolve(products)
       
    })
 }


}