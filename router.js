import api from './api'

export const router = (expressApp) => {
    expressApp.route('/api/process')
        .get(api.createProcess);
}