    $(document).ready(function(){
      $('.parallax').parallax();


       $.ajax({
      	url:'https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/search?q=Goosinator&type=beer&key=9ec4dd555b05addcdc32bc600a2dd1f2&format=json',
       	method: 'GET'
       }).done(function(response){
      	
       	console.log(response)
       })

      

      
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
