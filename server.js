const express = require(`express`)
const bodyParser = require(`body-parser`)
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

const mongoose = require(`mongoose`)
mongoose.connect("mongodb://localhost/imagesDB", { useNewUrlParser: true, useUnifiedTopology: true })
const Schema = mongoose.Schema
const imageSchema = new Schema({
    media_type: String,
    title: String,
    href: String,
    description: String,
})

const Image = mongoose.model(`Image`, imageSchema)

app.get(`/images/:img?`, async (req, res) => {
    if (req.params.img) {
        await Image.findById(req.params.img).exec(function (err, image) {
            res.send(image)
        })
    } else {
        await Image.find({}).exec(function (err, image) {
            res.send(image)
        })
    }
})

app.post(`/image`, async (req, res) => {
    const image = await new Image(req.body)
    image.save()
    res.send(image)
})

app.delete(`/image/:id`, async (req, res) => {
    const id = req.params.id
    const document = await Image.findByIdAndDelete(id)
    res.send(document)
})

port = 1301
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})