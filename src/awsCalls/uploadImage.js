import $ from 'jquery'
import s3 from './config.js'

async function uploadImage(file, username){
    if (file) 
    {
      var fileName = file.name;
      console.log("file",file)
      var filePath = username +"/"+ fileName;
      s3.upload({
          Key: filePath,
          Body: file,
          ACL: 'public-read'
          }, await function(err, data) {
          console.log(err,data)
          alert('Successfully Uploaded!');
          }).on('httpUploadProgress', function (progress) {
          var uploaded = parseInt((progress.loaded * 100) / progress.total);
          $("progress").attr('value', uploaded);
        });
   }
}

export default uploadImage