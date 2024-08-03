export default function CTAButtons() {
  return (
    <div className="flex gap-4 mr-3">
      <button className="bg-yellow-400 text-sm text-black px-3 rounded-full hover:bg-yellow-300 active:scale-90 transition font-bold ">
        VOLUNTEER
      </button>
      <button className="bg-red-600 text-white rounded-full px-3 hover:bg-red-500 active:scale-90 transition font-bold">
        DONATE
      </button>
    </div>
  );
}
