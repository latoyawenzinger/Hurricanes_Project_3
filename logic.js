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
            console.log(uniqueNames)
            // assign hurricanes to the dropdown menu 
            uniqueNames.map((id) => dropDown
            .append('option')
            .text(id)
            .property('value', id));
            })
        }

init();