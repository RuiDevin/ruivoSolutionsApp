import api from '../plugins/api.js'

class ClienteService {
    async getAllClientes() {
        const response = await api.get('/clientes/')
        return response.data
    }
}

export default new ClienteService()