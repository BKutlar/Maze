

import {readFile} from 'fs';

function main() {
    // console.log('Hello world', process.argv);
    readFile('maps/rect_01.map', "UTF-8", (err, data) => {
        if (err) throw err;
        const lines = data.split('\n');
        // for(let i=0; i < lines.length; i++) {
        //     const line = lines[i].split(' ');
        //     for(let j=0; j < line.length; j++) {

        //         // matrices[j][i] = lines[i];
        //     }
        // }
        
        const matrice = [];
        let startX;
        let startY;
        let endX;
        let endY;
        for(let x = 0; x<lines.length; x++) {
            if(!matrice[x]) {
                matrice[x] = [];
            }
            for(let y=0; y<lines[x].split('').length; y++) {
                matrice[x][y] = lines[x][y];
                
              if(lines[x][y] === '1') {
                startX = x;
                startY = y;
              }

              if(lines[x][y] === '2') {
                endX = x;
                endY = y;
              }
            }
            
        }
        
        console.log(matrice,startX, startY, endX, endY);
    });

}


main();
