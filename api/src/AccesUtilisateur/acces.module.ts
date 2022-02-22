import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccesUtilisateurController } from "./acces.controller";
import { AccesService } from "./acces.service";
import { AccesUtilisateur } from "../entities/acces-utilisateur.entity";

@Module({
    imports: [TypeOrmModule.forFeature([AccesUtilisateur])],
    controllers: [AccesUtilisateurController],
    providers: [AccesService],
})
export class AccesModule { }