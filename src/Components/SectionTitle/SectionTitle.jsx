 
const SectionTitle = ({heading, subHeading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-600  text-center ">---{subHeading}---</p>
            <h1 className="text-center border-y-4 text-4xl py-4 uppercase ">{heading}</h1>
        </div>
    );
};

export default SectionTitle;