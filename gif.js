export default class Gif {
  getSynonym(word) {
    return new Promise(function(resolve, reject) {

      let request = new XMLHttpRequest();
      let url = `https://api.datamuse.com/words?rel_jjb=${word}&max=1`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }

      request.open("GET", url, true);
      request.send();

    });
  }

  getGif(synonym) {
    return new Promise(function(resolve, reject) {

      let request = new XMLHttpRequest();
      let url = `http://api.giphy.com/v1/gifs/translate?s=${synonym}&api_key=JPLkcD4dXkSOrenpkAP1lg4gQ2oCsZ5E&weirdness=0`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }

      request.open("GET", url, true);
      request.send();

    });
  }

}

// http://api.giphy.com/v1/gifs/translate?s=${synonym}&api_key=JPLkcD4dXkSOrenpkAP1lg4gQ2oCsZ5E&weirdness=2
//  https://api.datamuse.com/words?rel_syn=test&max=1
