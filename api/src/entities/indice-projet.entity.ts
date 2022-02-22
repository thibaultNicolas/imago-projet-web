import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("IndiceProjet")
export class IndiceProjet {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("int", { name: "Indice", default: () => "'0'" })
  indice: number;
}
