import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("HistoriqueAvisCourriel")
export class HistoriqueAvisCourriel {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("datetime", { name: "DateHeure" })
  dateHeure: Date;

  @Column("int", { name: "Pourcentage" })
  pourcentage: number;

  @Column("int", { name: "NoProjet" })
  noProjet: number;

  @Column("int", { name: "NoLivrable" })
  noLivrable: number;

  @Column("int", { name: "NoChargeProjet" })
  noChargeProjet: number;
}
