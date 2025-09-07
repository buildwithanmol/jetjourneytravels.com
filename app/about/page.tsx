import Image from "next/image";

export default async function About() {
  return (
    <section>
      <h1 className="text-2xl md:mb-10 mb-5 md:text-3xl text-center">
        {" "}
        About{" "}
      </h1>
      <div className="relative pt-[15vh] md:py-[15vh] flex items-center flex-col justify-center">
        <Image
          src={"/addons/flying-plane.png"}
          width={400}
          height={400}
          alt="flying-plane"
          className="absolute top-0 left-0"
        />
        <Image
          src={"/addons/line.png"}
          width={300}
          height={300}
          alt="flying-plane"
          className="absolute bottom-0 right-0 hidden md:block"
        />
        <p className="font-semibold md:text-2xl text-lg mb-2 text-center">
          Your Trusted Travel Partner – Based in Dubai, Serving the World.
        </p>
        <p className="max-w-2xl text-center md:text-md text-sm font-mono">
          At JET JOURNEY TRAVELS LLC, we simplify travel so you can enjoy the
          journey. From quick getaways to corporate tours, we offer seamless air
          ticketing and hotel booking solutions tailored to your needs.
        </p>
      </div>
      <Image
        width={1920}
        height={500}
        src={"/background/contact-page.jpg"}
        alt="hero"
        className="rounded-xl w-full object-contain my-10"
      />

      <div className="space-y-2">
        <h1 className="md:text-xl md:text-start font-semibold text-lg md:mb-5 mb-2 text-center">
          {" "}
          What is our <span className="text-primary">story</span> ?{" "}
        </h1>
        <p>
          Every great journey begins with a dream — a dream to explore, to
          connect, and to discover. At Jet Journey Travels LLC, based in the
          heart of Dubai, we bring those dreams to life. Dubai is a city that
          bridges the world — where East meets West, tradition meets innovation,
          and people from every culture come together. Inspired by this spirit,
          we set out with a mission: to create travel experiences that go beyond
          itineraries and become stories worth telling.
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-5">
          <div>
            <h1 className="text-lg font-bold">
              Our <span className="text-primary">Promise</span>
            </h1>
            <p className="">
              When you travel with Jet Journey Travels LLC, you don’t just visit
              destinations — you live them. Every journey is carefully curated
              to inspire, delight, and leave you with unforgettable stories.
            </p>
          </div>
          <div>
            <h1 className="text-lg font-bold">
              Our <span className="text-primary">Mission</span>
            </h1>
            <p className="">
              To turn travel into a journey of discovery, connection, and joy —
              one unforgettable experience at a time.
            </p>
          </div>
          <div>
            <h1 className="text-lg font-bold">
              Our <span className="text-primary">Vision</span>
            </h1>
            <p className="">
              To be more than a travel agency. We aspire to be your trusted
              companion, crafting journeys that reflect your passions,
              personality, and dreams. Whether it’s a luxury escape, a cultural
              adventure, or a family getaway, we ensure every journey is as
              unique as you are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
