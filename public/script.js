


$(document).ready(function(){
  $('.parallax').parallax();
});
let beer= "happy"

$.ajax({
url:"https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/search?q=" + beer + "&type=beer&withLabels&key=9ec4dd555b05addcdc32bc600a2dd1f2&format=json",
method: 'GET'
}).done(function(response){
  let beers = [];
  for(let i=0; i<3; i++) {
    console.log(response.data[i].name)
    console.log(response.data[i].labels.medium)
    console.log("ABV: " + response.data[i].style.abvMax + "%")
    $(".name").append(response.data[i].name)
    $(".abv").append("ABV: " + response.data[i].style.abvMax + "%")
    $(".name").append('<img src="' + response.data[i].labels.medium + '">')
    if(Error){
      console.log("error")
    continue;
  
  };
};
});


  // $('.btn').on('click', function(){
  //   // const client = filestack.init('ACvWqWhqT0uESSK94Rojtz');
  //   // client.pick();
    
  //   var fsClient = filestack.init('ACvWqWhqT0uESSK94Rojtz');
  //   function openPicker() {
  //     fsClient.pick({
  //       fromSources:["local_file_system","url","dropbox"],
  //       accept:["image/*"]
  //     }).then(function(response) {

  // // declare this function to handle response
  // console.log(response);

  // var img = response.filesUploaded[0].url
  // console.log(img)
  let img = "https://res.cloudinary.com/deukkh9yb/image/upload/v1534902246/wfq5hkm8g44qn9kvpx09.jpg"
  
  $.ajax({
    url:'https://api-us.faceplusplus.com/facepp/v3/detect?api_key=gJZ3nUhkeoCAF0PEtxIPqnpKJqdZ2WCI&api_secret=j6_u1B2jNR4K5BGCIyRBrPHhnoYyQ6Vs&image_url='+img+'&return_attributes=age,gender,smiling,emotion,ethnicity,eyestatus,beauty',
    method: 'POST'
  }).done(function(results){
    console.log(results)
  })
  









