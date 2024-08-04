const server = require('./functions/server')

const port = 3030;
server.listen(port);
console.log(`Server started on port ${port}. You can make requests to http://localhost:${port}/`);
console.log(`Admin panel located at http://localhost:${port}/admin`);
