var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var res = JSON.parse(request.response);
    
    //1.Get all the countries from Asia continent /region using Filter method
    console.log("\n--All the countries from Asia continent /region using Filter method--")
    var countries = res.filter((a) => a.region == "Asia");
    for (var i = 0; i < countries.length; i++) {
        console.log(countries[i].name.common);
    }

    //2.Get all the countries with a population of less than 2 lakhs using Filter method
    console.log("\n--All the countries with a population of less than 2 lakhs using Filter method--")
    var population_data = res.filter((a) => a.population < 200000);
    var country_name = population_data.map((a) => a.name.common);
    for (var i = 0; i < country_name.length; i++) {
        console.log(country_name[i])
    }

    //3.Print the following details name, capital, flag, using forEach method
    console.log("\n--Name, Capital, Flag, using forEach method--")
    res.forEach(x => {
        console.log(`${x.name.common} -- ${x.capital} -- ${x.flag}`);
    });

    //4.Print the total population of countries using reduce method
    console.log("\n--Total population of countries using reduce method--")
    var population = res.map((a) => a.population);
    var result = population.reduce((acc, cv) => acc + cv, 0);
    console.log(result);

    // 5.Print the country that uses US dollars as currency.
    console.log("\n--Country that uses US dollars as currency--")
    var country_data = res.filter((x) => x?.currencies?.USD?.name === "United States dollar");
    //here i have used ? (optional Chaining) refered from internet(MDN WebDocs)(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining), which means if the property is undefined, then the process is stopped in the current iteration and goes to next iteration which means next data.
    for (var i = 0; i < country_data.length; i++) {
        console.log(country_data[i].name.common);
    }
}