function init() {
    d3.csv('../top_10.csv').then(data => {
            console.log(data)

            var dropDown = d3.select('#selDataset');
            // fetch hurricanes
            
            var hurricaneNames = []
            for (let i = 0; i < data.length; i++) { 
                hurricaneNames.push(data[i].Name)
            };
            // remove duplicates
            var uniqueNames = [...new Set(hurricaneNames)];
            console.log(uniqueNames)
            // assign hurricanes to the dropdown menu 
            uniqueNames.map((id) => dropDown
            .append('option')
            .text(id)
            .property('value', id));
            })
        }

init();

//function hurricanePanel(name) {
    d3.csv('../top_10.csv').then(data=> {
        
        //select panel element
        var panel = d3.select('#hurricaneData');
        // clear previous data
        panel.html('');
        
        //load metadata for panel
        var date = newDate(data[0].Date).toTimeString();
        console.log(date)

        //filter/find data for choosen ID
        var metadataID = metadata.filter(patientInfo => patientInfo.id == id)[0];
    
        // append each key and value to demographics panel
        Object.entries(metadataID).map(([key, value]) => panel
            .append('p')
            .text(`${key}: ${value}`))    
    });
//};


function createMap() {};

// Use `d3.json` to fetch the sample data for the plots
d3.csv('../top_10.csv').then((data) => {
    var samples= data.samples;
    var resultsarray= samples.filter(sampleobject => 
        sampleobject.id == sample);
    var result= resultsarray[0]
  
    var ids = result.otu_ids;
    var labels = result.otu_labels;
    var values = result.sample_values;

    // Build a BUBBLE Chart 

    var LayoutBubble = {
        margin: { t: 0 },
        xaxis: { title: "OTU ID" },
        hovermode: "closest",
        title: "Damage Caused by Hurricans"
        };
    
        var DataBubble = [ 
        {
          x: ids,
          y: values,
          text: labels,
          mode: "markers",
          marker: {
            color: ids,
            size: values,
            }
        }
      ];
    
      Plotly.newPlot("bubble", DataBubble, LayoutBubble);





















// Function that builds the bubble chart
function buildBubbleChart(hurricansdamaged) {

    // Use D3 to retrieve all of the data
    d3.csv('../top_10.csv')then((data) => {

        // Retrieve all hurrican data
        var hurricanInfo = data.samples;

        // Filter based on the value of the hurrican damaged
        var value = sampleInfo.filter(result => result.id == hurricansdamaged);

        // Get the first index from the array
        var valueData = value[0];

        // Get the otu_ids, lables, and sample values
        var otu_ids = valueData.otu_ids;
        var otu_labels = valueData.otu_labels;
        var sample_values = valueData.sample_values;

        // Log the data to the console
        console.log(otu_ids,otu_labels,sample_values);
        
        // Set up the trace for bubble chart
        var trace1 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        };

        // Set up the layout
        let layout = {
            title: "Damage by Hurricans",
            hovermode: "closest",
            xaxis: {title: "OTU ID"},
        };

        // Call Plotly to plot the bubble chart
        Plotly.newPlot("bubble", [trace1], layout)
    });
};

        