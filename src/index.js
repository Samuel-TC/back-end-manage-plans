import app from "./app";

// Start server on port 4000
const main=()=>{
    const port =  app.get("port");
    app.listen( port );
    console.log('Server On Port: ', 'http://localhost:'+port);
};

main();