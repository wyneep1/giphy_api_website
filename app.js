console.log("Page loaded");

//Global Constants
//We recommend holding variables for at least your api-key, limit, and rating. Add them at the top under the Global Constants comment.
const offset = 0;
const apiKey = null;
const rating = null;
const API_KEY = 'nOjzgnRK5wSxGHruvjd3HVSux7Zxk46H';
let  limit = 10;

//add Query selectors here
const gifArea = document.querySelector("#gif-area"); //results
const gifForm = document.querySelector("form");//search
const input = document.querySelector("#gifname"); 
//const submitForm = document.querySelector('.search');
console.log("You are here");

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
    displayResults(responseData.data);
//event.target.<name>.value

//generateHTML(responseData);


}
function displayResults(arr){
    arr.forEach((element, ind)=>{
        let gifUrl = element.images.fixed_height.url;
        let title = element.title;
    //create and add HTML element
    gifArea.innerHTML += `
    <div class="gif ${ind + offset}">
    <img src="${gifUrl}" alt="${title}"> 
    </div>
    `;
    });
}

function handleFormSubmit(){
    return input.value;
}

//event listeners
//submitForm.addEventListener("submit", );
