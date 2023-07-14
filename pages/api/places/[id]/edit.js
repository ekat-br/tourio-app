import { mutate } from "swr";

export default async function editPlace(place, id) {
  const response = await fetch(`/api/places/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(place),
  });

  if (response.ok) {
    mutate();
    Router.push("/");
  }
}
