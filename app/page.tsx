import MainLayout from "@/components/Layout/MainLayout";
import RecomendedList from "@/components/page/Landing/RecomendedList";

export default async function Home() {
  return (
    <>
      <MainLayout >
        <div className="py-10 flex flex-col">
          <RecomendedList />
        </div>
      </MainLayout>
    </>
  );
}
