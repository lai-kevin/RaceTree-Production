import { getOwnedGames } from "@/src/utils/steam";

/**
 * Retrieves the owned games for a given Steam ID.
 * 
 * @param request - The incoming request object.
 * @returns A JSON response containing the owned games data.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const steam_id = searchParams.get("steam_id");
  if (!steam_id) {
    return Response.json({ message: "No steam_id provided" }, { status: 404 });
  }
  const data = await getOwnedGames(steam_id);
  if (!data) {
    return Response.json({ message: "No owned games found" }, { status: 404 });
  }
  
  return Response.json(data, { status: 200 });
}
