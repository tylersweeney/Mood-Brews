$(document).ready(function () {
  console.log("ready!");

  //Upload care widget code, needed for image upload window
  var widget = uploadcare.Widget('[role=uploadcare-uploader]');
  widget.onUploadComplete(function (fileInfo) {
    console.log('File name: ', fileInfo.name);
    console.log('CDN URL: ', fileInfo.cdnUrl);
    var profile = (fileInfo.cdnUrl);
    $(".profile").append('<img class="pic" src=' + fileInfo.cdnUrl + '>');

    //Facial recognition API POST call
    $.ajax({
      url: 'https://api-us.faceplusplus.com/facepp/v3/detect?api_key=gJZ3nUhkeoCAF0PEtxIPqnpKJqdZ2WCI&api_secret=j6_u1B2jNR4K5BGCIyRBrPHhnoYyQ6Vs&image_url=' + profile + '&return_attributes=age,gender,emotion',
      method: 'POST'
    }).done(function (response) {
      //Variable for BreweryDB search
      var beer = "";
      var beerChoice= "";
      //Assign facial recognition responses to variable
      var detect = (response.faces[0].attributes.emotion);
      var happiness = (response.faces[0].attributes.emotion.happiness);
      var sadness = (response.faces[0].attributes.emotion.sadness);
      var disgust = (response.faces[0].attributes.emotion.disgust);
      var anger = (response.faces[0].attributes.emotion.anger);
      var surprise = (response.faces[0].attributes.emotion.surprise);
      console.log(detect)
      console.log(response);
      //JQuery append facial recognition to html
      $(".happiness").append("Happiness: " + happiness)
      $(".sadness").append("Sadness: " + sadness)
      $(".disgust").append("Disgust: " + disgust)
      $(".anger").append("Anger: " + anger)
      $(".surprise").append("Surprise: " + surprise)
      //condtional statement to determine strongest emotion from facial recogntion API
      if (happiness > 25) {
        var beer = "happy"
        var beerChoice = Math.floor(Math.random() * 50) + 1
        console.log(beerChoice);
        console.log("search is: " + beer);
      } else if (sadness > 25) {
        var beer = "cheer"
        var beerChoice = Math.floor(Math.random() * 11) + 1
        console.log(beerChoice);
        console.log("search is: " + beer);
      } else if (disgust > 25) {
        var beer = "weird"
        var beerChoice = Math.floor(Math.random() * 17) + 1
        console.log(beerChoice);
        console.log("search is: " + beer);
      } else if (anger > 25) {
        var beer = "angry"
        var beerChoice = Math.floor(Math.random() * 50) + 1
        console.log(beerChoice);
        console.log("search is: " + beer);
      } else if (surprise > 25) {
        var beer = "shock"
        var beerChoice = Math.floor(Math.random() * 50) + 1
        console.log(beerChoice);
        console.log("search is: " + beer);
      } else {
        var beer = "robot"
        var beerChoice = Math.floor(Math.random() * 50) + 1
        console.log(beerChoice);
        console.log("What is Emotion?");
      }

      //BreweryDB API AJAX GET call
      $.ajax({
        url: "https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/search?q=" + beer + "&type=beer&key=9ec4dd555b05addcdc32bc600a2dd1f2&format=json",
        method: 'GET'
      }).done(function (response) {
        console.log(response.data[beerChoice].name)
        // console.log(response.data[i].labels.medium)
        console.log("ABV: " + response.data[beerChoice].style.abvMax + "%")
        $(".name").append(response.data[beerChoice].name)
        $(".abv").append("ABV: " + response.data[beerChoice].style.abvMax + "%")
        // $(".image").append('<img src="' + response.data[i].labels.medium + '">')
        console.log("random number is: " + beerChoice)
      });
    });
  });
});