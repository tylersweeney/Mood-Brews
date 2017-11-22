    $(document).ready(function(){
      $('.parallax').parallax();


      $.ajax({
        url:'https://maps.googleapis.com/maps/api/geocode/json?address=90504&key=AIzaSyAH9tIVsJmQ37qrU7b3NY3smmAtUmCrgIs',
        method: 'GET'
      }).done(function(zipcode){
        console.log(zipcode)
      })

      $.ajax({
      	url:'https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/search/geo/point?lat=33.8870609&lng=-118.308933&key=9ec4dd555b05addcdc32bc600a2dd1f2&unit=mi&format=json',
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
            fromSources:["local_file_system","webcam","url"],
            accept:["image/*"]
            }).then(function(response) {       
              console.log(response);

              var img = response.filesUploaded[0].url
        
              $.ajax({
              url:'https://api-us.faceplusplus.com/facepp/v3/detect?api_key=ymxM1PfpEkuIniAcXSR6o9tUFCk1Uqo4&api_secret=n6KLZyFDrjsbFycCzxBs-ifyTNuyjZf8&image_url='+img+'&return_attributes=age,gender,smiling,emotion,ethnicity,eyestatus',
              method: 'POST'
              }).done(function(results){
                console.log(results)
              
                var age = results.faces[0].attributes.age.value
                var happy = Math.round(results.faces[0].attributes.emotion.happiness) 
                var anger = Math.round(results.faces[0].attributes.emotion.anger)
                var sad = Math.round(results.faces[0].attributes.emotion.sadness)             
                var div = $('.card-content')
                
                // console.log('happy: '+ happy)
                // console.log('anger: '+ anger)
                // console.log('sad: '+ sad)
                //Testing only
                if (happy > anger){
                  div.append($('<p>').text('Happy Score: '+ happy))
                  div.append($('<img class="images_div" src="'+img+'">'))
                } else if (anger > happy){
                  div.append($('<p>').text('Anger Score: '+ anger))
                  div.append($('<img class="images_div" src="'+img+'">'))
                } else {
                  div.append($('<p>').text('Sad Score: '+ sad))
                  div.append($('<img class="images_div" src="'+img+'">'))
                }

              })
            })
        }
        openPicker();
      });
    });







