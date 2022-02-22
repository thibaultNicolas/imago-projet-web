import { BaseEntity, Column, Entity, Index, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity("Utilisateur")
@Unique(['id', 'username'])
export class Utilisateur extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("longtext", { name: "Prenom" })
  prenom: string;

  @Column("longtext", { name: "Nom" })
  nom: string;

  @Column("longtext", { name: "Courriel" })
  courriel: string;

  @Column({
    type: "varchar",
    length: 150,
    unique: true, name: "Username"
  })
  username: string;

  @Column("longtext", { name: "Password" })
  password: string;

  @Column("int", { name: "NoAcces", default: () => "'0'" })
  noAcces: number;

  @Column("varchar", {
    name: "IndInactif",
    length: 5,
    default: () => "'false'",
  })
  indInactif: string;

  @Column("varchar", {
    name: "IndAccesFichierEnteteProjet",
    length: 5,
    default: () => "'false'",
  })
  indAccesFichierEnteteProjet: string;

  @Column("varchar", {
    name: "IndDispoListeChargesProjet",
    length: 5,
    default: () => "'false'",
  })
  indDispoListeChargesProjet: string;
}
