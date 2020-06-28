import express from 'express'
import { router } from './router'

const app = express()
const port = 3000

app.use(express.json())
router(app)

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
