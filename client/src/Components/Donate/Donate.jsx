import DonateButton from "./DonateButton";

export default function Donate() {
  return (
    <section
      id="donate"
      className="transition-all px-4 pt-4 pb-10 sm:px-12 sm:py-16 flex justify-center items-center"
    >
      <div className="flex flex-col items-center px-12 py-12 bg-gradient-to-tr from-sky-900 via-sky-700 to-teal-700 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white text-center font-extrabold">
          DONATE TO SUPPORT SAMANTHA'S CAMPAIGN
        </h1>
        <div className="flex gap-4 max-w-screen-md w-full flex-wrap justify-center mt-8">
          <div className="flex flex-col gap-4 min-w-[240px]">
            <DonateButton amount={25} />
            <DonateButton amount={50} />
          </div>
          <div className="flex flex-col gap-4 min-w-[240px]">
            <DonateButton amount={100} />
            <DonateButton />
          </div>
        </div>
      </div>
    </section>
  );
}
