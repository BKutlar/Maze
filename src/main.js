

import {readFile} from 'fs';

function main() {
    console.log('Hello world', process.argv);
    readFile('maps/rect_01.map', "UTF-8", (err, data) => {
        if (err) throw err;
        const lines = data.split('\n');
        for(let i=0; i < lines.length; i++) {
            const line = lines[i].split(' ');
            for(let j=0; j < lines.length; j++) {
                matrices[j][i] = line[i];
            }
        }
        
        console.log(lines);
    });

}


main();
