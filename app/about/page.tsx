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
        <p className="font-semibold text-lg mb-2 text-center">
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

      <div className="space-y-5">
        <h1 className="md:text-xl md:text-start font-semibold text-lg md:mb-5 mb-2 text-center">
          {" "}
          What is our <span className="text-primary">story</span> ?{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quas
          excepturi hic delectus accusantium, ad porro repudiandae perspiciatis
          sed officia labore? Nesciunt amet accusamus, eaque inventore sint
          sequi autem, ratione nobis illo possimus tenetur labore. Sequi dicta
          quis distinctio quo obcaecati quas minus vel perferendis modi
          voluptatem beatae, nemo nisi dignissimos quam rem amet vero illum
          dolorem optio magni ad.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quas
          excepturi hic delectus accusantium, ad porro repudiandae perspiciatis
          sed officia labore? Nesciunt amet accusamus, eaque inventore sint
          sequi autem, ratione nobis illo possimus tenetur labore. Sequi dicta
          quis distinctio quo obcaecati quas minus vel perferendis modi
          voluptatem beatae, nemo nisi dignissimos quam rem amet vero illum
          dolorem optio magni ad.
        </p>
      </div>
    </section>
  );
}
