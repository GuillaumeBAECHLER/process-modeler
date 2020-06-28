import api from './api'

export const router = (expressApp) => {
    expressApp.route('/api/process')
        .get(api.fetchProcesses)
        .put(api.createProcess)
    expressApp.route('/api/process/:id')
        .get(api.fetchProcess)
        .post(api.modifyProcess)
        .delete(api.deleteProcess)
}