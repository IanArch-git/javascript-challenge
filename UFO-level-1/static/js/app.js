var tableData = data;

var tbody = d3.select("tbody");
tableData.forEach(function(ufo){
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key,value]){
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");
button.on("click",function(event){
    d3.event.preventDefault();
    tbody.html("");
    var filterDate = d3.select("#datetime");
    var filterValue = filterDate.property("value");
    var filterData = tableData.filter(tableData => tableData.datetime === filterValue);
    filterData.forEach(function(ufoDate){
        var row = tbody.append("tr");
        Object.entries(ufoDate).forEach(function([key,value]){
            var cell = row.append("td");
            cell.text(value);
        });
    });
});