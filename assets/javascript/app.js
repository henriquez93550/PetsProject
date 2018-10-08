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
                var animalDiv = $("<div>").addClass("row m-4")
                var column1 = $("<div>").addClass("col-lg-6")
                var column2 = $("<div>").addClass("col-lg-6")
                var image = $("<img>")
                image.css({ "display": "block", "width": "80%", "height": "400px" })
                image.attr("src", source)



                // variable created to hold info
                var info1 = $("<div>");
                var info2 = $("<div>");
                var info3 = $("<div>");
                var info4 = $("<div>").addClass('item-description');
                var showMoreButton = $("<a onClick='javascript:void(0)'>").addClass('showMore btn btn-link btn-primary').text('show more >');
                //var link= $('<a href="response.petfinder.pets.pet[i].description.$t"></a>');

                info1.text("SEX:   " + response.petfinder.pets.pet[i].sex.$t)
                info2.text("AGE:   " + response.petfinder.pets.pet[i].age.$t)
                info3.text("CONTACT INFO: EMAIL  " + response.petfinder.pets.pet[i].contact.email.$t)
                info4.text("DESCRIPTION:   " + response.petfinder.pets.pet[i].description.$t)



                column1.append(image)
                column2.append(info1, info2, info3, info4, showMoreButton)
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