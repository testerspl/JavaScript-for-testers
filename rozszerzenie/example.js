



// Math.random().toString(36).slice(-5)

// ***************************************************
// for(let i =0; i <= 10; i++) {

//     console.log(Array.apply(0, Array(5)).map(function() {
//         return (function(charset){
//             return charset.charAt(Math.floor(Math.random() * charset.length))
//         }('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'));
//     }).join(''))
// }

// ***************************************************
// function makeid(length) {
//     var result           = ''
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     var charactersLength = characters.length
//     for ( var i = 0; i < length; i++ ) {
//        result += characters.charAt(Math.floor(Math.random() * charactersLength))
//     }
//     return result
//  }
 
//  console.log(makeid(20))


// ***************************************************
// const Excel = require('exceljs')

// var workbook = new Excel.Workbook()
// const worksheet = workbook.addWorksheet('ExampleSheet')

// worksheet.columns = [
//     { header: 'Package', key: 'package_name' },
//     { header: 'Author', key: 'author_name' }
//   ]
  
//   // Add row using key mapping to columns
//   worksheet.addRow(
//     { package_name: "ABC", author_name: "Author 1" },
//     { package_name: "XYZ", author_name: "Author 2" }
//   );
  
//   // Add rows as Array values
//   worksheet
//     .addRow(["BCD", "Author Name 3"])
  
//   // Add rows using both the above of rows
//   const rows = [
//     ["FGH", "Author Name 4"],
//     { package_name: "PQR", author_name: "Author 5" }
//   ]
  
//   worksheet
//     .addRows(rows)
  
//   // save workbook to disk
//   workbook
//     .xlsx
//     .writeFile('./sample.xlsx')
//     .then(() => {
//       console.log("saved")
//     })
//     .catch((err) => {
//       console.log("err", err)
//     })

// ***************************************************
    // workbook.xlsx.readFile('./sample.xlsx')
    // .then((res) => {

        // var sh = workbook.getWorksheet("ExampleSheet")

        // console.log("Row-4 | Cell-2 - "+sh.getRow(4).getCell(2).value)

    //     for (i = 1; i <= sh.rowCount; i++) {
    //         console.log(sh.getRow(i).getCell(1).value);
    //         console.log(sh.getRow(i).getCell(2).value);
    //     }

    // }).catch(err => console.log(err))