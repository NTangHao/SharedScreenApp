"use strict";
const videoElement = document.getElementById('video');
const button =document.getElementById('button');
const stopbutton = document.getElementById('stop_button button');
const movebutton = document.getElementById('move_button');
const apiUrl ='';
// 3 Step:
//Prompt to select media stream ,  pass to video element, then play
const selectMediaStream = async () => {
  try {
  //   screen capture api
      const captureStream = await navigator.mediaDevices.getDisplayMedia();
      videoElement.srcObject = captureStream;
      videoElement.onloadedmetadata=()=>{
          videoElement.play();
      }
  }catch (e) {
      console.log('ERROR information: ',e);
  }

}
//Make button trigger share screen  when click
button.addEventListener('click',()=>{
   selectMediaStream();
});

function StopShareScreen() {
    let tracks = videoElement.srcObject.getTracks();

    tracks.forEach(track => track.stop());
    videoElement.srcObject = null;
}

//Make button trigger stop when click
stopbutton.addEventListener('click',()=>{
    StopShareScreen();
});



//Make button trigger move picture in picture when click
movebutton.addEventListener('click',async ()=>{

    //Start Picture in picture
    await videoElement.requestPictureInPicture();

});
