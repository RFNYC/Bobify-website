//-----------------------------------------------------------------------------------------------------------------------------

//<div class="individual-song-container-styling">
//    <div class="individual-title-attributes">Dancing in the Moonlight</div>
//    <div><a class="artist-hyperlinks" href="https://open.spotify.com/artist/5FHwr1FymaS5kutIEK6e2y?go=1&sp_cid=7f61a2ef8dea5d657a80a610a877fe1a&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=33edfca4e53c44a9">King Harvest</a></div>
//    <div><img class="song-image-attributes" src="https://upload.wikimedia.org/wikipedia/en/7/78/Dancinginthemoonlightboffalongo.jpg" /></div>
//    <div>Duration: 2:52 - 172s</div>
//</div>

// NOTE: Variables Prefixed HTML refer to content shown to the user. Variables Prefixed DATA are calling information from objects


// I was going to use this for the search query but I got a bit lazy

// var wordProvided = "div"
// function firstThree(wordProvided) {
//     var stringVersion = String(wordProvided)
//     console.log(stringVersion)
//     var firstThreeLettersOfTheWord = stringVersion.slice(0,3)
//     console.log(firstThreeLettersOfTheWord)
// }
// firstThree(wordProvided)

// This variable contains the entire body
var HTMLBobifySongListing = document.getElementById("promoted-songs-list")

//This variable creates a div which will act as the container all of the content found in the first row.
var HTMLSongRow1 = document.getElementById("songRow1")

// Grabs the search button labeled confirm search in our HTML and stores it inside of this variable
// Storing it inside this variable allows us to manipulate the button using javaScript functions.
var HTMLConfirmSearchButton = document.getElementById("ConfirmSearch")
// Grabs Clear Search button and stores it into variable
var HTMLClearSearchButton = document.getElementById("Clear-Search");
// This grabs the searchbar and stores into a variable for later use.
var HTMLQueryContainer = document.getElementById("SearchQueryContainer")

// This code tells the button to run the PullSearchQuery function defined below on-click.
HTMLConfirmSearchButton.addEventListener("click", PullSearchQuery);
// This code tells the button to run the CheckAndReset function defined below.
HTMLClearSearchButton.addEventListener("click", CheckAndReset);
// This code tells tells the search bar to look out for when the user presses a key within the searchbar
// After this happens the function will find out what button was pressed, and check if it was the enter key.
HTMLQueryContainer.addEventListener("keypress",CheckIfEnterButtonPressed)

//This function starts by creating a variable and sets it equal the search box "QueryContainer" on the page
//After that it creates another variable to grab the search term within the search box. It then prints the content.
function PullSearchQuery() {
    var TotallyUniqueSearchTerm = HTMLQueryContainer.innerHTML

    //Gets the list of all elements within ALL divs.
    var DATASongInformationByClassName = document.getElementsByClassName("individual-song-container-styling")
    //This for loop runs through each of the divs on the page, if the search term matches a title it will be shown.
    //Otherwise if the title does not match the searchterm it will not be shown.
    for (CheckedDivs = 0; CheckedDivs <= DATABobifySongListing.length; CheckedDivs++) {
        //Gets the song div for this iteration of the loop.
        var HTMLDivPositionCurrentlyBeingChecked = DATASongInformationByClassName[CheckedDivs];
        //Gets the elements array for the title div.
        var DATAElementsCurrentlyBeingChecked = HTMLDivPositionCurrentlyBeingChecked.getElementsByClassName("individual-title-attributes");
        //Saves the title information embedded in the html for this iteration for comparison.
        var HTMLDivTitle = DATAElementsCurrentlyBeingChecked[0].innerHTML;
        
        //Compares this iterations title div content to the search term, and filters it based of it is equal or not.
        //To make the search a little more lenient all search results and titles are formated back to lowercase to account for capitalization.
        //If they match, the div is shown as is, otherwise the div is hidden.
        if (HTMLDivTitle.toLowerCase() === TotallyUniqueSearchTerm.toLowerCase()) {
            HTMLDivPositionCurrentlyBeingChecked.style.display = "block"
        }else{
            HTMLDivPositionCurrentlyBeingChecked.style.display = "none"
        }
    }
}


//The purpose of this function is to make all song divs not shown reappear. -- Mostly Recycled code.
function CheckAndReset() {

    //grabs the search container by its html id.
    var QueryContainer = document.getElementById("SearchQueryContainer")
    //saves the contents of the search container into a javascript variable for further use.
    var TotallyUniqueSearchTerm = HTMLQueryContainer.innerHTML
    //gets the list of elements for each div on the page.
    var DATASongInformationByClassName = document.getElementsByClassName("individual-song-container-styling")
    //This for loop
    for (CheckedDivs = 0; CheckedDivs <= DATABobifySongListing.length; CheckedDivs++){
        //Gets the song div for this iteration of the loop.
        var HTMLDivPositionCurrentlyBeingChecked = DATASongInformationByClassName[CheckedDivs];
        //Grabs the list of elements of the title of the div of the current iteration.
        var DATAElementsCurrentlyBeingChecked = HTMLDivPositionCurrentlyBeingChecked.getElementsByClassName("individual-title-attributes");
        //Selects and then saves the title information element out of the array of elements in the variable for this iteration for comparison.
        var HTMLDivTitle = DATAElementsCurrentlyBeingChecked[0].innerHTML;

        //Checks if the contents of the search box matches any of the divs on the page.
        //If the contents of the search box does not match the title of the song, show that song.
        //Rinse and Repeat.
        if (TotallyUniqueSearchTerm.toLowerCase() != HTMLDivTitle){
            HTMLDivPositionCurrentlyBeingChecked.style.display = "block"
            HTMLQueryContainer.innerHTML = "What do you want to listen to?"
        }
    }
}

function CheckIfEnterButtonPressed(event){
    var keypressed = event.key;
    if (keypressed == "Enter") {
        PullSearchQuery()
    }
}

/*
  If the we're counting songs starting from zero, and the length of the playlist is greater than what we counted, add one to our count.
  Each time we add one to our count, print out the playlist entry correlating to what number we're on, Then repeat.
*/

for (bobifySongsCounted = 0; bobifySongsCounted <= DATABobifySongListing.length; bobifySongsCounted++) {
    
    //This variable will act as our database, pulling information from our source object.
    var DATASongInformation = DATABobifySongListing[bobifySongsCounted]

    //Variable that creates the div which contains each songs information
    var HTMLlistedSongContainer = document.createElement('div');
    HTMLlistedSongContainer.classList.add("individual-song-container-styling")

    //Creates variable to hold title div.
    //Then sets the inner content of the div to be equal be the information linked to key A.
    //After the div is filled with content it is added to the encompassing div containing the entire body.
    //Further Information about keys located in "bobifySongArray.js"
    var HTMLSongTitleDiv = document.createElement('div');
    HTMLSongTitleDiv.classList.add("individual-title-attributes") 
    HTMLSongTitleDiv.innerHTML = DATASongInformation["CollectionKeyA"]
    HTMLlistedSongContainer.appendChild(HTMLSongTitleDiv)

    //Creates a div to hold the artists' name. Then creates a clickable attribute <a></a>.
    //Using the href property we set the address of the <a> tag to be the same as the information linked to key B.
    //After the address is set we fill the contents of the tag to be the same as the information linked to key E.
    //So "keyE" ---> keyB when clicked.
    //Once this is complete the <a> tag is added to the div meant to hold the artist name.
    //Then the artist name div is added to the encompassing div containing the entire body.
    var HTMLArtistHyperLinkDiv = document.createElement('div');
    var HTMLArtistClickable = document.createElement("a"); HTMLArtistClickable.href = DATASongInformation["CollectionKeyB"]
    HTMLArtistClickable.innerHTML = DATASongInformation["CollectionKeyE"]
    HTMLArtistClickable.classList.add("artist-hyperlinks")
    HTMLArtistHyperLinkDiv.appendChild(HTMLArtistClickable)
    HTMLlistedSongContainer.appendChild(HTMLArtistHyperLinkDiv)

    //Creates a div to hold the image. Then creates img element and stores it within HTMLCoverImage.
    //With HTMLCoverImage acting as <img></img> we use the src property to put content inside the tag.
    //The source of the image is set be the information linked to key C.
    //After the img is filled with content it is added to the div meant to hold the image.
    //After the div is filled with content it is added to the encompassing div containing the entire body.
    var HTMLSongImageDiv = document.createElement('div');
    var HTMLCoverImage = document.createElement("img"); HTMLCoverImage.src = DATASongInformation["CollectionKeyC"]
    HTMLCoverImage.classList.add("song-image-attributes") 
    HTMLSongImageDiv.appendChild(HTMLCoverImage)
    HTMLlistedSongContainer.appendChild(HTMLSongImageDiv)

    //Creates div to hold text regarding the duration of the song. Then adds it to the div containing that songs info.
    var HTMLSongDurationDiv = document.createElement('div');
    HTMLSongDurationDiv.innerHTML = DATASongInformation["CollectionKeyD"]
    HTMLlistedSongContainer.appendChild(HTMLSongDurationDiv)

    //Goes back to the div containing the title and tells them to look out for when the mouse hovers over it or leaves.
    HTMLSongTitleDiv.addEventListener("mouseenter", mousetouched,)
    HTMLSongTitleDiv.addEventListener("mouseleave",mouseleft,)

    //Adds each song to the first song row after its created.
    HTMLSongRow1.appendChild(HTMLlistedSongContainer)
}


//These functions essentially tells the computer to take note of what div element activated the function.
//With this information we're able to save the div that activated the function as a variable to be manipulated later.
//This function identifies whether or not the div that activated the function was a title div by checking if it contains the defined html class
//After it knows its a title div a class is added that has an animation embedded into it, changing the color of the title.
//If for any reason the previous class animation is still present it is removed before another is added.

function mousetouched(event) {
    console.log("mousetouched")
    var HTMLTargetDiv = event.relatedTarget
    var HTMLTargetTitle = HTMLTargetDiv.firstChild
    if (HTMLTargetTitle.classList.contains("individual-title-attributes")) {
        console.log(HTMLTargetTitle)
        HTMLTargetTitle.classList.remove("TouchedElementReturn")
        HTMLTargetTitle.classList.add("TouchedElementHighlight")
    }
}
function mouseleft(event) {
    console.log("mouseleft")
    var HTMLTargetDiv = event.relatedTarget
    var HTMLTargetTitle = HTMLTargetDiv.firstChild
    if (HTMLTargetTitle.classList.contains("individual-title-attributes")) {
        console.log(HTMLTargetTitle)
        HTMLTargetTitle.classList.remove("TouchedElementHighlight")
        HTMLTargetTitle.classList.add("TouchedElementReturn")
    }
}


 //Adds the row of content to the overall html body.
 HTMLBobifySongListing.appendChild(HTMLSongRow1)
