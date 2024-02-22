import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
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
