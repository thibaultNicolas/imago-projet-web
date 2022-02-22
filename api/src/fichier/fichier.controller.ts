import { Body, Controller, Get, Param, Put, Post, Delete } from '@nestjs/common';
import { FichierService } from './fichier.service';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { Fichier, FichierSearch } from '../entities/fichier.entity'

@Controller('fichiers')
export class FichierController {
    constructor(private readonly fichierService: FichierService) { }
    @Get()
    public async findAll(): Promise<FichierSearch[]> {
        const fichier = await this.fichierService.getFichier();
        return fichier.map(n => {
            return {
                id: n.id,
                nom: n.nom,
                noProjet: n.numeroProjet,


            } as FichierSearch
        })
    }

    @Get(':id')
    public async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.fichierService.findOne(id);
    }

    @Post()
    public async create(@Body() fichier: Fichier) {
        return this.fichierService.createFichier(fichier);
    }

    @Put(':id')
    public async editFichier(@Body() fichier: Fichier, @Param('id', ParseIntPipe) id: number): Promise<Fichier> {
        const fichierEdited = await this.fichierService.editFichier(id, fichier);
        return fichierEdited;
    }

    @Delete(':id')
    public async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        this.fichierService.remove(id);
    }
}
