import dbConnect from "@/db/models/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Place.find();
    response.status(200).json(places);
    return;
  }

  if (request.method === "POST") {
    const newPlace = request.body;

    console.log(newPlace);

    await Place.create(newPlace);

    response.status(200).json({ status: "Place created." });
    return;
  }

  response.status(405).json({ status: "Request method not implemented." });
}
