export interface VetementDto {
    id: number;
    attributes?: {
      name: string;
      description: string;
      create_at: string;
      quantity: number;
      price: number;
      currency: string;
    }
  }
  