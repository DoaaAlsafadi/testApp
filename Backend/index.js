//express is a framework to build web applications based on nodejs
const express = require('express');
const app = express();
//body pareser to handle json data which is a format to transfer data between front and back end
var bodyParser = require('body-parser');
app.use(bodyParser());

//this function for access control origin to allow front end to use back end resources. for security issues
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//this array to store data instead of database
allUsers = [];

//requests : all requests has two main parameters 1-res(response) => use it to send response to front end
//  2-req (request) => use it to get data from front end request


//post request to create new data in database (in all uesrs array in our case)
app.post('/sendData', (req, res) => {

    //push in array means add element to the array 
    allUsers.push(req.body)
    res.send("data added successfully");
    console.log(req.body , '        \n\n\n\nn\\n\n\nn\n\\nn\nn')
   
});

//get request to get data from databse (from all users array in our case)
app.get('/getAllData', (req, res) => {

    res.send(allUsers);
    // res.json(allUsers);
})

//delete request to delete data from database (from all users array in our case)
app.delete('/deleteuser',(req,res) =>{
    allUsers.splice(req.body , 1);
    res.send("user deleted successfully")
})


//our backend(server) running on port 3000
app.listen(3000, () => console.log('Example app listening on port 3000!'))