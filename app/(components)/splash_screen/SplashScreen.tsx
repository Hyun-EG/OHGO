"use client";

import p_json from "@/package.json";

const SplashScreen = () => {
  return (
    <section className="w-full min-h-screen p-4 flex flex-col justify-between">
      <main className="flex flex-1 justify-center items-center ">
        <h1 className="text-7xl font-bold">
          OH, G<span className="inline-block animate-bounce">O</span>!
        </h1>
      </main>
      <footer>
        <p className="text-center">
          version
          <span className="font-bold"> {p_json.version}</span>
        </p>
        <p className="text-center">© 2025 parkseonghyun all right reserved</p>
      </footer>
    </section>
  );
};

export default SplashScreen;
