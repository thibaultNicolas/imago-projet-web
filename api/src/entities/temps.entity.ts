import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index("index_no_projet", ["noProjet"], {})
@Index("index_duree_h_temps", ["dureeHeure"], {})
@Index("index_duree_m_temps", ["dureeMinutes"], {})
@Index("index_duree_num_temps", ["dureeNum"], {})
@Index("index_temps_h_facturable", ["heureFacturable"], {})
@Index("index_temps_m_facturable", ["minutesFacturable"], {})
@Index("index_temps_num_facturable", ["numFacturable"], {})
@Index("index_temps_h_non_facturable", ["heureNonFacturable"], {})
@Index("index_temps_m_non_facturable", ["minutesNonFacturable"], {})
@Index("index_temps_num_non_facturable", ["numNonFacturable"], {})
@Entity("Temps")
export class Temps {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("int", { name: "NoProjet", default: () => "'0'" })
  noProjet: number;

  @Column("int", { name: "NoUtilisateur", default: () => "'0'" })
  noUtilisateur: number;

  @Column("date", { name: "Date" })
  date: string;

  @Column("varchar", { name: "DureeHeure", length: 20 })
  dureeHeure: string;

  @Column("varchar", { name: "DureeMinutes", length: 20 })
  dureeMinutes: string;

  @Column("decimal", {
    name: "DureeNum",
    precision: 13,
    scale: 2,
    default: () => "'0.00'",
  })
  dureeNum: string;

  @Column("longtext", { name: "Description" })
  description: string;

  @Column("longtext", { name: "NotesInterne" })
  notesInterne: string;

  @Column("varchar", { name: "AFacture", length: 5, default: () => "'false'" })
  aFacture: string;

  @Column("varchar", {
    name: "IndFacture",
    length: 5,
    default: () => "'false'",
  })
  indFacture: string;

  @Column("longtext", { name: "TempsAFacturer" })
  tempsAFacturer: string;

  @Column("int", { name: "Approbateur", default: () => "'0'" })
  approbateur: number;

  @Column("varchar", { name: "IndFacturable", length: 5 })
  indFacturable: string;

  @Column("varchar", { name: "HeureFacturable", length: 20 })
  heureFacturable: string;

  @Column("varchar", { name: "MinutesFacturable", length: 20 })
  minutesFacturable: string;

  @Column("decimal", { name: "NumFacturable", precision: 13, scale: 2 })
  numFacturable: string;

  @Column("varchar", { name: "IndNonFacturable", length: 5 })
  indNonFacturable: string;

  @Column("varchar", { name: "HeureNonFacturable", length: 20 })
  heureNonFacturable: string;

  @Column("varchar", { name: "MinutesNonFacturable", length: 20 })
  minutesNonFacturable: string;

  @Column("decimal", { name: "NumNonFacturable", precision: 13, scale: 2 })
  numNonFacturable: string;

  @Column("int", { name: "NoLivrable" })
  noLivrable: number;

  @Column("timestamp", {
    name: "DateHeureTimeStamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  dateHeureTimeStamp: Date;
}
