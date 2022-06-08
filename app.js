console.log("Page loaded");

//add Query selectors here
const API_KEY = 'nOjzgnRK5wSxGHruvjd3HVSux7Zxk46H'
const gifArea = document.querySelector("#gif-area");
const gifForm = document.querySelector("form");
const input = document.querySelector("#gifname")

//Global Constants
//We recommend holding variables for at least your api-key, limit, and rating. Add them at the top under the Global Constants comment.
const apiKey = null;
const limit = null;
const rating = null;
console.log("You are here")


//control form behavior upon submitting
gifForm.addEventListener("submit", getResults);

async function getResults(e) {
    console.log("get results");
//async function getGif(evt){
    console.log("Inside function getResults - form submitted");
    //console.log(evt);
    e.preventDefault(); //prevent page from reloading
    //console.log("evt.target.gif.value=" , evt.target.gif.value);
    let y = "http://api.giphy.com/v1/gifs/search?api_key=nOjzgnRK5wSxGHruvjd3HVSux7Zxk46H&q=" + e.target.GIF.value
    console.log(y)
    let response = await fetch (y);
    console.log("reponse is:", response);
    let responseData = await response.json();
    console.log("reponseData is: ", responseData);
    // + evt.target.gif.value;

    return responseData.data;
    
//event.target.<name>.value

//generateHTML(responseData);


}
function displayResults(gifData){
    gifArea.innerHTML = 
    map(())
    /*`
    <h1>${gifData.species.name}</h1>
    <p>Height: ${gifData.height}</p>
    <p>Weight: ${gifData.weight}</p>
    <img src="/> 
    `;*/
}

function handleFormSubmit(){

}