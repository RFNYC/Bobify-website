/*
READ:
Inside this file is an array containing the full list of songs shown on the page along with corresponding data for each one.
To create less work, each object uses the same pattern, making the list easily expandable and intuitive to read (if you check this comment)

OBJECT NAMES:
The name of the object corresponds to its order on the page.
For example "BobifyClassic1" = {...} will be the first on the list.

OBJECT KEYS:
The keys within each object are not named in accordance to the song, they are instead sorted by what data the key is assigned to collect.
This is done so that you can easily recognize what a piece of data is supposed to be regardless of the value, as long as the reader understands
the key codes below.

- CollectionKeyA: TITLE
- CollectionKeyB: ARTIST-HYPERLINK
- CollectionKeyC: IMAGE-URL
- CollectionKeyD: SONG-DURATION
- CollectionKeyE: ARTIST-NAME

Remembering by letter is helpful.
*/

var DATABobifySongListing = [

    BobifyClassic1 = {
        CollectionKeyA: "Dancing in the Moonlight",
        CollectionKeyB: "https://open.spotify.com/artist/5FHwr1FymaS5kutIEK6e2y",
        CollectionKeyC: "https://upload.wikimedia.org/wikipedia/en/7/78/Dancinginthemoonlightboffalongo.jpg",
        CollectionKeyD: "Duration: 2:52",
        CollectionKeyE: "King Harvest"
    }
    ,
    BobifyClassic2 = {
        CollectionKeyA: "Space Oddity",
        CollectionKeyB: "https://open.spotify.com/artist/0oSGxfWSnnOXhD2fKuz2Gy",
        CollectionKeyC: "https://www.thisdayinmusic.com/wp-content/uploads/2018/09/space-oddity-1.jpg",
        CollectionKeyD: "Duration: 5:18",
        CollectionKeyE: "David Bowie"
    }
    ,
    BobifyClassic3 = {
        CollectionKeyA: "House of The Rising Sun",
        CollectionKeyB: "https://open.spotify.com/artist/3ICflSq6ZgYAIrm2CTkfVP",
        CollectionKeyC: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Rising_sun_animals_US.jpg/220px-Rising_sun_animals_US.jpg",
        CollectionKeyD: "Duration: 4:32",
        CollectionKeyE: "The Animals"
    }
    ,
    BobifyClassic4 = {
        CollectionKeyA: "Sittin On the Dock of the Bay",
        CollectionKeyB: "https://open.spotify.com/artist/60df5JBRRPcnSpsIMxxwQm",
        CollectionKeyC: "https://media.medialoper.com/wp-content/uploads/2018/12/otis-redding-sittin-on-the-dock-of-the-bay-atlantic-11-297x300.jpg",
        CollectionKeyD: "Duration: 2:47",
        CollectionKeyE: "Otis Redding"
    }
    ,
    BobifyClassic5 = {
        CollectionKeyA: "Black Hole Sun",
        CollectionKeyB: "https://open.spotify.com/artist/5xUf6j4upBrXZPg6AI4MRK",
        CollectionKeyC: "https://i.scdn.co/image/ab67616d0000b273ae6d8e36136353d550b2587d",
        CollectionKeyD: "Duration: 5:19",
        CollectionKeyE: "Soundgarden"
    }

]
