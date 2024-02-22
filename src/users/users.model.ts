import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'BT_TM_USUARIO',
  timestamps: false,
})
export class User extends Model {
  @Column({ primaryKey: true })
  ID_USUARIO: number;

  @Column
  NO_NOMBRE: string;

  @Column
  AP_APELLIDO_PATERNO: string;

  @Column
  AP_APELLIDO_MATERNO: string;

  @Column
  URL_IMAGEN: string;

  @Column
  USUARIO: string;

  @Column
  PASSWORD: string;
}
