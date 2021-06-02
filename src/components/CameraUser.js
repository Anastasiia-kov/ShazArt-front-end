import React from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
// import {getimageName, getArtistName} from './api'
 
function CameraUser (props) {

function dataURItoBlob(dataURI) {
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
  else
      byteString = unescape(dataURI.split(',')[1]);
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], {type:mimeString});
}
  async function handleTakePhoto (dataUri) {
    let blob =  dataURItoBlob(dataUri)
    var file = new File( [blob], 'canvasImage.jpg', { type: 'image/jpeg' } ); 
    let fdataobj = new FormData();
    fdataobj.append("image_file", file);
  // console.log(file)
  const artist = "Palo Picasso"
    props.artistName(artist)
  // const response = await getimageName(fdataobj)
  // console.log(response.data.image_name)
  // const response2 = await getArtistName(response.data.image_name)
  // console.log(response2)
  // console.log(response2.data[2])
  }

  return (
    <Camera
      onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
      
    />
  );
}
  export default CameraUser