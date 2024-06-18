import MainLayout from "@/components/Layout/MainLayout";
import FirstPartBanner from "@/components/page/Landing/FirstPartBanner";
import ForthPartBanner from "@/components/page/Landing/ForthPartBanner";
import HighestDiscountComplexs from "@/components/page/Landing/HighestDiscountComplexs";
import HighestRateComplexs from "@/components/page/Landing/HighestRateComplexs";
import Questions from "@/components/page/Landing/Questions";
import RandomCategory from "@/components/page/Landing/RandomCategory";
import RecomendedList from "@/components/page/Landing/RecomendedList";
import SecondPartBanner from "@/components/page/Landing/SecondPartBanner";
import ThirdPartBanner from "@/components/page/Landing/ThirdPartBanner";
import GetHighestDiscountComplexs from "@/util/hook/ssr/GetHighestDiscountComplexs";
import GetHighestRateComplexs from "@/util/hook/ssr/GetHighestRateComplexs";
import GetRecLis from "@/util/hook/ssr/GetRecLis";

export default async function Home() {
  const RecListData = await GetRecLis();
  const HighestRateComplexsData = await GetHighestRateComplexs();
  const HighestDiscountComplexsData = await GetHighestDiscountComplexs();
  return (
    <>
      <MainLayout>
        <div className="py-10 flex flex-col gap-12">
          <div className="pb-10">
            <FirstPartBanner />
          </div>
          <RecomendedList data={RecListData?.value.list} />
          <HighestDiscountComplexs
            data={HighestDiscountComplexsData?.value.list}
          />
          <SecondPartBanner />
          <HighestRateComplexs data={HighestRateComplexsData?.value.list} />
          <ThirdPartBanner />
          <RandomCategory />
          <ForthPartBanner />
          <Questions />
        </div>
      </MainLayout>
    </>
  );
}
