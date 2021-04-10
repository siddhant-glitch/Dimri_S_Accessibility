(() => {

console.log('fired!');
 
let lightBox = document.querySelector(".lightbox"),
	lbClose = lightBox.querySelector("span"),
	lbVideo = lightBox.querySelector("video"),
	icon = document.querySelectorAll(".Container"),
	Images = document.querySelector("#Images"),
	Name = document.querySelector(".name"),
	Bio = document.querySelector(".info");

	const fullscreenButton = document.querySelector('.fullscreen'),
		  play = document.querySelector('.play'),
		  mute = document.querySelector('.mute');





const Info = [
	["Okja",`A young girl risks everything to prevent a powerful, multinational company from kidnapping her best friend - a fascinating beast named Okja.`],
	["avengers",`The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.`],
	["Whiplash",`A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.`],
]
	

function showHideLightbox() {
	lightBox.classList.toggle('show-lightbox');

	if (lbVideo.paused) {
		lbVideo.play();
	} else {
		lbVideo.currentTime = 0;
	    lbVideo.pause();
	}
}


function Banner() {

	Images.style.right = `${this.dataset.offset * 410}px`;

	Name.textContent = `${Info[this.dataset.offset][0]}`;
	Bio.textContent = `${Info[this.dataset.offset][1]}`;

	let targetName = this.className.split(" ")[1]; 
    let targetSource = targetName.charAt(0).toUpperCase() + targetName.slice(1);

    let newVideoSource = `video/${targetSource}.mp4`;

    lbVideo.src = newVideoSource;

	showHideLightbox();

}


function toggleFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    lbVideo.requestFullscreen();
  }
}


function playPause() {

      if (lbVideo.paused == true) {
          lbVideo.play();
      } else {
          lbVideo.pause();
      }
  }

function vidMute() {

        if (lbVideo.muted) {
            lbVideo.muted = false;
        } else {
            lbVideo.muted = true;
        }

       
    }


icon.forEach(icon => icon.addEventListener("click", Banner));
lbClose.addEventListener("click", showHideLightbox);
fullscreenButton.addEventListener("click", toggleFullScreen);
play.addEventListener("click", playPause);
mute.addEventListener("click", vidMute);
lbVideo.addEventListener("ended", showHideLightbox);
})();