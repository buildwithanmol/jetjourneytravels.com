import Image from "next/image";

export default function BlogLoading() {
  return (
    <div className="absolute inset-0 bg-white flex items-center justify-center">
      <Image src="/logo.png" alt="Loading..." width={200} height={200} className="animate-pulse" />
    </div>
  );
}
