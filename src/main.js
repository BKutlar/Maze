import {readFile} from 'fs';

function main() {
    
    readFile('maps/rect_01.map', "UTF-8", (err, data) => {
        if (err) throw err;
        const lines = data.split(/\r?\n/);
                
        const matrice = [];
        let startX;
        let startY;
        let endX;
        let endY;
        let curentX;
        let curentY;
        for(let x = 0; x<lines.length; x++) {
            if(!matrice[x]) {
                matrice[x] = [];
            }
            for(let y=0; y<lines[x].split('').length; y++) {
                matrice[x][y] = lines[x][y];
                
              if(lines[x][y] === '1') {
                startX = x;
                startY = y;
                curentX = x;
                curentY = y;
              }

              if(lines[x][y] === '2') {
                endX = x;
                endY = y;
              }
            }
            
        }
        
        console.log(matrice,startX, startY, endX, endY);
    });
    let isFound= false;
    while(isFound){
        matrice[curentX - 1][curentY] === '2' || ' ';
        matrice[curentX + 1][curentY] === '2' || ' ';
        matrice[curentX ][curentY-1] === '2' || ' ';
        matrice[curentX ][curentY +1] === '2' || ' ';
        continue;
    }



}


main();
