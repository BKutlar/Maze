import {readFile} from 'fs';
import Queue from './Queue';

function main() {
    
    readFile('maps/rect_01.map', "UTF-8", (err, data) => {
        if (err) throw err;
        const lines = data.split(/\r?\n/);
                
        const matrice = [];
        let startX;
        let startY;
        let endX;
        let endY;
        let currentX;
        let currentY;
        for(let x = 0; x<lines.length; x++) {
            if(!matrice[x]) {
                matrice[x] = [];
            }
            for(let y=0; y<lines[x].split('').length; y++) {
                matrice[x][y] = lines[x][y];
                
              if(lines[x][y] === '1') {
                startX = x;
                startY = y;
                currentX = x;
                currentY = y;
              }

              if(lines[x][y] === '2') {
                endX = x;
                endY = y;
              }
            }
            
        }
        
        // console.log(matrice,startX, startY, endX, endY);
        let isFound= false;
    const q = new Queue();
    while(!isFound){
        if(matrice[currentX - 1][currentY] === '2' || ' '){
         currentX--;
         q.enqueue([currentX, currentY]);
         console.log(q)
        //  isFound=true;
         continue;
         
        };

        if( matrice[currentX + 1][currentY] === '2' || ' '){
          currentX++;
          q.enqueue([currentX, currentY]);
          console.log(q)
         //  isFound=true;
          continue;
          
         };

         if(  matrice[currentX ][currentY-1] === '2' || ' '){
          currentY--;
          q.enqueue([currentX, currentY]);
          console.log(q)
         //  isFound=true;
          continue;
          
         };
        

         if( matrice[currentX ][currentY +1] === '2' || ' '){
          currentY++;
          q.enqueue([currentX, currentY]);
          console.log(q)
          isFound=true;
          continue;
          
         };
        
        
       
       
                
        
    }



    });
    
}


main();
