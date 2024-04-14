import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src="/assets/loading.svg"
        alt="spinner"
        width={32}
        height={32}
        className="animate-spin duration-700"
      />
    </div>
  );
};
