import { BaseEntity, Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

export interface ClientSearch {
  id: number;
  name: string;
}

@Index("index_nom_client", ["nom"], {})
@Entity("Clients")
export class Clients extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "No" })
  no: number;

  @Column("varchar", { name: "NoInterne", length: 200 })
  noInterne: string;

  @Column("varchar", { name: "Nom", length: 200 })
  nom: string;

  @Column("varchar", { name: "Rue", length: 200 })
  rue: string;

  @Column("varchar", { name: "Ville", length: 200 })
  ville: string;

  @Column("varchar", { name: "CodePostal", length: 200 })
  codePostal: string;

  @Column("varchar", { name: "CodePostal2", length: 200 })
  codePostal2: string;

  @Column("varchar", { name: "Region", length: 200 })
  region: string;

  @Column("varchar", { name: "Pays", length: 200 })
  pays: string;

  @Column("varchar", { name: "IndicatifTel", length: 200 })
  indicatifTel: string;

  @Column("varchar", { name: "EchTel", length: 200 })
  echTel: string;

  @Column("varchar", { name: "NumeroTel", length: 200 })
  numeroTel: string;

  @Column("varchar", { name: "PosteTel", length: 200 })
  posteTel: string;

  @Column("varchar", { name: "FreeIndicatifTel", length: 200 })
  freeIndicatifTel: string;

  @Column("varchar", { name: "FreeEchTel", length: 200 })
  freeEchTel: string;

  @Column("varchar", { name: "FreeNumeroTel", length: 200 })
  freeNumeroTel: string;

  @Column("varchar", { name: "FreePosteTel", length: 200 })
  freePosteTel: string;

  @Column("varchar", { name: "FaxIndicatif", length: 200 })
  faxIndicatif: string;

  @Column("varchar", { name: "FaxEch", length: 200 })
  faxEch: string;

  @Column("varchar", { name: "FaxNumero", length: 200 })
  faxNumero: string;

  @Column("varchar", { name: "Courriel", length: 200 })
  courriel: string;

  @Column("varchar", { name: "Website", length: 200 })
  website: string;

  @Column("int", { name: "NoChargeProjet" })
  noChargeProjet: number;
}
