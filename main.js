import neo4j from 'neo4j-driver';

const driver = neo4j.driver('neo4j://localhost', neo4j.auth.basic('neo4j', 'changeme'))
const session = driver.session()

try {
  const result = await session.writeTransaction(tx =>
    tx.run(
      'CREATE (a:Greeting) SET a.message = $message RETURN a.message + ", from node " + id(a)',
      { message: 'hello, world' }
    )
  )

  const singleRecord = result.records[0]
  const greeting = singleRecord.get(0)

  console.log(greeting)
} finally {
  await session.close()
}