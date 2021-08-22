import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createAlbums1629000378301 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "albums",
            columns: [
                {name: "id", type: "integer", unsigned: true, isPrimary: true, isGenerated: true , generationStrategy: "increment"},
                {name: "title", type: "varchar"},
                {name: "description", type: "varchar"},
                {name: "user_id", type: "interger"}
            ],
            foreignKeys: [
                {name:"user_album", columnNames: ['user_id'], referencedTableName: 'users', referencedColumnNames: ['id'], onUpdate:'CASCADE', onDelete: 'CASCADE'}
            ]
        }))
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('albums');
    }

}
