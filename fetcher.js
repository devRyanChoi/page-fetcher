const request = require('request');
const fs = require('fs');


const url = process.argv.slice(2);
const filePath = process.argv.slice(3);

const fetcher = function(url, filePath) {
  request(url, (error, response, body) => {
    if(error) {
      console.log('Failed to download', error);
    }
    fs.writeFile(filePath,body, (error) => {
      if(!error) {
        console.log(`Download and save ${body.length} bytes to ${filePath}`)
      } else {
        console.log('Failed to write to : ', filePath);
      }
    });
   });
  }




  // check alreaday to exist the file path or not
  if(filePath === ?? ) {
// if exists - prompt them to type in Y to overwrite the file

  } // or not - Skip and exit the app
  else {
    fetcher(url, filePath)
  }
  //using readline module
  var readline = require('readline');

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("What do you think of node.js? ", function(answer) {
    // TODO: Log the answer in a database
    console.log("Thank you for your valuable feedback:", answer);
  
    rl.close();
  });
