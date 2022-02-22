import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthSignUpDto } from './dto/auth-signup.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload-interface';
import { AuthSignInDto } from './dto/auth-signin.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository,
        private jwtService: JwtService,
    ) { }


    async signUp(authCreadentialsDto: AuthSignUpDto): Promise<void> {
        return this.usersRepository.createUser(authCreadentialsDto);
    }

    async signin(authCreadentialsDto: AuthSignInDto): Promise<{ accesToken: string }> {
        const { username, password } = authCreadentialsDto;
        const user = await this.usersRepository.findOne({ username });
        console.log(user);

        if (user && (await bcrypt.compare(password, user.password))) {
            const payload: JwtPayload = { username };
            const accesToken: string = await this.jwtService.sign(payload);

            return { accesToken };
        }
        else {
            throw new UnauthorizedException('Please check your login credentials');
        }
    }
}
