const Uppy = require('@uppy/core')
const Dashboard = require('@uppy/dashboard')
const GoogleDrive = require('@uppy/google-drive')
const Dropbox = require('@uppy/dropbox')
const Instagram = require('@uppy/instagram')
const Webcam = require('@uppy/webcam')
const Tus = require('@uppy/tus')

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

const uppy = Uppy({
  debug: true,
  autoProceed: false,
  restrictions: {
    maxFileSize: 1000000,
    maxNumberOfFiles: 3,
    minNumberOfFiles: 2,
    allowedFileTypes: ['image/*', 'video/*']
  }
})
.use(Dashboard, {
  trigger: '.UppyModalOpenerBtn',
  inline: true,
  target: '.DashboardContainer',
  replaceTargetContent: true,
  showProgressDetails: true,
  note: 'Images and video only, 2–3 files, up to 1 MB',
  height: 470,
  metaFields: [
    { id: 'name', name: 'Name', placeholder: 'file name' },
    { id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }
  ],
  browserBackButtonClose: true
})
.use(GoogleDrive, { target: Dashboard, serverUrl: 'https://server.uppy.io' })
.use(Dropbox, { target: Dashboard, serverUrl: 'https://server.uppy.io' })
.use(Instagram, { target: Dashboard, serverUrl: 'https://server.uppy.io' })
.use(Webcam, { target: Dashboard })
.use(Tus, { endpoint: 'https://master.tus.io/files/' })

uppy.on('complete', result => {
  console.log('successful files:', result.successful)
  console.log('failed files:', result.failed)
})  

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
  
//   $.ajax({
//     url:'https://api-us.faceplusplus.com/facepp/v3/detect?api_key=ymxM1PfpEkuIniAcXSR6o9tUFCk1Uqo4&api_secret=n6KLZyFDrjsbFycCzxBs-ifyTNuyjZf8&image_url='+img+'&return_attributes=age,gender,smiling,emotion,ethnicity,eyestatus,beauty',
//     method: 'POST'
//   }).done(function(results){
//     console.log(results)
//   })
// });
    
//     openPicker();
//   })


// });









