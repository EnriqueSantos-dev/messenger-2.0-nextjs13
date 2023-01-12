export default function Loading() {
  return (
    <div className="w-full pt-10">
      <div className="mx-auto w-fit space-y-2 flex justify-center items-center flex-col">
        <p className="text-sx text-blue-400 animate-pulse">
          Loading messages...
        </p>
        <span className="w-5 h-5 block rounded-full border-[2px] border-r-blue-400 border-gray-300 animate-spin"></span>
      </div>
    </div>
  );
}
