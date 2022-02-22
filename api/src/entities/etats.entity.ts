import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface EtatSearch {
  id: number;
  nom: string;
}

@Entity("Etat")
export class Etats extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("longtext", { name: "Nom" })
  nom: string;
}
