function init() {
    d3.csv('/Resources/top_10.csv').then(data => {
        console.log(data)

        var dropDown = d3.select('#selDataset');
            // fetch hurricanes
            
        var hurricaneNames = []
        for (let i = 0; i < data.length; i++) { 
            hurricaneNames.push(data[i].Name)
        };
        // remove duplicates
        var uniqueNames = [...new Set(hurricaneNames)];
    
        // assign hurricanes to the dropdown menu 
        uniqueNames.map(name => dropDown
            .append('option')
            .text(name)
            .property('value', name));

        hurricanePanel(uniqueNames[0])
    })
}

init();


function hurricanePanel(name) {
    d3.csv('/Resources/top_10snapshot.csv').then(data=> {
        
        //select panel element
        var panel = d3.select('#hurricaneData');
        // clear previous data
        panel.html('');

        //filter/find data for choosen name
        var hurricaneName = data.filter(Name => Name.Hurricane == name)[0];
    
        // append each key and value to demographics panel
        Object.entries(hurricaneName).map(([key, value]) => panel
            .append('p')
            .text(`${key}: ${value}`))    
    });
};


function optionChanged(value) {
    hurricanePanel(value)
  };  
  
function buttonClicked(value) {

    // Use D3 to retrieve all of the data
    d3.csv('/Resources/Damage_Numbers_Updated (2).csv').then((data) => {
        d3.select('#selDataset').html('');
        d3.select('#hurricaneData').html('');

        // Sort the data by rank in descending order
        data = data.sort((a, b) => b['Rank'] - a['Rank']);

        // Filter the top 10 hurricanes based on rank
        let filteredData = data.slice(0, 10);

        // Get the damage and year data for the selected hurricanes
        let damageData = filteredData.map((d) => d['Damage']);
        let damageDisplay = damageData*0.2
        let yearData = filteredData.map((d) => d['Year']);

        // Get the hurricane name and category data for the selected hurricanes
        let names = filteredData.map((d) => d['Hurricane Name']);
        let categories = filteredData.map((d) => d['Category']);

        // Set up the trace for bubble chart
        let trace1 = {
            x: yearData,
            y: damageData,
            mode: "markers",
            marker: {
                size: damageDisplay,
                color: categories,
                colorscale: 'Bluered',
                colorbar: {
                    title: 'Category',
                    thickness: 20,
                    ticks: 'outside'
                }
            },
            text: filteredData.map((d) => `Name: ${d['Hurricane Name']}<br>Category: ${d['Category']}<br>Damage: $${d['Damage']} billion`)
        };

        // Set up the layout
        let layout = {
            title: "Top 10 Hurricanes by Rank",
            hovermode: "closest",
            xaxis: {title: "Year"},
            yaxis: {title: "Damage (in billions USD)"},
            annotations: names.map((name, i) => ({
                x: yearData[i],
                y: damageData[i],
                text: '',
                showarrow: false
            }))
        };

        // Call Plotly to plot the bubble chart
        Plotly.newPlot("bubble", [trace1], layout);
    });
};