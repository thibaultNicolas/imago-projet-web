import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Etats } from '../entities/etats.entity';


@Injectable()
export class EtatsService {
    constructor(
        @InjectRepository(Etats) private clientRepository: Repository<Etats>,
    ) { }

    public async getEtats(): Promise<Etats[]> {
        return await this.clientRepository.find();
    }

    public async findOne(id: number): Promise<Etats> {
        return this.clientRepository.findOne(id);
    }

    public async createEtat(client: Etats): Promise<Etats> {
        return this.clientRepository.save(client);
    }

    public async remove(id: number): Promise<void> {
        await this.clientRepository.delete(id);
    }

    public async editEtat(no: number, client: Etats): Promise<Etats> {
        const editedEtat = await this.clientRepository.findOne(no);
        if (!editedEtat) {
            throw new NotFoundException('client is not found');
        }
        // console.log(editedEtat);

        editedEtat.nom = client.nom;
        await editedEtat.save({ reload: true });
        return editedEtat;
    }
}
