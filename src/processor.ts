import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'

export const AAVE_CONTRACT = '0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9'

export const processor = new EvmBatchProcessor()
    .setDataSource({
        archive: 'https://v2.archive.subsquid.io/network/ethereum-mainnet',
    })
    .setBlockRange({ from: 11_362_579 })
    .addTransaction({
        to: [AAVE_CONTRACT],
        logs: true,
    })
    .setFields({
        transaction: {
            value: true,
            sighash: true,
        },
        log: {
            transactionHash: true,
        },
    })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
