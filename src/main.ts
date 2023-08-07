import {TypeormDatabase} from '@subsquid/typeorm-store'
import {CallToAave, EventCausedByAaveCall} from './model'
import {processor, AAVE_CONTRACT} from './processor'

processor.run(new TypeormDatabase({supportHotBlocks: false}), async (ctx) => {
    const calls: Map<string, CallToAave> = new Map()
    const events: EventCausedByAaveCall[] = []

    for (let block of ctx.blocks) {
        for (let txn of block.transactions) {
            calls.set(txn.hash, new CallToAave({
                id: txn.id,
                block: block.header.height,
                hash: txn.hash,
                from: txn.from,
                to: txn.to,
                value: txn.value,
                sighash: txn.sighash
            }))
        }
        for (let log of block.logs) {
            events.push(new EventCausedByAaveCall({
                id: log.id,
                call: calls.get(log.transactionHash),
                address: log.address,
                topic0: log.topics[0],
                topic1: log.topics[1],
                topic2: log.topics[2],
                topic3: log.topics[3],
                data: log.data
            }))
        }
    }

    await ctx.store.upsert([...calls.values()])
    await ctx.store.upsert(events)
})
