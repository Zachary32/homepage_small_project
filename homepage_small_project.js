
function red() {
    document.getElementById("background_choice").style.backgroundColor="red";
};
function green() {
    document.getElementById("background_choice").style.backgroundColor="green";
};
function blue() {
    document.getElementById("background_choice").style.backgroundColor="lightblue";
};

function random_color(){
    var hex = "#";
    var number_letter_selector='abcdef01234156789';
    var length_of_numbers_charecters = number_letter_selector.length;
    for(let i = 0; i < 6; i++){
        hex += number_letter_selector.charAt(Math.random() * length_of_numbers_charecters);
    }
    document.getElementById("background_choice").style.backgroundColor=hex;
};
function white() {
    document.getElementById("background_choice").style.backgroundColor="white";
};