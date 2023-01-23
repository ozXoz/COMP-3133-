const fs =require('fs')
console.log("Week2")

// fs.readFile('input_countries.csv',(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("======Start======")
//     console.log(data.toString())

// })


// Canada


fs.readFile('canada.csv',(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("======Start======")
    console.log(data.toString())

})




fs.readFile('usa.csv',(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("======Start======")
    console.log(data.toString())

})


// Deleted
const stringify = require('csv-stringify');

let rows = [];
fs.createReadStream('./example/data.csv')
  .pipe(parse())
  .on('data', (data) => {
    rows.push(data);
  })
  .on('end', () => {
    // Remove the desired row
    rows.splice(2, 1);
    // Write the updated data back to the file
    stringify(rows, (err, output) => {
      fs.writeFile('./example/data.csv', output, (err) => {
        if (err) throw err;
        console.log('Row deleted successfully.');
      });
    });
  });
