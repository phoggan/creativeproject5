$(document).ready(function() {
    console.log("ready works");

$("#itemSubmit").click(function(e) {
    e.preventDefault();
    var value = $("#itemInput").val();
        console.log(value);
    var myurl = "https://api.guildwars2.com/v2/items/" + value;
    $.ajax({
        url : myurl,
        dataType : "json",
          error: function(xhr, status, error) {
                               var err = JSON.parse(xhr.responseText);
                                                  alert("Oops! You got unlucky! Not every single number has a corresponding item, though most do. Try again with a different number");
                                                             },
        success : function(json) {
            console.log(json);
            var results = "";
            results += '<img src="' + json.icon + '"/>';
            results += "<p>Item Name: " + json.name + "</p>";

            results += "<p>Type: " + json.type + "</p>";
            if (json.details && json.details.type){
            results += "<p>Item Subtype: " + json.details.type + "</p>";}
            if (json.description) {
            results += "<p>Flavor Text: " + json.description + "</p>";}        

            results += "<p>Level Required: " + json.level + "</p>";
            results += "<p>Rarity: " + json.rarity + "</p>";
            
            if (json.restrictions) {
                for (var i=0; i < json.restrictions.length; i++){
            results += "<p>Restricted to: " + json.restrictions + "</p>";}}
            $("#itemResults").html(results);
        }
       /* error: function(result) {
            var results = "<p>Oops! You got unlucky! Not every single number has a corresponding item, though most do. Try again with a different number</p>";
            $("#itemResults").html(results);
               }*/
   /* error: function(xhr, status, error) {
                 var err = JSON.parse(xhr.responseText);
                   alert(err.Message);
           }*/
    });
});









});
