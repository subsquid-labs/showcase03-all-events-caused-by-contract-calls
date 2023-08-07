module.exports = class Data1691383776630 {
    name = 'Data1691383776630'

    async up(db) {
        await db.query(`CREATE TABLE "event_caused_by_aave_call" ("id" character varying NOT NULL, "address" text NOT NULL, "topic0" text, "topic1" text, "topic2" text, "topic3" text, "data" text NOT NULL, "call_id" character varying, CONSTRAINT "PK_1a4b9b374be2d0568c164ead091" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_f8b85638d6e57dd026bcaa5c78" ON "event_caused_by_aave_call" ("call_id") `)
        await db.query(`CREATE INDEX "IDX_422f7b36f7d2e945dc82b328ec" ON "event_caused_by_aave_call" ("address") `)
        await db.query(`CREATE INDEX "IDX_9db310544ee9da0ff1e1cfa990" ON "event_caused_by_aave_call" ("topic0") `)
        await db.query(`CREATE INDEX "IDX_c049581a717ea32ec4290c2956" ON "event_caused_by_aave_call" ("topic1") `)
        await db.query(`CREATE INDEX "IDX_4f8f2542cba84e90b91be0cbff" ON "event_caused_by_aave_call" ("topic2") `)
        await db.query(`CREATE INDEX "IDX_d03645c92f58cd6a0233341c06" ON "event_caused_by_aave_call" ("topic3") `)
        await db.query(`CREATE TABLE "call_to_aave" ("id" character varying NOT NULL, "block" integer NOT NULL, "hash" text NOT NULL, "from" text NOT NULL, "to" text, "value" numeric NOT NULL, "sighash" text NOT NULL, CONSTRAINT "PK_c198fbcecf090f8fa9c2c8c1732" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_771f3b8c0bd09c85852de060c0" ON "call_to_aave" ("block") `)
        await db.query(`CREATE INDEX "IDX_9f30a97f842a5c194982963035" ON "call_to_aave" ("hash") `)
        await db.query(`CREATE INDEX "IDX_2fdb927c2603cd9ea76202fa71" ON "call_to_aave" ("from") `)
        await db.query(`CREATE INDEX "IDX_819757567ebc703ff073fb0126" ON "call_to_aave" ("to") `)
        await db.query(`CREATE INDEX "IDX_ab5647ef614236fdd387d45622" ON "call_to_aave" ("sighash") `)
        await db.query(`ALTER TABLE "event_caused_by_aave_call" ADD CONSTRAINT "FK_f8b85638d6e57dd026bcaa5c78a" FOREIGN KEY ("call_id") REFERENCES "call_to_aave"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "event_caused_by_aave_call"`)
        await db.query(`DROP INDEX "public"."IDX_f8b85638d6e57dd026bcaa5c78"`)
        await db.query(`DROP INDEX "public"."IDX_422f7b36f7d2e945dc82b328ec"`)
        await db.query(`DROP INDEX "public"."IDX_9db310544ee9da0ff1e1cfa990"`)
        await db.query(`DROP INDEX "public"."IDX_c049581a717ea32ec4290c2956"`)
        await db.query(`DROP INDEX "public"."IDX_4f8f2542cba84e90b91be0cbff"`)
        await db.query(`DROP INDEX "public"."IDX_d03645c92f58cd6a0233341c06"`)
        await db.query(`DROP TABLE "call_to_aave"`)
        await db.query(`DROP INDEX "public"."IDX_771f3b8c0bd09c85852de060c0"`)
        await db.query(`DROP INDEX "public"."IDX_9f30a97f842a5c194982963035"`)
        await db.query(`DROP INDEX "public"."IDX_2fdb927c2603cd9ea76202fa71"`)
        await db.query(`DROP INDEX "public"."IDX_819757567ebc703ff073fb0126"`)
        await db.query(`DROP INDEX "public"."IDX_ab5647ef614236fdd387d45622"`)
        await db.query(`ALTER TABLE "event_caused_by_aave_call" DROP CONSTRAINT "FK_f8b85638d6e57dd026bcaa5c78a"`)
    }
}
