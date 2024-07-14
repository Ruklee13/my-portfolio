import BlogModel from "@/models/blog";

export async function GET(req,{params}){
    const{id} = params;
    console.log("kjudshgfolsdhog",req)
    try {
        const post = await BlogModel.findOne({where:{id}});
        if(post){
            return Response.json(post)
        } else {
            return Response.json({error:'post not found'})
        }
    } catch(error) {
        return Response.json({error: 'fetch error'})
    }
}