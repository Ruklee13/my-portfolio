import sequelize from "@/utils/sequalize";
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbconnect";
import ImageModel from "@/models/image";
import { process_image } from "@/utils/Compress"; 
import sharp from "sharp";


export async function GET() {
  try {
    // Retrieve all images from the database
    const res = await ImageModel.findAll({});

    // Transform the images into the desired format
    const transformer = await Promise.all(res.map(async image => {
      // Convert image data to WebP format
      const webpData = await sharp(image.data)
        .resize(500,500)
        .webp()
        .toBuffer();

      return {
        id: image.id,
        filename: image.filename,
        data: webpData.toString('base64'), // Convert WebP data to base64
        mimetype: 'image/webp', // Update mimetype to reflect WebP format
        created_at: image.created_at
      };
    }));

    // Log the first transformed image for debugging
    //console.log(transformer[0]);

    // Return the transformed images as a JSON response
    return Response.json(transformer);
  } catch (error) {
    console.error('Error fetching or transforming images:', error);
    return Response.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}