export default function SocialIcons() {
  return (
    <div className="flex gap-2">
      <button className="bg-transparent border-none cursor-pointer focus:outline-none active:scale-90">
        <img
          src="/assets/Social-icons/Facebook.svg"
          alt="Facebook"
          className="w-12 h-12 hover:bg-sky-900 rounded-full p-1 transition-colors duration-300"
        />
      </button>
      <button className="bg-transparent border-none cursor-pointer focus:outline-none active:scale-90">
        <img
          src="/assets/Social-icons/IG.svg"
          alt="Instagram"
          className="w-12 h-12 hover:bg-sky-900 rounded-full p-1 transition-colors duration-300"
        />
      </button>
      <button className="bg-transparent border-none cursor-pointer focus:outline-none active:scale-90">
        <img
          src="/assets/Social-icons/Twitter.svg"
          alt="Twitter"
          className="w-12 h-12 hover:bg-sky-900 rounded-full p-1 transition-colors duration-300"
        />
      </button>
    </div>
  );
}
