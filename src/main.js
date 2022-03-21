import {readFile} from 'fs';
import Queue from './Queue';

function main() {
    
    // readFile('maps/rect_05.map', "UTF-8", (err, data) => {
    //     if (err) throw err;
    //     const lines = data.split(/\r?\n/);
                
    //     const matrice = [];
    //     let startX;
    //     let startY;
    //     let endX;
    //     let endY;
    //     let currentX;
    //     let currentY;
    //     for(let x = 0; x<lines.length; x++) {
    //         if(!matrice[x]) {
    //             matrice[x] = [];
    //         }
    //         for(let y=0; y<lines[x].split('').length; y++) {
    //             matrice[x][y] = lines[x][y];
                
    //           if(lines[x][y] === '1') {
    //             startX = x;
    //             startY = y;
    //             currentX = x;
    //             currentY = y;
    //           }

    //           if(lines[x][y] === '2') {
    //             endX = x;
    //             endY = y;
    //           }
    //         }
            
    //     }
        
    //     // console.log(matrice,startX, startY, endX, endY);
    //     let isFound= false;
    // const q = new Queue();
    // while(!isFound){
    //   console.log(currentX, currentY);
    //     if(
         
    //       (currentX < matrice[currentY].length && matrice[currentX + 1][currentY] === '2') ||
    //       (currentY > 0 && matrice[currentX][currentY - 1] === '2') ||
    //       (currentY < matrice[currentX].length && matrice[currentX][currentY + 1] === '2') || 
    //       (currentX > 0 && matrice[currentX - 1][currentY] === '2') 

      

    //     ) 
        
    //     {
    //       isFound = true;
    //       q.enqueue([currentX, currentY]);
    //       break;
    //     }

    //     if(currentX > 0 && matrice[currentX - 1][currentY] === '2' || ' '){
    //       currentX--;
    //       q.enqueue([currentX, currentY]);
    //       console.log(q)
    //       //isFound=true;
    //       continue;
 
    //      };

    //     if(currentX < matrice[currentY].length && matrice[currentX + 1][currentY] === '2' || ' '){
    //       currentX++;
    //       q.enqueue([currentX, currentY]);
    //      // console.log(q)
    //      //  isFound=true;
    //       continue;
          
    //      };

    //      if(  currentY > 0 && matrice[currentX][currentY-1] === '2' || ' '){
    //       currentY--;
    //       q.enqueue([currentX, currentY]);
    //      // console.log(q)
    //      //  isFound=true;
    //       continue;
          
    //      };
        

    //      if( currentY < matrice[currentX].length && matrice[currentX][currentY +1] === '2' || ' '){
    //       currentY++;
    //       q.enqueue([currentX, currentY]);
    //       console.log(q)
    //       //isFound=true;
    //       continue;
          
    //      };          
        
    // }

    // });  
    const fs = require('fs');
const path = require('path');
const filename = path.join(__dirname, 'maps/rect_05.map');
const file = fs.readFileSync(filename).toString().split(/\r?\n/);

const maps = [];
let positionX = [];
let positionY = [];

let Linesmaps = 0

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

for (const line of file) {

  if (Linesmaps != 0) {
    let wall;

    if (line.indexOf("1") != -1) positionX.push(line.indexOf("1"));
    if (line.indexOf("2") != -1) positionY.push(line.indexOf("2"));

    if(line.indexOf(" ") > 1) {
      if(line.substring(positionX[0],positionX[0] + 1) == " ") {
        wall = line.replaceAt(positionX[0], ".");
        maps.push(wall);
      } else {
        wall = line.replace(/\s/g, ".");
        maps.push(wall);
      }
    } else {
        maps.push(line);
      }
  }

  Linesmaps++
}

console.log(maps);
}
main();