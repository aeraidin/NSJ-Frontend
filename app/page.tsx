import MainLayout from "@/components/Layout/MainLayout";
import HighestRateComplexs from "@/components/page/Landing/HighestRateComplexs";
import RecomendedList from "@/components/page/Landing/RecomendedList";
import GetHighestRateComplexs from "@/util/hook/GetHighestRateComplexs";
import GetRecLis from "@/util/hook/GetRecLis";

export default async function Home() {
  const RecListData = await GetRecLis()
  const HighestRateComplexsData = await GetHighestRateComplexs()
  return (
    <>
      <MainLayout >
        <div className="py-10 flex flex-col">
          <RecomendedList data={RecListData.value?.list} />
          <HighestRateComplexs data={HighestRateComplexsData.value?.list} />
        </div>
      </MainLayout>
    </>
  );
}
