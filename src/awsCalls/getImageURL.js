function getImageURL(username, filename){
    return "https://beneimages.s3.us-east-2.amazonaws.com/" + username + "/" + filename
}

export default getImageURL
