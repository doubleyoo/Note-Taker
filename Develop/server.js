const express = require("express")
const htmlRoutes = require("./routes/htmlRoutes.js")
const app = express()
const port = process.env.port || 3000

app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use("/", htmlRoutes)
app.listen(()=>console.log(`app is listening on port ${port}`))