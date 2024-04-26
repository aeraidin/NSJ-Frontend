/** @format */

export default async function CustomFetch(url: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${url}`, {
      // next: { revalidate: 10 },
      cache: "no-store",
      headers: {
        // "Cache-Control": "public, s-maxage=1",
        // "CDN-Cache-Control": "public, s-maxage=60",
        // "CDN-Cache-Control": "public, s-maxage=10",
        // "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
        // "Vercel-CDN-Cache-Control": "public, s-maxage=10",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to Get data From Server");
    }
    console.log("====================================");
    console.log(res.json());
    console.log("====================================");
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
