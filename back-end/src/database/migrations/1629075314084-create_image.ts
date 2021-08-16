import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImage1629075314084 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "images",
            columns: [
                {name: "id", type: "integer", unsigned: true, isPrimary: true, isGenerated: true , generationStrategy: "increment"},
                {name: "title", type: "varchar"},
                {name: "description", type: "varchar"},
                {name: "date", type: "datetime"},
                {name: "size", type: "varchar"},
                {name: "color", type: "varchar"},
                {name: "album_id", type: "integer"},
            ],
            foreignKeys:[
                {name:"images_albums", columnNames: ['album_id'], referencedTableName: 'albums', referencedColumnNames: ['id'], onUpdate:'CASCADE', onDelete: 'CASCADE'}
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('images')
    }

}
