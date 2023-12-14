
class VetementService {
    async getAllVetements(): Promise<VetementDto[]| null> {
        var vetements=[]
        // Logic to fetch all vetements
        return null;
    }

    async getVetementById(id: number): Promise<VetementDto | null> {
        // Logic to fetch a single vetement by id
        return null;
    }

    async createVetement(vetement: VetementDto): Promise<VetementDto| null> {
        // Logic to create a new vetement
        return null;
    }

    async deleteVetement(idVetement: number){

    }

    async updateVetement(vetement: VetementDto){

    }

    async addCategorieToVetement(idCategorie: number): Promise<VetementDto| null> {
        // Logic to create a new vetement
        return null;
    }

    async changeSellerToVetement(idSeller: number): Promise<VetementDto| null> {
        // Logic to create a new vetement
        return null;
    }
}
