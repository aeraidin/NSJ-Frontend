import MainLayout from "@/components/Layout/MainLayout";
import HighestDiscountComplexs from "@/components/page/Landing/HighestDiscountComplexs";
import HighestRateComplexs from "@/components/page/Landing/HighestRateComplexs";
import RecomendedList from "@/components/page/Landing/RecomendedList";
import GetHighestDiscountComplexs from "@/util/hook/ssr/GetHighestDiscountComplexs";
import GetHighestRateComplexs from "@/util/hook/ssr/GetHighestRateComplexs";
import GetRecLis from "@/util/hook/ssr/GetRecLis";

export default async function Home() {
  const RecListData = await GetRecLis()
  const HighestRateComplexsData = await GetHighestRateComplexs()
  const HighestDiscountComplexsData = await GetHighestDiscountComplexs()
  return (
    <>
      <MainLayout >
        <div className="py-10  flex flex-col gap-12">
          <RecomendedList data={RecListData.value?.list} />
          <HighestDiscountComplexs data={HighestDiscountComplexsData.value?.list} />
          <HighestRateComplexs data={HighestRateComplexsData.value?.list} />
        </div>
      </MainLayout>
    </>
  );
}
