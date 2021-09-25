
const mongoose  = require('mongoose');
const readLine = require ('readline');

//Define a database connection string and uses it to open Mongoose connection
const dbURI = 'mongodb://localhost/travlr';

mongoose.set('useUnifiedTopology', true );

const connect = () => {
  setTimeout(() => mongoose.connect(dbURL, {
     useNewUrlParser: true,
     useCreateIndex: true,
     useUnifiedTopology: true
  }), 1000);
}



//emit a SIGINT on window machines
if (process.platform === 'win32'){
    const rl = readLine.createInterface ({
      input: process.stdin,
      output: process.stdout
    });
    rl.on ('SIGINT', () => {
      process.emit ("SIGINT");
    });
  }



//Listen for mongoose connection string and uses it to open a Mongoose connection
mongoose.connection.on('connected', ()=>{
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err =>{
    console.log('Mongoose connection error: ', err);
});

mongoose.connection.on('diconnected', () =>{
    console.log('Mongoose disconnected : ');
});

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() =>{
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    })
};

//For nodemon termination
process.on('SIGUSR1', ()=>{
    gracefulShutdown('nodemon restart', ()=>{
        process,kill(process.pid, 'SIGUSR2');
    })
});

//For app termination
process.on('SIGINT', () => {                           
    gracefulShutdown('app termination', () => {          
      process.exit(0);                                   
    });
  });

  //for Heroku app termination
  process.on('SIGTERM', () => {                          
    gracefulShutdown('Heroku app shutdown', () => {      
      process.exit(0);                                   
    });
  });


require('./travlr');