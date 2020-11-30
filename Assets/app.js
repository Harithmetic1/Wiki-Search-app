let resultTitle = document.getElementById('resultTitle');
let resultBody = document.getElementById('resultBody');
let resultBody2 = document.getElementById('resultBody2')

async function apiCall(){
    let queryTerm = document.getElementById('searchInput').value;
    queryTerm = queryTerm.split(" ").join("_");
    if (queryTerm === ''){
        alert('Please input something to search');
        return false;
    }
    let fetchUrl = await fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=30&srsearch=%27' + queryTerm);
    let data = await fetchUrl.json();
    console.log(data);

    //Result output
    resultTitle.innerText =  data.query.search[0].title;
    resultBody.innerHTML = "1. " + data.query.search[0].snippet;
    resultBody2.innerHTML = "2. " + data.query.search[1].snippet;
    document.querySelector('.resultContent').style.backgroundColor = "White";
}
