import supabase from "../db/supabase";
import { products } from "../data/initial_data";

const populateDb = () => {

    products.forEach(async (product) => {
        try {
            const { comments, specs, ...productData } = product;
            const product_id = productData.product_id;

            const commentsWithProductId = comments.map((comment) => {
                return {
                    comment,
                    product_id: product_id
                }
            })

            const specsWithProductId = {
                ...specs,
                product_id: product_id
            }

            // Insert product
            const { error } = await supabase
                .from('product')
                .insert(productData)
                
            if (error) throw new Error(error.message);
            console.log('Product added');

            // Insert specs
            const { error: specsError } = await supabase
                .from('spec')
                .insert(specsWithProductId) 
            
            if (specsError) throw new Error(specsError.message);
            console.log('Specs added');

            // Insert comments
            commentsWithProductId.forEach(async (comment) => {
                const { error: commentError } = await supabase
                    .from('comment')
                    .insert(comment)
                
                if (commentError) throw new Error(commentError.message);
                console.log('Comment added');
            })
        }
        catch (error) {
            console.log('Error', error);
        }
    })
}

populateDb();