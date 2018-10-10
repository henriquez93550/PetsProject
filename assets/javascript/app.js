

$("#submit").on("click", function (event) {
    var animalName = $("#animal_name").val().trim()
    var sex = $("#animal_sex").val().trim()
    var zipcode = $("#zipcode").val().trim()
    var age = $("#animal_age").val().trim()
    $(this).addClass("btn-danger")  // change the color of the submit button
    event.preventDefault();
    animalName;

    

    var url = 'https://api.petfinder.com/pet.find';

    // Within $.ajax{...} is where we fill out our query 
    $.ajax({
        url: url,
        type: "GET",
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            key: "3f6c4f479ba1c18027badceade662e2c",
            animal: animalName,
            sex: sex,
            age: age,
            count: 10,
            'location': zipcode,
            output: 'basic',
            format: 'json',
        }
    }).
        // Here is where we handle the response we got back from Petfinder
        done(function (response) {
            console.log(response)
            console.log(source)

            // for loop to dymaically display info
            for (var i = 0; i < 10; i++) {
                var source = response.petfinder.pets.pet[i].media.photos.photo[2].$t
                var animalDiv = $("<div>").addClass("row ")
                var column1 = $("<div>").addClass("col-lg-6")
                var column2 = $("<div>").addClass("col-lg-6")
                var image = $("<img>")
                image.css({ "display": "block", "width": "80%", "height": "400px" })
                image.attr("src", source)



                // variable created to hold info
                var info1 = $("<div>");
                var info2 = $("<div>");
                var info3 = $("<div>");
                var info31 =$("<div>");
                var info4= $("<div>");
                var info5 = $("<div>").addClass('item-description');
                var showMoreButton = $("<a onClick='javascript:void(0)'>").addClass('showMore btn btn-link btn-primary').text('show more >');
                //var link= $('<a href="response.petfinder.pets.pet[i].description.$t"></a>');

                info1.text("SEX:   " + response.petfinder.pets.pet[i].sex.$t)
                info2.text("AGE:   " + response.petfinder.pets.pet[i].age.$t)
                 info3.text("BREED:   " + response.petfinder.pets.pet[i].breeds.breed.$t) 
            //    info31.text("BREED:   " + response.petfinder.pets.pet[i].breeds.breed.$t)
               info4.text("CONTACT INFO: EMAIL  " + response.petfinder.pets.pet[i].contact.email.$t)
                info5.text("DESCRIPTION:   " + response.petfinder.pets.pet[i].description.$t)

               
                
                


                column1.append(image)
                column2.append(info1, info2,info3, info4,info5, showMoreButton)
                animalDiv.append(column1, column2)
                $("#name").append(animalDiv);


            }

            


        })
})

// reset button to empty out elements to default state
$("#reset").on("click", function (event) {
    $(".container input").val("");
    $(".container option").text(selected);
    $("#name").empty();
    event.preventDefault();
});

$(document).on("click", ".showMore", function (event) {

    event.preventDefault();
    if ($(this).text() === 'show more >') {

        // hide description
        $(this).prev('.item-description').addClass('item-description-show-all');
        $(this).text('< hide');
    } else {
        // show description
        $(this).prev('.item-description').removeClass('item-description-show-all');
        $(this).text('show more >');

    }
});

// On click button to do further search on any word and it links to wikipedia
$(".wikisearch").on("click", function(){
      console.log("click me")
      var search= $("#searchinput").val().trim();
       console.log(search)
      var url = "https://en.wikipedia.org/w/api.php";
      $.ajax({
    
          url: url,
          type: "GET",
          dataType: "jsonp",
          data:{
            action:'opensearch',
            search: search,
            format: 'json',
            limit:10,
            namespace:0
          }
            
          
          
        }).done(function(response){
            console.log(response)
            var linktext= response["3"]["0"]

            var click =$("<span>").text("click > ").css("color","red")
          
                console.log(linktext)
            //  link.attr("href",response["3"]["0"])
           var animalLink = $('<a>').attr('href', linktext).text( linktext).attr("target","_blank").css("color","white");
           console.log(response["3"]["0"])
        //    $(".wikisearch")$('<a>').attr('href',animalLink)
           $("#searchResults").append(click,animalLink);
        //    $("#searchResults").text(animalLink);
    
    
        })
    })

    // on click to clear search word results
    $(".clear").on("click",function(){
        $("#searchResults").empty();
        $("#searchinput").val("");
    })