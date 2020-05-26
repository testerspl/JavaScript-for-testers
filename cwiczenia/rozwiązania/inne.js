
// Napisz program JavaScript, aby sprawdzić dwie podane liczby i zwróć true, jeśli jedna z liczb to 50 lub jeśli ich suma to 50

// let test50 = (x, y) => ((x == 50 || y == 50) || (x + y == 50))


// *****************************************************************

// Napisz program JavaScript, aby sprawdzić z dwóch podanych liczb całkowitych, czy jedna jest dodatnia, a druga ujemna

// let positiveNegative = (x, y) =>
// {
//   if ((x < 0 && y > 0) || x > 0 && y < 0) 
//   {
//     return true;
//   }
//   else 
//   {
//     return false;
//   }
// }

// *****************************************************************

// Napisz program JavaScript, aby utworzyć nowy ciąg, dodając „JS” przed danym ciągiem. Jeśli podany ciąg zaczyna się od „JS”, zwróć oryginalny ciąg

// let stringCheck = (str1) => {
//     if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'JS') 
//     {
//       return str1
//     }

//     return `JS${str1}`
//   }

// *****************************************************************

// Napisz program JavaScript, aby usunąć znak w określonej pozycji danego ciągu i zwrócić nowy ciąg

// let remove_character = (str, char_pos) => 
//  {
//   let part1 = str.substring(0, char_pos)
//   let part2 = str.substring(char_pos + 1, str.length)
//   return (part1 + part2)
//  }

// *****************************************************************

// Napisz program JavaScript, aby uzyskać losowy element z tablicy

// const sample = arr => arr[Math.floor(Math.random() * arr.length)]

// *****************************************************************

/*Napisz program JavaScript, aby zbudować następujący wzorzec, używając zagnieżdżonej pętli for
*
* *
* * *
* * * *
* * * * *
*/

// let x,y,chr

// for(x=1; x <=6; x++)
// {
//    for (y=1; y < x; y++)
//      {
//     chr=chr+("*")      
//       }
//  console.log(chr)
//  chr=''
// }

// for (let i = "*"; i.length < 6; i += "*") console.log(i)

// *****************************************************************

