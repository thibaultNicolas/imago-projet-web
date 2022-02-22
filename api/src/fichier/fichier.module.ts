import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FichierController } from "./fichier.controller";
import { FichierService } from "./fichier.service";
import { Fichier } from "src/entities/fichier.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Fichier])],
    controllers: [FichierController],
    providers: [FichierService],
})
export class FichierModule { }
