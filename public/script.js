$(document).ready(function(){
  $('.parallax').parallax();

let beer= "happy"

$.ajax({
url:"https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/search?q=" + beer + "&type=beer&withLabels&key=9ec4dd555b05addcdc32bc600a2dd1f2&format=json",
method: 'GET'
}).done(function(response){
  for(let i=0; i<5; i++) {
    // $(".name").html('<img src="' + response.data[i].labels.large + '">')
    console.log(response.data[i].name)
    console.log("ABV: " + response.data[i].style.abvMax + "%")
    $(".name").html(response.data[i].name)
    $(".abv").html("ABV: " + response.data[i].style.abvMax + "%")
    
  }
  
  
  
console.log(response)
});


  

  
  $('.btn').on('click', function(){
    // const client = filestack.init('ACvWqWhqT0uESSK94Rojtz');
    // client.pick();
    
    var fsClient = filestack.init('ACvWqWhqT0uESSK94Rojtz');
    function openPicker() {
      fsClient.pick({
        fromSources:["local_file_system","url","dropbox"],
        accept:["image/*"]
      }).then(function(response) {

  // declare this function to handle response
  console.log(response);

  var img = response.filesUploaded[0].url
  console.log(img)
  
  $.ajax({
    url:'https://api-us.faceplusplus.com/facepp/v3/detect?api_key=ymxM1PfpEkuIniAcXSR6o9tUFCk1Uqo4&api_secret=n6KLZyFDrjsbFycCzxBs-ifyTNuyjZf8&image_url='+img+'&return_attributes=age,gender,smiling,emotion,ethnicity,eyestatus,beauty',
    method: 'POST'
  }).done(function(results){
    console.log(results)
  })
});
    }
    openPicker();
  })


});









