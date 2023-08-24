export interface Recipe {

    id?: number;
    title?: string | null;
    ingredients?: string;
    tags?: string | null;
    imageUrl?: string;
    cookingTime?: number | null;
    prepTime?: number | null;
    yield?: number;
    steps?: string;
    rating?:number;
    category?:string | null;

}

