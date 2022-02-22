import { Body, Controller, Get, Param, Put, Post, Delete } from '@nestjs/common';
import { EtatsService } from './etat.service';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { Etats, EtatSearch } from '../entities/etats.entity'

@Controller('etats')
export class EtatsController {
    constructor(private readonly etatService: EtatsService) { }
    @Get()
    public async findAll(): Promise<EtatSearch[]> {
        const etat = await this.etatService.getEtats();
        return etat.map(n => {
            return {
                id: n.id,
                nom: n.nom,

            } as EtatSearch
        })
    }

    @Get(':id')
    public async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.etatService.findOne(id);
    }

    @Post()
    public async create(@Body() etat: Etats) {
        return this.etatService.createEtat(etat);
    }

    @Put(':id')
    public async editEtat(@Body() etat: Etats, @Param('id', ParseIntPipe) id: number): Promise<Etats> {
        const etatEdited = await this.etatService.editEtat(id, etat);
        return etatEdited;
    }

    @Delete(':id')
    public async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        this.etatService.remove(id);
    }
}
