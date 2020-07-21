import getImageURL from "./getImageURL"

function getImageListURL(username, filenameList){
    var listlength = filenameList.length;
    var urlList = [];

    for (var i = 0; i < listlength; i++){
        urlList.push(getImageURL(username,filenameList[i]))
    }

    return urlList
    }

export default getImageListURL
