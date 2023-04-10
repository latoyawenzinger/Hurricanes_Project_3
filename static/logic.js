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

//function hurricanePanel(name) {
    d3.csv('/Resources/top_10.csv').then(data=> {
        
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



