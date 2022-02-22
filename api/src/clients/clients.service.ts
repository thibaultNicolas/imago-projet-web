import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clients } from '../entities/clients.entity';


@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(Clients) private clientRepository: Repository<Clients>,
    ) { }

    public async getClients(): Promise<Clients[]> {
        return await this.clientRepository.find();
    }

    public async findOne(id: number): Promise<Clients> {
        return this.clientRepository.findOne(id);
    }

    public async createClient(client: Clients): Promise<Clients> {
        return this.clientRepository.save(client);
    }

    public async remove(id: number): Promise<void> {
        await this.clientRepository.delete(id);
    }

    public async editClient(no: number, client: Clients): Promise<Clients> {
        const editedClient = await this.clientRepository.findOne(no);
        if (!editedClient) {
            throw new NotFoundException('client is not found');
        }
        // console.log(editedClient);

        editedClient.nom = client.nom;
        editedClient.noInterne = client.noInterne;
        editedClient.rue = client.rue;
        editedClient.ville = client.ville;
        editedClient.codePostal = client.codePostal;
        editedClient.codePostal2 = client.codePostal2;
        editedClient.region = client.region;
        editedClient.pays = client.pays;
        editedClient.indicatifTel = client.indicatifTel;
        editedClient.echTel = client.echTel;
        editedClient.numeroTel = client.numeroTel;
        editedClient.posteTel = client.posteTel;
        editedClient.freeIndicatifTel = client.freeIndicatifTel;
        editedClient.freeEchTel = client.freeEchTel;
        editedClient.freeNumeroTel = client.freeNumeroTel;
        editedClient.freePosteTel = client.freePosteTel;
        editedClient.faxIndicatif = client.faxIndicatif;
        editedClient.faxEch = client.faxEch;
        editedClient.faxNumero = client.faxNumero;
        editedClient.courriel = client.courriel;
        editedClient.website = client.website;
        editedClient.noChargeProjet = client.noChargeProjet;
        await editedClient.save({ reload: true });
        return editedClient;
    }
}
