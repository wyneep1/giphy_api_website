console.log("Page loaded");

//Global Constants
let searchWord = "";
let offset = 0;
let  limit = 10;
const API_KEY = 'nOjzgnRK5wSxGHruvjd3HVSux7Zxk46H';
const API_URL = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${limit}&q=`;
const TREND_API_URL = `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}`;


//add Query selectors here
const gifArea = document.querySelector("#gif-area"); //results
//const gifForm = document.querySelector("form");//search
const sub = document.querySelector('.search'); 
const showMore = document.querySelector('.show-more'); //show more
console.log("You are here");

//handles what is submitted to the form
function handleFormSubmit(){
    return sub.input.value;
}

async function getResults(e) {
    console.log("get results");
//async function getGif(evt){
    console.log("Inside function getResults - form submitted");
    //console.log(evt);
    e.preventDefault(); //prevent page from reloading
    
    //let y = API_URL + e.target.GIF.value
    //console.log(y)

    const searchWord = handleFormSubmit();
    const y = API_URL + searchWord;
    
    if(!searchWord.length){
        trendingResults();
        return;
    }
    let response = await fetch (y);
    console.log("reponse is:", response);
    let responseData = await response.json();

//event.target.<name>.value
    if (gifArea){
        gifArea.innerHTML = ''; 
    }
    offset = 0;
    showMore.classList.remove("hidden");
    
    console.log("reponseData is: ", responseData);
    displayResults(responseData.data);

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

//get more results
async function fetchMoreResults(){
    searchWord = handleFormSubmit();
    offset += limit;
    const API_PATH = ((searchWord.length) ? API_URL: TREND_API_URL) + searchWord + "&offset=" + offset;
    //give additional results
    const responseData = await fetch(API_PATH).then(async (res) => {
        return await res.json();
    })
    

    //display the rest of the results
    console.log("reponseData is: ", responseData);
    displayResults(responseData.data);
}
//trending results api!
async function trendingResults(){
    const API_PATH = TREND_API_URL;
    const responseData = await fetch(API_PATH).then(async (res) => {
        return await res.json();
    })
    if (gifArea){
        gifArea.innerHTML = ''; 
    }
    offset = 0;
    showMore.classList.remove("hidden");
    
    console.log("reponseData is: ", responseData);
    displayResults(responseData.data);
}
//event listeners
sub.addEventListener("submit", getResults);
showMore.addEventListener("click", fetchMoreResults);

window.onload = trendingResults;




