import Image from "next/image";
import logo from "../../assets/fitness.png"
const SectionTitle = ({ heading, paragraph }) => {
    return (
        <div className="text-center space-y-4 py-4">
            <h1 className="text-3xl font-bold text-band-secondary">{heading}</h1>
            <Image className="w-14 h-14 mx-auto" src={logo} alt="" />
            <p className="md:text-xl text-band-primary md:w-4/5 mx-auto">{paragraph}</p>
        </div>
    );
};

export default SectionTitle;