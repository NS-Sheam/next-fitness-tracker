import Image from "next/image";

const OverviewCard = ({ heading, img, description, alt }) => {
  return (
    <div className="card w-80 bg-band-primary shadow-xl p-8 flex flex-col justify-between mx-auto m-auto">
      <div>
        <figure className="w-48 h-48 mx-auto rounded-full border border-white flex items-center justify-center">
          <Image
            src={img}
            alt={alt}
            className="rounded-full w-40 hover:scale-110 duration-200"
          />
        </figure>
      </div>
      <div className="flex flex-col justify-between h-full gap-2">
        <div className="space-y-2 text-white text-center">
          <h2 className="text-xl font-bold">{heading}</h2>
          {/* <p className="text-xs">{description}</p> */}
        </div>
        <div className="flex justify-center">
          {/* <button className="btn btn-sm bg-gradient-to-r from-band-secondary to-band-ternery hover:from-band-ternery hover:to-band-secondary text-white font-bold duration-300 transform transition-all ease-linear">
            See Details
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
