import MainLayout from "@/components/Layout/MainLayout";
import RecomendedList from "@/components/page/Landing/RecomendedList";
import GetRecLis from "@/util/hook/GetRecLis";

export default async function Home() {
  const RecListData = await GetRecLis()
  return (
    <>
      <MainLayout >
        <div className="py-10 flex flex-col">
          <RecomendedList data={RecListData.value?.list} />
        </div>
      </MainLayout>
    </>
  );
}
