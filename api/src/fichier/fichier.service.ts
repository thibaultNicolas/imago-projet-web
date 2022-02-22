import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fichier } from '../entities/fichier.entity';


@Injectable()
export class FichierService {
    constructor(
        @InjectRepository(Fichier) private fichierRepository: Repository<Fichier>,
    ) { }

    public async getFichier(): Promise<Fichier[]> {
        return await this.fichierRepository.find();
    }

    public async findOne(id: number): Promise<Fichier> {
        return this.fichierRepository.findOne(id);
    }

    public async createFichier(fichier: Fichier): Promise<Fichier> {
        return this.fichierRepository.save(fichier);
    }

    public async remove(id: number): Promise<void> {
        await this.fichierRepository.delete(id);
    }

    public async editFichier(no: number, fichier: Fichier): Promise<Fichier> {
        const editedFichier = await this.fichierRepository.findOne(no);
        if (!editedFichier) {
            throw new NotFoundException('fichier is not found');
        }
        // console.log(editedFichier);

        editedFichier.nom = fichier.nom;
        editedFichier.numeroProjet = fichier.numeroProjet;

        await editedFichier.save({ reload: true });
        return editedFichier;
    }
}
