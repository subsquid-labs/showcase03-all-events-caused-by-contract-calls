import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {EventCausedByAaveCall} from "./eventCausedByAaveCall.model"

@Entity_()
export class CallToAave {
    constructor(props?: Partial<CallToAave>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("int4", {nullable: false})
    block!: number

    @Index_()
    @Column_("text", {nullable: false})
    hash!: string

    @Index_()
    @Column_("text", {nullable: false})
    from!: string

    @Index_()
    @Column_("text", {nullable: true})
    to!: string | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    value!: bigint

    @Index_()
    @Column_("text", {nullable: false})
    sighash!: string

    @OneToMany_(() => EventCausedByAaveCall, e => e.call)
    events!: EventCausedByAaveCall[]
}
