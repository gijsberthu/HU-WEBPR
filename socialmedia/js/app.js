//
// Timeline
//

$(document).ready(function(){
    $(".addMessage").click(function() {
        var input = $("#inputBericht").val();
            if(input.length !== 0) {
                var bericht = "<div class='bericht'><img class='profilepic' src='http://www.judithvandaalen.nl/wp-content/uploads/galleries/post-444/Profielfoto-Portretfotografie-Fotostudio-5.jpg'<div class='omschrijving'><p>GIJSBERT</p>"+input+"</div><div class='waardering'><div class='likes'>0</div><div class=''><button class='removeBericht'>Verwijder bericht</a><button class='addLike'>LIKE!</button></div></div><div class='addComments'><input type='text' class='inputComment' placeholder='Reageer op dit bericht ..'/><button class='addComment'>Reageer op dit bericht</button></div><div class='comments'></div>";
                $("#berichten").append(bericht);
            } else {
                $("#error").text('Het veld is niet ingevuld.');
            }
    });
    $("body").on("click", ".addLike", function(){
        var likes = $(this).parent().siblings(".likes").text();
            likes++;
            $(this).parent().siblings(".likes").text(likes);
    });
    $("body").on("click", ".addComment", function(){
        var input = $(this).siblings(".inputComment").val();
        var inputCommentIsEmpty = $.trim($(this).siblings(".inputComment").val());
        if(inputCommentIsEmpty.length !== 0) {
            var comment = "<div class='comment'><div class='message'>"+input+"</div><div class='commentControl'></div></div>";
            $(this).parent().siblings(".comments").append(comment);
            $(this).siblings(".inputComment").val('');
            $("#error").text('');
        } else {
            $("#error").text('Het veld is niet ingevuld.');
        }
    });             
    $( ".removeBericht" ).click(function() {
        $(this).closest('.bericht').remove();
    });    
});

//
// Registreren
//

function nieuwAccount(){
    $("#nieuwAccount").effect("shake");
    var vn = myForm.elements["vn"].value;
    var an = myForm.elements["an"].value;
    var gb = myForm.elements["gb"].value;
    var mail = myForm.elements["mail"].value;
    var ww = myForm.elements["ww"].value;
    var hww = myForm.elements["hww"].value;
    var gbArray = ["Gijsbert", "Hekman", "Koning", "ErikHekman", "ThijsWaardenburg", "Ronald", "RonaldVanEssen"];
    
    for(var i = 0; i < gbArray.length; i++){
        if (gb == gbArray[i]) {
            gb = "correct"
        };
        if (gb == "correct") {
            document.getElementById('antwoord').innerHTML = "De gebruikersnaam is al in gebruik, kies een nieuwe gebruikersnaam."
        }
    }
        if (vn == "") {
            document.getElementById('antwoord').innerHTML = "U heeft uw  voornaam niet ingevuld"
        }
        if (an == "") {
            document.getElementById('antwoord').innerHTML = "U heeft uw  achternaam niet ingevuld"
        }
        if (gb == "") {
            document.getElementById('antwoord').innerHTML = "U heeft uw  gebruikersnaam niet ingevuld"
        }
        if (ww == "") {
            document.getElementById('antwoord').innerHTML = "U heeft uw  wachtwoord niet ingevuld"
        }
        if (hww == "") {
            document.getElementById('antwoord').innerHTML = "U heeft uw  wachtwoord niet herhaald"
        }
        if (ww === hww) {}  
            else{
                document.getElementById('antwoord').innerHTML = "Uw wachtwoord komt niet overeen"
            }
            if (vn == "Gijsbert" && an == "Legemaat" && gb == "test" && ww == "test" && hww == "test" ) {
                location.href="home.html";
            }
}
$(document).ready(function(){
        //upload image
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#profib').attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }
        $("#imgInp").change(function(){
            readURL(this);
        });
});

//
// Inloggen
//

var i =0;

function inloggen() {

	var gb = myform.elements["gb"].value;
	var ww = myform.elements["ww"].value;
	var gnArray = ["Hekman", "Koning", "ErikHekman", "ThijsWaardenburg", "Ronald", 
	"RonaldVanEssen", "Gijsbert", "gijsbert"]

	for(var j=0; j<gnArray.length; j++){
		if(gb == gnArray[j] && ww == "qwerty"){
		location.href="home.html";
		}	
	}	
	if(gb == ""){
		document.getElementById("bericht").innerHTML = "U heeft uw gebruikersnaam niet ingevuld."
		}
	else if(ww == ""){
		document.getElementById("bericht").innerHTML = "U heeft uw wachtwoord niet ingevuld."
		}
	else{
		document.getElementById("bericht").innerHTML = "Uw gebruikersnaam en/of wachtwoord is niet juist."
		$("div").effect("shake");
		i++;
	}
	if(i>2){
		document.getElementById("bericht").innerHTML = "U heeft 3x een verkeerd gebruikersnaam en/of wachtwoord ingevuld, u moet 3 minuten wachten."
		$("button").hide();
		$("input").prop('disabled', true);
	}
};


//
// Berichten
//
$(document).ready(function(){
    // add chatbericht
    $(".addChatBericht").click(function() {
        var input = $("#inputChatBericht").val();

        var inputChatIsEmpty = $.trim($('#inputChatBericht').val());

        if(inputChatIsEmpty.length !== 0) {
            var chatbericht = "<div class='chatbericht'><div class='omschrijving'><p>Gijsbert: <br>"+input+"</p></div>";
            $("#berichtenvenster").append(chatbericht);
        // input field wordt geleegd
        $("#inputChatBericht").val('');
        $("#error").text('');
    } else {
        $("#error").text('Het veld is niet ingevuld.');
    }
    });
});


//
// Vrienden
//
$(document).ready(function(){

    $(".friend1").click(function(){
        $(".friend4").show();
        $(".friend1").hide();
    });
    $(".vriend2").click(function(){
        $(".friend5").show();
        $(".friend2").hide();
    });
    $(".friend3").click(function(){
        $(".friend6").show();
        $(".friend3").hide();
    });
    $(".friend4").click(function(){
        $(".friend4").hide();
    });
    $(".friend5").click(function(){
        $(".friend5").hide();
    });
    $(".friend6").click(function(){
        $(".friend6").hide();
    });
    $(".friend7").click(function(){
        $(".friend7").hide();
    });
    $(".friend8").click(function(){
        $(".friend8").hide();
    });
    $(".friend9").click(function(){
        $(".friend9").hide();
    });
    $(".friend10").click(function(){
        $(".friend10").hide();
    });
});