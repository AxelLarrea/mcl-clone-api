import supabase from "../db/supabase";

class ProductModel {
    async getSearch(query: string) {
        const { data, error } = await supabase
            .from('product')
            .select(`
                product_id
                ,name
                ,price
                ,image
                ,category
                ,seller
                ,rating
                ,internationalShipping
                ,city
                ,condition
                ,brand
                ,spec(color)
            `) // join con tabla spec
            .ilike('name', `%${query}%`) // ilike es case insensitive

        if (error) throw new Error(error.message);
        return data;
    }

    async getOne(id: string) {
        const { data, error } = await supabase
            .from('product')
            .select(`
                product_id
                ,name
                ,price
                ,image
                ,category
                ,seller
                ,rating
                ,internationalShipping
                ,city
                ,condition
                ,brand
                ,spec(color, weight, model)
                ,comment(comment)
            `)
            .eq('product_id', id)
        
        if (error) throw new Error(error.message);
        return data;
    }
}

export default new ProductModel();
