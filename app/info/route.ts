import { getPlayerSummary } from "@/src/utils/steam";
/**
 * Handles the GET request for retrieving player information.
 * @param request - The request object.
 * @returns A Promise that resolves to a Response object.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const steam_ids = searchParams.get("steam_ids");
  if (!steam_ids) {
    return Response.json({ message: "No steam_ids provided" }, { status: 404 });
  }
  const data = await getPlayerSummary(steam_ids);
  if (!data) {
    return Response.json({ message: "No player found" }, { status: 404 });
  }
  
  return Response.json(data, { status: 200 });
}
