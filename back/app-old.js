const http = require('http');


http.createServer((req, res) => {
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200,{'Content-Type': 'aplication/csv'});


    // res.write('id , nombre\n' );
    // res.write('1 , Harol\n' );
    // res.write('2 , henry\n' );
    // res.write('3 , Paolo\n' );
    res.end();
})
    .listen(8080);

console.log('Escuchando el puerto', 8080);