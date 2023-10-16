userNameInput = document.getElementById("user");
passWordInput = document.getElementById("pass");
loginBtn = document.getElementById("loginBtn");
loginContainer = document.getElementById("loginContainer");
adminContainer = document.getElementById("adminContainer");
newVote = document.getElementById("newVote");

const el = document.createElement("div");



document.addEventListener("DOMContentLoaded", (event) => {

    createPoll("Sopiiko ananas pitsaan?");
    createPoll("Onko juusto hyvää?");
    createPoll("Onko Apple parempi kuin Samsung?");

    newVote.onclick = function () {
        createPoll();
        showDeleteButtons(true);
    }

    logout.onclick = function () {
        loginContainer.style.visibility="visible";
            adminContainer.hidden = true;
            showDeleteButtons(false);
    }
    loginBtn.onclick = function () {
        username = userNameInput.value;
        password= passWordInput.value;
    
        if (username == "admin" && password == "123456") {
            loginContainer.style.visibility="hidden";
            adminContainer.hidden = false;
            showDeleteButtons(true);
            
        }
        else {
            
            alert('Väärä käyttäjänimi tai salasana, katso vihje?');
        }
    }
});
function createPoll(otsikko = prompt("Kysymys: ")) {
    var buttonElement3 = document.createElement("button");
    var buttonElement4 = document.createElement("button");
    if (otsikko.length < 1) {
        return;
    }

    var voted = false;
    var alrVoted = false;
    var yesvote = 0;
    var novote = 0;


    var el = document.createElement("div");
    el.classList.add("polls");

    
    var textElement = document.createElement("h4");
    textElement.textContent = otsikko;

   
    el.appendChild(textElement);

   
    var buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("class", "pollButton");


    var voteDiv = document.createElement("div");

    var results = document.createElement("p");

    var buttonElement1 = document.createElement("button");
    buttonElement1.innerHTML = "Joo";
    buttonElement1.setAttribute("class", "pollButton");
    
    var buttonElement2 = document.createElement("button");
    buttonElement2.innerHTML = "Ei";
    buttonElement2.setAttribute("class", "pollButton");
    
    
    buttonElement3.innerHTML = "Poista";
    buttonElement3.setAttribute("class", "pollButton delete");

    buttonElement4.innerHTML = "Katso tilanne";
    buttonElement4.setAttribute("class", "pollButton");
    
    
    buttonsDiv.appendChild(buttonElement1);
    buttonsDiv.appendChild(buttonElement2);
    buttonsDiv.appendChild(buttonElement3);
    buttonsDiv.appendChild(buttonElement4);
    
    buttonElement3.hidden = true;
    el.appendChild(buttonsDiv);
    
   
    document.body.appendChild(el);

    buttonElement4.onclick = function() {
        el.appendChild(results);
        result();
    }
    buttonElement3.onclick = function() {
        if (adminContainer.hidden == false){
            document.body.removeChild(el);
        }
    }
    buttonElement2.onclick = function() {
        if (voted){
            return;
        }
        novote += 1;
        voted = true;
        alrVoted = true;
        result()
        el.appendChild(results);
    }
    buttonElement1.onclick = function() {
        if (voted){
            return;
        }
        voted = true;
        yesvote += 1;
        alrVoted = true;
        result()
        el.appendChild(results);
    }
    function result(){
        results.textContent = "👍" + yesvote + "👎" + novote;
    }

}
function showDeleteButtons(show) {
    var deleteButtons = document.querySelectorAll('.pollButton.delete');
    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].hidden = !show;
    }
}
