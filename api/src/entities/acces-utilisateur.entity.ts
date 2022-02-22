import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface AccesSearch {
  id: number;
  nom: string;
  abbrev: string;
}

@Entity("AccesUtilisateur")
export class AccesUtilisateur extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("longtext", { name: "Nom" })
  nom: string;

  @Column("longtext", { name: "Abbrev" })
  abbrev: string;
}
