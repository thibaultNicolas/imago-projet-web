import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClientsController } from "./clients.controller";
import { ClientsService } from "./clients.service";
import { Clients } from "src/entities/clients.entity";
import { AuthModule } from "src/auth/auth.module";
import { JwtStrategy } from "src/auth/jwt.strategy";
import { PassportModule } from "@nestjs/passport";

@Module({
    imports: [TypeOrmModule.forFeature([Clients]), AuthModule],
    controllers: [ClientsController],
    providers: [ClientsService],
})
export class ClientsModule { }