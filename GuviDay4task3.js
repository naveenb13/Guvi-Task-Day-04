var request = new XMLHttpRequest();
request.open ( 'GET', 'https://restcountries.com/v3.1/all');
request.send();
request.onload = function(){
    var countryflags = JSON.parse(this.response);
    for(let ele of countryflags){
        console.log(ele.name);
        console.log(ele.region);
        console.log(ele.subregion);
        console.log(ele.population);
    }
}