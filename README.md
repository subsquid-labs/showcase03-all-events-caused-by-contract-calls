# Showcase squid 03: events caused by contract calls

This squid captures all calls to the [AAVE Lending Pool v2 contract](https://etherscan.io/address/0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9) and all event logs caused by these calls, including ones emitted by contracts other than the pool contract. See more examples of requesting data with squids on the [showcase page](https://docs.subsquid.io/evm-indexing/configuration/showcase) of Subsquid documentation.

Dependencies: Node.js, Docker.

## Quickstart

```bash
# 0. Install @subsquid/cli a.k.a. the sqd command globally
npm i -g @subsquid/cli

# 1. Retrieve the template
sqd init showcase03 -t https://github.com/subsquid-labs/showcase03-all-events-caused-by-contract-calls/
cd showcase03

# 2. Install dependencies
npm ci

# 3. Start a Postgres database container and detach
sqd up

# 4. Build and start the processor
sqd process

# 5. The command above will block the terminal
#    being busy with fetching the chain data, 
#    transforming and storing it in the target database.
#
#    To start the graphql server open the separate terminal
#    and run
sqd serve
```
A GraphiQL playground will be available at [localhost:4350/graphql](http://localhost:4350/graphql).
