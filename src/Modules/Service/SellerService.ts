class SellerService {
    async getAllSellers(): Promise<SellerDto[]| null> {
        return null;
    }

    async getSellerById(id: number): Promise<SellerDto | null> {
        return null;
    }

    async createSeller(Seller: SellerDto): Promise<SellerDto| null> {
        return null;
    }

    async deleteSeller(idSeller: number) {
        // Logic to create a new Seller
    }

    async updateSeller(Seller: SellerDto) {
        // Logic to create a new Seller
    }

    async findNbreVetements(idSeller:number): Promise<Number> {
        // Logic to create a new Categorie
        return 0;
    }
}
