const express = require('express');
// const db_conn = require('./db_conn');
const favicon = require('express-favicon');
const app = express();
const cors = require('cors');
const port = 3000;


app.use(cors());

app.use(express.static(__dirname));

app.use(favicon(__dirname + '/media/shield-solid.svg'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));



app.use("/", require("./routes"));

app.use("/AddWalkthrough", require("./routes"));


app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
}
);

app.get('/Add', (req, res) => {
    res.sendFile('goToAdd.html', { root: __dirname });
} 
);

// app.post('/AddWalkthrough', (req, res) => {
//     console.log(req);
//     res.sendFile('add.html', { root: __dirname });
// }
// );

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);

