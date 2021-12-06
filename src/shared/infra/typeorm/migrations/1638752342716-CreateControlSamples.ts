import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateControlSamples1638752342716 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "controls",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "cpf",
            type: "varchar",
          },
          {
            name: "birthday",
            type: "timestamp",
          },
          {
            name: "genre",
            type: "varchar",
          },
          {
            name: "joinvasc_id",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "tags",
            type: "boolean",
          },
          {
            name: "toast",
            type: "varchar",
          },
          {
            name: "receipt_date",
            type: "timestamp",
          },
          {
            name: "flask_qtd",
            type: "numeric",
          },
          {
            name: "approx_amount",
            type: "numeric",
          },
          {
            name: "presented_by",
            type: "varchar",
          },
          {
            name: "receipt_by",
            type: "varchar",
          },
          {
            name: "sample_status",
            type: "varchar",
          },
          {
            name: "collected_by",
            type: "varchar",
          },
          {
            name: "collection_date",
            type: "timestamp",
          },
          {
            name: "quantification_date",
            type: "timestamp",
          },
          {
            name: "a260nm",
            type: "numeric",
          },
          {
            name: "a280nm",
            type: "numeric",
          },
          {
            name: "concentration",
            type: "numeric",
          },
          {
            name: "purity",
            type: "numeric",
          },
          {
            name: "freezing_date",
            type: "timestamp",
          },
          {
            name: "freezer_minus20",
            type: "varchar",
          },
          {
            name: "freezer_minus80",
            type: "varchar",
          },
          {
            name: "observation_one",
            type: "varchar",
          },
          {
            name: "observation_two",
            type: "varchar",
          },
          {
            name: "pcr_date",
            type: "timestamp",
          },
          {
            name: "amplicon_number",
            type: "numeric",
          },
          {
            name: "result",
            type: "varchar",
          },
          {
            name: "choice_reason",
            type: "varchar",
          },
          {
            name: "patient_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKPatientSample",
            referencedTableName: "patients",
            referencedColumnNames: ["id"],
            columnNames: ["patient_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("controls");
  }
}
