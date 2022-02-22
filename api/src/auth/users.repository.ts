import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { Utilisateur } from "src/entities/utilisateur.entity";
import { EntityRepository, Repository } from "typeorm";
import { AuthSignUpDto } from "./dto/auth-signup.dto";
import * as bcrypt from 'bcrypt';

@EntityRepository(Utilisateur)
export class UsersRepository extends Repository<Utilisateur>{
    async createUser(authCreadentialsDto: AuthSignUpDto): Promise<void> {
        const { prenom, nom, courriel, username, password, noAcces, indInactif, indAccesFichierEnteteProjet, indDispoListeChargesProjet } = authCreadentialsDto;


        //hash
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        //console.log('salt', salt);
        //console.log('hash', hashPassword);

        const user = this.create({ prenom, nom, courriel, username, password: hashPassword, noAcces, indInactif, indAccesFichierEnteteProjet, indDispoListeChargesProjet });


        try {
            await this.save(user);
        }

        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') { //Duplicate username
                throw new ConflictException('Username already exist');
            }
            else {
                throw new InternalServerErrorException();
            }
            //console.log(error.code);

        }

    }
}