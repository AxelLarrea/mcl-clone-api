import supabase from "../db/supabase";

class ProductModel {
    async getSearch(query: string) {
        const { data, error } = await supabase
            .from('product')
            .select('name, image, price')
            .ilike('name', `%${query}%`) // ilike is case insensitive

        if (error) throw new Error(error.message);
        return data;
    }

    async getOne(id: string) {
        const { data, error } = await supabase
            .from('product')
            .select('*')
            .eq('product_id', id)
        
        if (error) throw new Error(error.message);
        return data;
    }
}

export default new ProductModel();
