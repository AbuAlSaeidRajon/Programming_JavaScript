function getOddYears(years) {
    console.log(years);
    const oddYears = years.filter(year => year % 2 !== 0);
    return oddYears
}