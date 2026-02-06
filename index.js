import express from "express";
import Yaml from "yamljs";
import swaggerUiExpress from "swagger-ui-express";

const app = express()
const swaggerDocs = Yaml.load('./swagger.yaml')

// middleware
app.use(express.json())
app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs))


// routers
app.get('/', (req, res) => {
    res.send('this is home')
})

app.listen(3000, () => {
    console.log('server in on...')
})