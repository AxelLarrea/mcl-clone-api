export interface ProductType {
    product_id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    category: Category;
    quantity: number;
    seller: string;
    rating: number;
    internationalShipping: boolean;
    city: string;
    condition: Condition;
    brand: string;
    comments: string[];
    specs: ProductSpecs;
}

type Condition = "New" | "Used";

type Category = "Keyboard" | "Mouse" | "Headphones" | "Gaming" | "Phones" | "Monitor" | "Hardware";

type ProductSpecs = {
    color?: string;
    weight?: string;
    model?: string;
}
