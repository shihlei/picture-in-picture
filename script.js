const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try{
        // Screen capture api. Wait user to select a media
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            //to play video
            videoElement.play();
        }
    } catch(error){
        // Catch errors here
        console.log('Whoop, error here: ' + error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;

    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    
    // Reset Button
    button.disabled = false;
});


// On Load
selectMediaStream();