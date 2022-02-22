import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Unique } from "typeorm";

export class AuthSignUpDto {
    @IsString()
    prenom: string;

    @IsString()
    nom: string;

    @IsEmail()
    courriel: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(8)
    @MaxLength(32)
    @IsNotEmpty()
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Password is too weak'
    })
    password: string;

    @IsString()
    noAcces: number;

    @IsString()
    indInactif: string;

    @IsString()
    indAccesFichierEnteteProjet: string;

    @IsString()
    indDispoListeChargesProjet: string;
}