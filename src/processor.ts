import {DataSourceBuilder} from '@subsquid/evm-stream'

export const AAVE_CONTRACT = '0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9'

export const dataSource = new DataSourceBuilder()
    // The SQD Network Portal is the primary source of blockchain data: it is public,
    // needs no API key, and streams pre-filtered data — including real-time unfinalized
    // blocks — far faster than a plain RPC endpoint.
    .setPortal('https://portal.sqd.dev/datasets/ethereum-mainnet')
    // To use a private or rate-limit-lifted Portal, supply an API key
    // through the HTTP client headers (create a key at https://portal.sqd.dev/app):
    // .setPortal({
    //     url: 'https://portal.sqd.dev/datasets/ethereum-mainnet',
    //     http: {
    //         headers: {'x-api-key': process.env.SQD_API_KEY},
    //     },
    // })
    .setBlockRange({from: 11_362_579})
    // Field selection is explicit: there are no default optional fields, so list every
    // field the handler reads.
    .setFields({
        transaction: {
            hash: true,
            from: true,
            to: true,
            value: true,
            sighash: true,
        },
        log: {
            transactionHash: true,
            address: true,
            topics: true,
            data: true,
        },
    })
    // Request transactions to the AAVE contract together with the logs they emitted.
    .addTransaction({
        where: {
            to: [AAVE_CONTRACT],
        },
        include: {
            logs: true,
        },
    })
    .build()
