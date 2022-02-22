import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index("index_nom_livrable", ["nom"], {})
@Entity("Livrable")
export class Livrable {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "Nom", length: 400 })
  nom: string;

  @Column("varchar", { name: "Date", length: 200 })
  date: string;

  @Column("int", { name: "NoProjet" })
  noProjet: number;

  @Column("int", { name: "TotalHeureSoumission" })
  totalHeureSoumission: number;

  @Column("int", { name: "TotalMinuteSoumission" })
  totalMinuteSoumission: number;

  @Column("decimal", { name: "TotalNumSoumission", precision: 13, scale: 2 })
  totalNumSoumission: string;

  @Column("varchar", { name: "NosFactures", length: 500 })
  nosFactures: string;

  @Column("int", { name: "NoEtat", default: () => "'1'" })
  noEtat: number;
}
