var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};



function marqueeGen(content) {
    return '<marquee class="song_scroll" width="250px" direction="left" scrollamount="3" behavior="scroll">' + content + '</marquee>';
}
function randomSongPicker() {
  var final = "";
  getJSON("https://raw.githubusercontent.com/DARIOXdotclub/random_song_picker/master/namelinks.json", function(err,data_) {
    getJSON("https://raw.githubusercontent.com/DARIOXdotclub/random_song_picker/master/file.json", function(err,data) {
        var songNames = data_.responseJSON;
        var songURLs = data.responseJSON;

        let randomInt = Math.floor(Math.random() * (songURLs.length - 1));

        let marquee = marqueeGen(songNames[randomInt]);

        let songChoice = "https://storage.googleapis.com/cdn.jyles.club/pageaudio/" + songURLs[randomInt];
        console.log("song url;\n" + songChoice);
        let iframe = '<iframe frameborder=0 style="position:absolute;top:0;left:0;" src="' + songChoice + '" allow="autoplay" height="0" id="song_iframe"></iframe>';

        final = marquee + iframe;
    })
  })
  return final;

}
