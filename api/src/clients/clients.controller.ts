import { Body, Controller, Get, Param, Put, Post, Delete, UseGuards } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { Clients, ClientSearch } from '../entities/clients.entity'
import { AuthGuard } from '@nestjs/passport';

@Controller('clients')
@UseGuards(AuthGuard())
export class ClientsController {
    constructor(private readonly clientService: ClientsService) { }
    @Get()
    public async findAll(): Promise<ClientSearch[]> {
        const client = await this.clientService.getClients();
        return client.map(n => {
            return {
                id: n.no,
                name: n.nom,
                noInterne: n.noInterne,
                rue: n.rue,
                ville: n.ville,
                codePostal: n.codePostal,
                codePostal2: n.codePostal2,
                region: n.region,
                pays: n.pays,
                indicatifTel: n.indicatifTel,
                echTel: n.echTel,
                numeroTel: n.numeroTel,
                posteTel: n.posteTel,
                freeIndicatifTel: n.freeIndicatifTel,
                freeEchTel: n.freeEchTel,
                freeNumeroTel: n.freeNumeroTel,
                faxIndicatif: n.faxIndicatif,
                faxEch: n.faxEch,
                faxNumero: n.faxNumero,
                courriel: n.courriel,
                website: n.website,
                noChargeProjet: n.no

            } as ClientSearch
        })
    }

    @Get(':id')
    public async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.clientService.findOne(id);
    }

    @Post()
    public async create(@Body() client: Clients) {
        return this.clientService.createClient(client);
    }

    @Put(':id')
    public async editClient(@Body() client: Clients, @Param('id', ParseIntPipe) id: number): Promise<Clients> {
        const clientEdited = await this.clientService.editClient(id, client);
        return clientEdited;
    }

    @Delete(':id')
    public async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        this.clientService.remove(id);
    }
}
