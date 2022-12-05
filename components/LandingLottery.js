import Head from "next/head";

export default function LandingLottery({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Online CoWork</title>
        <meta
          name="description"
          content="The virtual office for women who work online"
        />
      </Head>
      <section className="py-16">
        <div className="w-full md:w-11/12 text-left">
          <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span>The Online CoWork </span>
            <span className="text-gray-300">Lottery!</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-extralight">
            Helping women from around the world to win funding for their online
            business through productivity - from virtual assistants to bloggers,
            Etsy sellers, business coaches, online yoga instructors and more.
            How it works: Add a task that you've been procrastinating about
            completing and an amount that will push you to complete it... and
            get entered into our weekly draw!
          </p>
        </div>
      </section>
      <section className="py-4">{children}</section>
    </div>
  );
}
