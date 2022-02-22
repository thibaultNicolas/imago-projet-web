import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface FichierSearch {
  id: number;
  nom: string;
}

@Entity("Fichier")
export class Fichier extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("longtext", { name: "Nom" })
  nom: string;

  @Column("int", { name: "NumeroProjet", default: () => "'0'" })
  numeroProjet: number;
}
