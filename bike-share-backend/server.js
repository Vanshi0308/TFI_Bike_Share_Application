const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const fs = require("fs");
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());
app.listen(3000);

app.get("/", (req, res) => {
    res.status(200).send("This is the backend server of Bike Share App");
});

async function getStationData(schemeId) {
    const apiUrl = 'https://data.bikeshare.ie/dataapi/resources/station/data/list';
    const apiKey = process.env.API_KEY;

    const body = {
        key: apiKey,
        schemeId: schemeId,
    };

    const stationData = await axios.post(apiUrl, body, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});

    return stationData;
}

function signupUser(username, password, email) {
    const fileData = fs.readFileSync("./data.json");
    let data = JSON.parse(fileData);
    
    let userExists = data.find(user => user.username === username);
    if (userExists === undefined) {
        const newUser = {
            username: username,
            password: password,
            email: email,
        }
        
        data.push(newUser);
        
        fs.writeFileSync('data.json', JSON.stringify(data), (err) => {
            if (err) throw err;
        });
        return true;
    }

    else {
        return false;
    }
}

function loginUser(username, password) {
    const fileData = fs.readFileSync("./data.json");
    let data = JSON.parse(fileData);

    let userExists = data.find(user => user.username === username);
    if (userExists !== undefined) {
        if (userExists.password === password) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

app.post("/signup", function(req, res) {
    const userSignedUp = signupUser(req.body.username, req.body.password, req.body.email);
    if (userSignedUp == true) {
        res.status(200).send({success: true});
    }
    else {
        res.status(500).send({success: false});
    }
})

app.post("/login", function(req, res) {
    const userLoggedIn  = loginUser(req.body.username, req.body.password);
    if (userLoggedIn == true) {
        res.status(200).send({success: true});
    }
    else {
        res.status(500).send({success: false});
    }
})

app.get("/stationData/:schemeId", (req, res) => {
    getStationData(req.params.schemeId).then((response) => {
        if(response.status == 200) {
            res.status(200).send(response.data.data);
        }
        else {
            res.status(500).send("Could not fetch station data");
        }
    }).catch((error) => {
        res.send(500).send("Error posting axios request");
    })  
});