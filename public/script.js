$( document ).ready(function() {
  console.log( "ready!" );


var widget = uploadcare.Widget('[role=uploadcare-uploader]');

widget.onUploadComplete(function (fileInfo) {

  console.log('File name: ', fileInfo.name);
  console.log('CDN URL: ', fileInfo.cdnUrl);
var profile = (fileInfo.cdnUrl);  
$(".profile").append('<img src="' + fileInfo.cdnUrl + '">');
  
  // and so on...







$.ajax({
  url:'https://api-us.faceplusplus.com/facepp/v3/detect?api_key=gJZ3nUhkeoCAF0PEtxIPqnpKJqdZ2WCI&api_secret=j6_u1B2jNR4K5BGCIyRBrPHhnoYyQ6Vs&image_url='+profile+'&return_landmark=1&return_attributes=age,gender,smiling,emotion,ethnicity,eyestatus,beauty',
  method: 'POST'
}).done(function(results){
  console.log(results)
})
});
});

// let beer= "happy"

// $.ajax({
// url:"https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/search?q=" + beer + "&type=beer&withLabels&key=9ec4dd555b05addcdc32bc600a2dd1f2&format=json",
// method: 'GET'
// }).done(function(response){
//   let beers = [];
//   for(let i=0; i<3; i++) {
//     console.log(response.data[i].name)
//     console.log(response.data[i].labels.medium)
//     console.log("ABV: " + response.data[i].style.abvMax + "%")
//     $(".name").append(response.data[i].name)
//     $(".abv").append("ABV: " + response.data[i].style.abvMax + "%")
//     $(".image").append('<img src="' + response.data[i].labels.medium + '">')
// };
// });

// $.ajax

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
  

  //   url: "https://cors-anywhere.herokuapp.com/https://738618318492637:P31Qlc2xmqJmPu6d8hDZsWVcllA@api.cloudinary.com/v1_1/deukkh9yb/resources/image",
//   method: "GET"
// }).done(function(response){
//   console.log(response.resources.image.upload)









