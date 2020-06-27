import neo4j from 'neo4j-driver';

export class DB {
    session
    getSession = () => {
        if (this.session) {
            return this.session
        } else {
            this.connect()
            return this.session
        }
    }
    connect = () => {
        const driver = neo4j.driver('neo4j://localhost', neo4j.auth.basic('neo4j', 'changeme'))
        this.session = driver.session()
    }
}