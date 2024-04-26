import MainLayout from "@/components/Layout/MainLayout";
import GetRecLis from "@/util/hook/GetRecLis";

export default async function Home() {
  const data = await GetRecLis()
  return (
    <>
      <MainLayout>
        hi
      </MainLayout>
    </>
  );
}
