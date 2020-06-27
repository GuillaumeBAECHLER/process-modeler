import { processAPI } from './process'
import { DB } from '../db'
const db = new DB()
const session = db.getSession()

const api = {
    ...processAPI(session),
}

export default api