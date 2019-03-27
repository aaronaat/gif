import Gif from './gif.js';
import * as jquery from 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';

$(document).ready(function() {
  $('#wordGif').click(function() {
    let word = $('#word').val();
    $('#word').val("");

    let gify = new Gif();
    let promise = gify.getSynonym(word);

    let synonym = null;


    promise.then(function(response) {
      let body = JSON.parse(response);
      synonym = `${body[0].word}`;
      $('.showWord').text(synonym);
      }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    }).then(function(){

      let promise2 = gify.getGif(synonym)

      promise2.then(function(response) {
        let body = JSON.parse(response);
        $('.showGif').empty().append(`<img src='${body.data.images.original_still.url}'>`);
        }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });


    });





  });
});
