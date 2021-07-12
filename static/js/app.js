/*
HINT 1

 When importing json, try using metadata

 d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];

    console.log(result);

 });

HINT 2

 Event Listener is different in this html, review id="selDataset" in index.html
 <select id="selDataset" onchange="optionChanged(this.value)"></select>

*/

//import data

d3.json("samples.json").then((data) => {
   var metadata = data.metadata;
   var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
   var result = resultArray[0];
   
   console.log(result);
   
});

// Sort the data by otu_ids
var idSort = resultArray.sort(a => a.otu_ids);

console.log(idSort);

// Slice the first 10 objects for plotting
slicedData = idSort.slice(0, 10);

console.log(slicedData);

// Reverse the array to accommodate Plotly's defaults
reversedData = slicedData;//.reverse();

// // Plotly

// // Trace1 for the Greek Data
// var trace1 = {
//     x: slicedData.map(object => object.greekSearchResults),
//     y: slicedData.map(object => object.greekName),
//     text: slicedData.map(object => object.greekName),
//     name: "Greek",
//     type: "bar",
//     orientation: "h"
// };

// // data
// var data = [trace1];

// // Apply the group bar mode to the layout
// var layout = {
//     title: "Greek gods Popularity"
// }

// // Render the plot to the div tag with id "plot"
// Plotly.newPlot("plot", data, layout);

