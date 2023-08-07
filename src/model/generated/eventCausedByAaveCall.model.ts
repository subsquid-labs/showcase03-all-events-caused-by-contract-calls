import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {CallToAave} from "./callToAave.model"

@Entity_()
export class EventCausedByAaveCall {
    constructor(props?: Partial<EventCausedByAaveCall>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => CallToAave, {nullable: true})
    call!: CallToAave

    @Index_()
    @Column_("text", {nullable: false})
    address!: string

    @Index_()
    @Column_("text", {nullable: true})
    topic0!: string | undefined | null

    @Index_()
    @Column_("text", {nullable: true})
    topic1!: string | undefined | null

    @Index_()
    @Column_("text", {nullable: true})
    topic2!: string | undefined | null

    @Index_()
    @Column_("text", {nullable: true})
    topic3!: string | undefined | null

    @Column_("text", {nullable: false})
    data!: string
}
