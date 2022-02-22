import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EtatsController } from "./etat.controller";
import { EtatsService } from "./etat.service";
import { Etats } from "src/entities/etats.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Etats])],
    controllers: [EtatsController],
    providers: [EtatsService],
})
export class EtatsModule { }