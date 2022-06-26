const PORT = process.env.PORT || 8000
const { json } = require('express');
const express = require('express')
const bp = require('body-parser')
const fs = require('fs')
var app = express()


app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

/********************* Home default page *************************/
app.get('/', (req, res) => {
    res.json('Welcome to the Where Is Food API.')
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))