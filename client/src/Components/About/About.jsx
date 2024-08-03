export default function About() {
  return (
    <section id="about" className="transition-all px-4 pb-20 sm:px-12">
      <div className="grid grid-rows-3 lg:gap-10 lg:grid-cols-2 lg:grid-rows-2 transition-all md:px-24">
        <div className="relative w-full min-h-96 mb-20">
          <h1 className="text-4xl font-extrabold mb-10">MEET SAMANTHA</h1>
          <img
            src="/assets/about-photo_2.png"
            alt="about image"
            className="object-cover w-full h-full"
          />
          <div className="transition-all absolute bottom-0 lg:bottom-[35%] lg:left-[90%] lg:max-w-96 w-full p-4 bg-gradient-to-r from-sky-900/85 via-sky-700/85 via-70% to-yellow-500/85">
            <p className="text-white text-lg sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="hidden lg:block" />
        <div className="flex flex-col  text-center text-lg md:text-lg sm:text-lg lg:text-left mt-20">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            voluptas repellat doloremque ipsum sit ex, debitis quasi provident,
            porro sint saepe molestiae perspiciatis aliquid distinctio, commodi
            illo quae incidunt cupiditate? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Illum sapiente doloribus veritatis,
            tempora, officiis est quidem at, repellat eum beatae ad delectus ex
            voluptatem consequuntur eaque laboriosam dolor iste ipsa!
          </p>
          <p className="mt-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            dolores atque saepe aspernatur modi. Qui perferendis repellat iure
            hic delectus non nemo.
          </p>
        </div>
        <div className="relative w-full min-h-96">
          <img
            src="/assets/about-photo_1.jpg"
            alt="about image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
