import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index("index_nom_projet", ["nom"], {})
@Entity("Projet")
export class Projet {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("varchar", { name: "Nom", length: 400 })
  nom: string;

  @Column("varchar", { name: "NomContact", length: 200 })
  nomContact: string;

  @Column("varchar", { name: "TelIndicatifContact", length: 200 })
  telIndicatifContact: string;

  @Column("varchar", { name: "TelEchContact", length: 200 })
  telEchContact: string;

  @Column("varchar", { name: "TelNoContact", length: 200 })
  telNoContact: string;

  @Column("varchar", { name: "TelPosteContact", length: 200 })
  telPosteContact: string;

  @Column("varchar", { name: "CourrielContact", length: 200 })
  courrielContact: string;

  @Column("int", { name: "NoChargeProjet", default: () => "'0'" })
  noChargeProjet: number;

  @Column("varchar", { name: "DateOuverture", length: 200 })
  dateOuverture: string;

  @Column("varchar", { name: "DateFermeture", length: 200 })
  dateFermeture: string;

  @Column("varchar", { name: "NosFacture", length: 500 })
  nosFacture: string;

  @Column("longtext", { name: "Description" })
  description: string;

  @Column("longtext", { name: "FichierSoumission" })
  fichierSoumission: string;

  @Column("longtext", { name: "TotalPrixSoumission" })
  totalPrixSoumission: string;

  @Column("int", { name: "TotalHeureSoumission", default: () => "'0'" })
  totalHeureSoumission: number;

  @Column("int", { name: "TotalMinutesSoumission", default: () => "'0'" })
  totalMinutesSoumission: number;

  @Column("decimal", {
    name: "TotalNumSoumission",
    precision: 13,
    scale: 2,
    default: () => "'0.00'",
  })
  totalNumSoumission: string;

  @Column("int", { name: "NoClient", default: () => "'0'" })
  noClient: number;

  @Column("varchar", {
    name: "IndLivrable",
    length: 5,
    default: () => "'false'",
  })
  indLivrable: string;

  @Column("varchar", {
    name: "IndArchive",
    length: 5,
    default: () => "'false'",
  })
  indArchive: string;

  @Column("varchar", {
    name: "ToNotCharge",
    length: 5,
    default: () => "'false'",
  })
  toNotCharge: string;

  @Column("varchar", { name: "Backup", length: 200 })
  backup: string;
}
