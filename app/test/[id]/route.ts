import { data } from "../data";

// single product page by [id]
export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const singleData = data.find((item) => item.id === parseInt(params.id)); // same in all
  return Response.json(singleData);
}

// Update Single data with [ID]
// export async function PATCH(req: Request, { params }: { params: { id: string } }) {
//   const newData = await req.json();
//   const { text } = newData;
//   const index = data.findIndex((item) => item.id === parseInt(params.id));
//     data[index].text = text;
//     return Response.json(data[index]);
// }

// Update Muliple data with [ID]
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const newData = await req.json();
  const index = data.findIndex((item) => item.id === parseInt(params.id)); // same in all Find Index only
  Object.assign(data[index], newData);

  return Response.json(data[index]);
}



// Delete Data with [ID]
export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const index = data.findIndex((item) => item.id === parseInt(params.id)); // same in all id
  const deletedItem = data.splice(index, 1);
  return Response.json(deletedItem);
}
