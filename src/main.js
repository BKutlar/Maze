<<<<<<< HEAD
=======
// console.log('Hello world', process.argv);

import {readFile} from 'fs';

function main() {
    console.log('Hello world', process.argv);
    readFile('maps/rect_01.map', "UTF-8", (err, data) => {
        if (err) throw err;
        console.log(data);
    });

}


main();
>>>>>>> d4743033666d0c04c7fb68489ab552b62557f6ec
