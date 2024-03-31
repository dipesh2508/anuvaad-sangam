import Image from "next/image";
const ContactBar = ({ image, id, contact }: { image: string; id: string, contact: string[] }) => {
  return (
    <>
      <div className="mt-6 flex h-36 w-36 flex-col content-center justify-center gap-4">
        <Image
          src={image}
          alt="avatar"
          height={120}
          width={120}
          className="mx-auto rounded-full"
        />
        <h2 className="text-center text-xl font-medium">Dipesh Ranjan</h2>
      </div>
      <div className=" mt-4 h-[1px] w-10/12 bg-primary-3"></div>
      <div className="mt-4 w-full px-7">
        <h3 className=" font-primary text-lg font-medium">Your Contacts</h3>
        <div className=" mt-2 flex flex-col gap-2" />
        <div className="mt-4 flex h-auto w-full gap-4">
            
        </div>
      </div>
    </>
  );
};

export default ContactBar;
