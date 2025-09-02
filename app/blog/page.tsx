import { getDatabase } from "@/sqlite";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";

export default async function BlogPage() {
  const db = await getDatabase();

  const rows = await db.sql`SELECT * FROM blogs LIMIT 10`;

  db.close();
  return (
    <section className="max-w-screen-xl mx-auto py-10 px-5">
      <div className="border-b pb-5 flex md:flex-row flex-col md:items-center md:justify-between">
        <div>
          <h1 className={`text-3xl italic text-primary`}> Blogs </h1>
          <h1 className="text-gray-500 text-sm font-mono mt-2">
            {" "}
            Find out what's going on with <span>Jet Journey Travels</span> every
            week!{" "}
          </h1>
        </div>
        <h1 className="text-md text-gray-500 md:block hidden">
          {" "}
          Jet Journey Travels{" "}
        </h1>
      </div>

      <div>
        {rows && rows.length === 0 ? (
          <div className="flex items-center justify-center gap-2 pt-16 text-gray-400">
            <Search size={25} />
            <h1> No Blogs Found </h1>
          </div>
        ) : (
          <div className="min-h-[30vh] ">
            <div className="py-4 text-sm text-gray-500"></div>
            {rows.map((row: any) => {
              const date = new Date(row.createdAt * 1000);
              const format = new Intl.DateTimeFormat("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              }).format(date);
              return (
                <Link
                  href={`/blog/${row.id}`}
                  className=" flex md:items-center md:flex-row flex-col-reverse md:gap-2"
                  key={row.id}
                >
                  <ArrowRight
                    size={15}
                    className="md:block hidden text-primary"
                  />{" "}
                  <span className="font-mono text-sm text-primary">
                    {" "}
                    {format}{" "}
                  </span>{" "}
                  <h1 className="hover:underline text-gray-600 flex items-center gap-1">
                    {row.title}{" "}
                  </h1>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export const dynamic = 'force-dynamic'