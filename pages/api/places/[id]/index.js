import Place from "@/db/models/Place";
import dbConnect from "@/db/models/connect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Place.findById(id);

    console.log(id);
    console.log(place);

    if (!place) {
      response.status(404).json({ status: "Place not found." });
      return;
    }

    response.status(200).json(place);
    return;
  }

  if (request.method === "PATCH") {
    const newPlace = request.body;

    await Place.findByIdAndUpdate(id, {
      name: newPlace.name,
      location: newPlace.location,
      image: newPlace.image,
      mapURL: newPlace.mapURL,
      description: newPlace.description,
    });

    response.status(200).json({ status: "Place updated." });
    return;
  }

  if (request.method === "DELETE") {
    await Place.findByIdAndDelete(id);

    response.status(200).json({ status: "Place deleted." });
    return;
  }

  response.status(405).json({ status: "Request method not implemented." });
}
