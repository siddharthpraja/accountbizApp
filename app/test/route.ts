import { data } from "./data";

// Show All data from any api or backend
export async function GET() {
    return Response.json(data)
}

// Create single data
// export async function POST(req: Request) {
//     const newData = await req.json();
//     const upload = {
//         id: data.length + 1,
//         text: newData.text
//     };
//     data.push(upload);

//     return new Response(JSON.stringify(upload), { status: 201 });
// }


// Create Multiple data
export async function POST(req: Request) {
    const newData = await req.json();
    const upload = {
        id: data.length + 1,
        text: newData.text,
        new: newData.new,
    };
    data.push(upload);

    return new Response(JSON.stringify(upload), { status: 201 });
}


