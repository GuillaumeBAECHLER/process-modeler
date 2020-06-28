export const processAPI = (dbSession) => ({
    fetchProcesses: async (req, res) => { 
        const result = await dbSession.run('MATCH(p:Process) RETURN COLLECT({id: p.uuid, name: p.name}) as process')
        res.json(result.records[0].get('process'))
    },
    createProcess: async (req, res) => {
        const properties = req.body
        const result = await dbSession.run(
            'CREATE (p:Process {uuid: randomUUID()}) SET p = $properties RETURN {id: p.uuid, name: p.name} as process',
            { properties }
        )
        res.json(result.records[0].get('process'))
    },
    fetchProcess: async (req, res) => {
        const id = req.params.id
        const result = await dbSession.run(
            'MATCH(p:Process {uuid: $id}) RETURN {id: p.uuid, name: p.name} as process',
            { id }
        )
        res.json(result.records[0].get('process'))
    },
    modifyProcess: async (req, res) => {
        const id = req.params.id
        const properties = req.body
        const result = await dbSession.run(
            'MATCH(p:Process {uuid: $id}) SET p += $properties RETURN {id: p.uuid, name: p.name} as process',
            { id, properties }
        )
        res.json(result.records[0].get('process'))
    },
    deleteProcess: async (req, res) => {
        const id = req.params.id
        await dbSession.run(
            'MATCH(p:Process {uuid: $id}) DETACH DELETE p',
            { id }
        )
        res.sendStatus(204)
    },
})