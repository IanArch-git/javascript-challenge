var tableData = data;
// console.log(tableData);

var tbody = d3.select("tbody")
tableData.forEach(function(ufo){
    console.log(ufo);
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key,value]){
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
});