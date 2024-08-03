export default function CTAButtons() {
  return (
    <div className="flex gap-4 mr-3">
      <button className="bg-yellow-400 text-black rounded-full px-3 py-1 hover:bg-yellow-300 active:scale-90 transition font-bold">
        Volunteer
      </button>
      <button className="bg-red-600 text-white rounded-full px-3 py-1 hover:bg-red-500 active:scale-90 transition font-bold">
        Donate
      </button>
    </div>
  );
}
