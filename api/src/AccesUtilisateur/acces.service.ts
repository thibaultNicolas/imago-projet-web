import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccesUtilisateur } from '../entities/acces-utilisateur.entity';


@Injectable()
export class AccesService {
    constructor(
        @InjectRepository(AccesUtilisateur) private accesRepository: Repository<AccesUtilisateur>,
    ) { }

    public async getAcces(): Promise<AccesUtilisateur[]> {
        return await this.accesRepository.find();
    }

    public async findOne(id: number): Promise<AccesUtilisateur> {
        return this.accesRepository.findOne(id);
    }

    public async createAcces(acces: AccesUtilisateur): Promise<AccesUtilisateur> {
        return this.accesRepository.save(acces);
    }

    public async remove(id: number): Promise<void> {
        await this.accesRepository.delete(id);
    }

    public async editAcces(no: number, acces: AccesUtilisateur): Promise<AccesUtilisateur> {
        const editedAcces = await this.accesRepository.findOne(no);
        if (!editedAcces) {
            throw new NotFoundException('acces is not found');
        }

        editedAcces.nom = acces.nom;
        editedAcces.abbrev = acces.abbrev;
        await editedAcces.save({});
        return editedAcces;
    }
}
