/*
/*Data Type: Number - Stores the value 4 under "number_of_song_titles_listed"
var number_of_song_titles_listed = 4;

/*Data Type: String - Stores the words "bobify classics" under "collection_title"
var collection_title = "bobify classics";

/*Data Type: Array - Stores a list of strings (song titles in this case) under the variable "listed_titles"
var listed_titles = ["Dancing in the Moonlight", "Space Oddity", "House of the Rising Sun", "Sittin on the Dock of the Bay"]

/*Data Type: Object - Creates a dictionary like list that stores keys in correlation to song names, number arrays, and boolean values (in this case)
/*I addressed the the key issue. I wanted to id them by the order they would play if you started the playlist without shuffling it.
var bobify_titles_dictionary = {
    "Q1": "Dancing in the Moonlight",
    "Q2": "Space Oddity",
    "Q3": "House of the Rising Sun",
    "Q4": "(Sittin' On) the Dock of the Bay",
    "queue": ["Dancing in the Moonlight", "Space Oddity", "House of the Rising Sun", "Sittin on the Dock of the Bay"],
    "favorite-order": [2, 1, 3, 4],
    "shuffled": false
}
*/

/*
For loops will work under 3 set parameters: 
you define a constant, then you define what the loop is checking for based on that constant. Then you define an interval inbetween checks.
while true, the loop will execute whats in the curly brackets. then it goes back and does the process again.

EXAMPLE: 
These lines 62-65 will help explain the loop in context.
var appleBasket2 = 9;
var takeSip = "You had something to drink"
applebasket++ essentially means to add 1 to our defined value, we will define our value to be 1.

So this is what our for loop is saying.

If our apple basket with only one apple, has less apples than a basket with 9, add one apple to the basket.
for (appleBasket = 1, appleBasket < appleBasket2; appleBasket++;)

But say its really hot out and we dont have the energy to do it all in one go, we can add actions to our loop.
In this context we want to take a sip of water for every apple we put into our basket. Here's how its done.

for (appleBasket = 1, appleBasket < appleBasket2; appleBasket++;) {
    console.log(takeSip)
}

Everytime our loop repeats based on what our loop is checking for (if appleBasket has less than appleBasket2)
It will complete the action we give it inside the curly braces. This loop prints in the console "You had something to drink"
each time we take another take another apple.
*/

/*
Tells HTML to do "alert(Congratulations....." When youpressedtheuglybutton function is called *WITH AN ARGUMENT*
So if you do <button onclick="youpressedtheuglybutton(bobifyuser)"></button> it will automatically write the alert prompt.

The ingredient/argument in this function is the user of the website. The function knows someone pressed the button but we have
to tell it WHO pressed the button. Then the alert will use the preset below to address the person we said pressed it.

//In this case the data type of the argument can be a string because we only need a word name.
//*/
//function youpressedtheuglybutton(bobifyuser) {
//
//  alert("Congratulations " + bobifyuser + " you pressed the ugly button.");
//
//};

//<div id="bobify-alert-button">
//<button onclick="youpressedtheuglybutton('bob')">ugly button</button>
//</div>