
const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=2bc3dad6aa6e30b8665056daaeb1fbe3&format=json';

function getArtists(){
    return fetch(URL)
      .then(response => response.json() )
      .then(data => data.topartists.artist )
      .then(artists => artists.map(artist =>{
        return {
          name : artist.name,
          image : artist.image[3]['#text'],
          likes : 20,
          comments: 28,
        }
      }))
}

export {getArtists}
