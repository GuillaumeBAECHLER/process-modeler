# Process Modeler

Dependencies:
- nodejs (>v10)
- yarn

Start a neo4j instance :
```sh
docker run --env NEO4J_AUTH=none --publish=7474:7474 --publish=7687:7687 --volume=$HOME/neo4j/data:/data neo4j
```

Start the app :

```sh
yarn start
```