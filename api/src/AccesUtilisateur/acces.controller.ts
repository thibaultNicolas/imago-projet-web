import { Body, Controller, Get, Param, Put, Post, Delete } from '@nestjs/common';
import { AccesService } from './acces.service';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { AccesUtilisateur, AccesSearch } from '../entities/acces-utilisateur.entity'

@Controller('accesUtilisateur')
export class AccesUtilisateurController {
    constructor(private readonly accesService: AccesService) { }
    @Get()
    public async findAll(): Promise<AccesSearch[]> {
        const acces = await this.accesService.getAcces();
        return acces.map(n => {
            return {
                id: n.id,
                nom: n.nom,
                abbrev: n.abbrev,
            } as AccesSearch
        })
    }

    @Get(':id')
    public async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.accesService.findOne(id);
    }

    @Post()
    public async create(@Body() acces: AccesUtilisateur) {
        return this.accesService.createAcces(acces);
    }

    @Put(':id')
    public async editAcces(@Body() acces: AccesUtilisateur, @Param('id', ParseIntPipe) id: number): Promise<AccesUtilisateur> {
        const accesEdited = await this.accesService.editAcces(id, acces);
        return accesEdited;
    }

    @Delete(':id')
    public async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        this.accesService.remove(id);
    }
}
