//Get specified amount of data from specified dataset
// fetch('https://api.energidataservice.dk/dataset/DeclarationProduction?start=2023-01-02&end=2023-04-25&filter={"PriceArea":["DK1"]}') 
//     .then(response => response.json())
//     .then(data=> {
//         console.log(`retrieved ${data.limit} of ${data.total}`);
//         console.group("Data retrieved:");
//         data.records.forEach(record => console.log(record));
//         console.groupEnd();
//     });

const dataToExtract = {
    Price: "DKK_per_kWh",
    StartTime: "time_start",
    EndTime: "time_end"
}

const extractedData = []

fetch('https://www.elprisenligenu.dk/api/v1/prices/2023/04-25_DK1.json') 
.then(response => response.json())
.then(data=> {
    data.forEach(record =>  {
        var dataObjectCluster = {}
        Object.values(dataToExtract).forEach(extraction => dataObjectCluster[extraction] = record[extraction])
        extractedData.push(dataObjectCluster)
    })
    console.log(extractedData)
});