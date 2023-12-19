import { FormControl, Validators } from "@angular/forms"

export interface Category{
    id: number,
    name: string
}

export const categoryFormInit =
{
  name: new FormControl('', Validators.required),
}