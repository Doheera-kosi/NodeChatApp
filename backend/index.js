const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } =req.body;

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": "8c63dbce-80a7-455a-890b-9368d16e1dcb"}}
        )
        return res.status(r.status).json(r.data)
    } catch (e) {
        
    }

    return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
