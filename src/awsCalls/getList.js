import s3 from './config.js'    
function getImagesByUser(username){
    var params = {
        Bucket: "beneimages",
        Prefix: username + "/"
       };
       var results = s3.listObjectsV2(params, function(err, data) {
         if (err) console.log(err, err.stack); // an error occurred
         else    {
             console.log("data is returned",data.httpResponse);
            // return data;

         }    
    })  
    console.log("results is returned",results.httpResponse);
    return results
}
export default getImagesByUser