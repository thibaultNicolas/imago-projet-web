import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AccesModule } from './AccesUtilisateur/acces.module';
import { EtatsModule } from './etat/etat.module';
import { FichierModule } from './fichier/fichier.module';
import { FichierProjetModule } from './fichier-projet/fichier-projet.module';
import { AuthModule } from './auth/auth.module';
import { AccesUtilisateur, Clients, Etats, Fichier, FichierProjet, HistoriqueAvisCourriel, Indice, IndiceProjet, Livrable, Projet, Temps, User, Utilisateur } from './entities';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    EtatsModule,
    FichierModule,
    FichierProjetModule,
    AuthModule,
    ClientsModule,
    AccesModule
  ],

})
export class AppModule { }
