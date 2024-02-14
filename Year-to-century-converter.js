function yearToCenturyConverter(x){
    var year = Number(x);
    var century = ""
    if (year % 100 === 0 ){
        century = year / 100 + " century"
    } else {
        century = Math.floor(year/100) + 1 + "century"
    }
    return century;
}
console.log(yearToCenturyConverter(2024))