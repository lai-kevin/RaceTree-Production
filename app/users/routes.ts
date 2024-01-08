import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  try {
    // If id is provided, return the game with that id
    if (id) {
      
    }

    // If name is provided, return the game with that name
    if (name) {
      
    }

    
    return Response.json(games, { status: 200 });
  } catch (error) {
    // Handle errors
    console.error("Error fetching Game:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  } finally {
    // Close the Prisma Client connection
    await prisma.$disconnect();
  }
}

