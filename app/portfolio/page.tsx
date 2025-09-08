import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

export default async function Portfolio() {
  const directory = path.join(process.cwd(), "public", "portfolio");
  const data = fs
    .readdirSync(directory)
    .filter((file) => /\.(png|jpg|jpeg|svg|avif)$/.test(file));
  const items = JSON.stringify(data);

  return (
    <section className="py-12">
      <h1 className="text-2xl md:text-3xl mb-5 md:mb-10 text-center font-bold">
        {" "}
        Portfolio{" "}
      </h1>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 p-4">
        {(JSON.parse(items) as any[]).map((src, idx) => (
          <div key={idx} className="mb-4 break-inside-avoid">
            <Zoom>
              <Image
                src={`/portfolio/${src}`}
                width={800}
                height={500}
                alt={`Pinterest style ${idx}`}
                className="w-full rounded-lg shadow-md"
                
              />
            </Zoom>
          </div>
        ))}
      </div>
    </section>
  );
}
