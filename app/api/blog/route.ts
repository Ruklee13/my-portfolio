import BlogModel from "@/models/blog";


export async function GET(){
    try {
        const posts = await BlogModel.findAll({});
        return Response.json(posts);
    } catch(error) {
        console.log('something wrong in blog')
        return Response.json({ error: 'Failed to fetch images' }, { status: 500 })
    }

}