import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const CreateLinkForm = dynamic(() => import("../components/create-link"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      <h1 className=" flex flex-col justify-center items-center border-solid border-2 border-white-600 rounded-md bg-pink-500 py-1.5 px-4 font-black mt-9 bd-highlight italic text-white">Create Your shortlinks here !!!!</h1>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-300 text-white">

        <Suspense>
          <CreateLinkForm />
        </Suspense>
      </div>
    </div>



  );
};

export default Home;
