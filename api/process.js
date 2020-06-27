export const processAPI = (dbSession) => ({
    createProcess: async (req, res) => {
        const result = await dbSession.writeTransaction(tx =>
            tx.run(
                'CREATE (p:Process) SET p.name = $name RETURN p.name + ", from node " + id(p)',
                { name: 'Hello world' }
            )
        )
        const singleRecord = result.records[0]
        const process = singleRecord.get(0)
        res.send(process)
    }
})