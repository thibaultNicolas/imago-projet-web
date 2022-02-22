import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("FichierProjet")
export class FichierProjet {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "Fichier", length: 200 })
  fichier: string;

  @Column("varchar", { name: "Description", length: 500 })
  description: string;

  @Column("datetime", { name: "Date" })
  date: Date;

  @Column("varchar", { name: "NumeroProjet", length: 200 })
  numeroProjet: string;
}
