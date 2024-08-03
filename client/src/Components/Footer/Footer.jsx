export default function Footer() {
  return (
    <section className="px-12 py-6 bg-sky-900">
      <footer className="flex flex-col sm:flex-row justify-between gap-6 items-end min-h-40">
        <img
          src="/assets/SamanthaHall_Logo_reversed.png"
          alt="Samantha Hall for Senate"
          className="w-25 h-20"
        />{" "}
        <div className="text-white flex flex-col gap-4">
          <div className="px-6 py-2 border font-thin border-white text-xs">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <p className="self-end text-sm">
            <a href="#" className="underline">
              Privacy Policy
            </a>
            <span className="ml-4">©2024</span>
          </p>
        </div>
      </footer>
    </section>
  );
}
