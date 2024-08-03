export default function DonateButton({ amount }) {
  return (
    <button className="transition-all text-white bg-sky-900 border-2 border-sky-300 hover:border-black hover:text-black hover:bg-yellow-500 px-12 h-14 active:scale-95 active:bg-yellow-300">
      <div className="m-auto text-3xl font-extrabold">
        {amount ? `$${amount}` : "Other"}
      </div>
    </button>
  );
}
