/** @format */

export default async function CustomFetch(url: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
      // next: { revalidate: 10 },
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // "Cache-Control": "public, s-maxage=1",
        // "CDN-Cache-Control": "public, s-maxage=60",
        // "CDN-Cache-Control": "public, s-maxage=10",
        // "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
        // "Vercel-CDN-Cache-Control": "public, s-maxage=10",
      },
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
