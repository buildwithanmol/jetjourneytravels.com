import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default async function Portfolio() {
  const items = [
    "/portfolio/3.jpg",
    "/portfolio/1.jpg",
    "/portfolio/2.jpg",
    "/portfolio/1.jpg",
    "/portfolio/3.jpg",
    "/portfolio/2.jpg",
    "/portfolio/2.jpg",
    "/portfolio/3.jpg",
    "/portfolio/1.jpg",
  ];
  return (
    <section>
      <h1 className="text-2xl md:text-3xl mb-5 md:mb-10 text-center"> Portfolio </h1>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 p-4">
        {items.map((src, idx) => (
          <div key={idx} className="mb-4 break-inside-avoid">
            <Zoom>
              <img
                src={src}
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
