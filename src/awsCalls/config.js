import AWS from 'aws-sdk'

var bucketName = "beneimages";
var bucketRegion = "us-east-2";
var IdentityPoolId = "us-east-2:f1c60869-91d6-4240-a85f-a5669d0e9a1c";

 AWS.config.update({
                region: bucketRegion,
                credentials: new AWS.CognitoIdentityCredentials({
                    IdentityPoolId: IdentityPoolId
                })
            });

            var s3 = new AWS.S3({
                apiVersion: '2006-03-01',
                params: {Bucket: bucketName}
        });

export default s3


