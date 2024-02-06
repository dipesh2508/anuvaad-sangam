import feature1 from "@/assets/images/Feature1.png";
import Image from "next/image";

const Feature1 = () => {
  return (
    <section className="z-1 relative grid place-items-center bg-light-4 md:h-[90vh]">
      <div className="m-12 grid grid-flow-row gap-8 md:m-36 md:grid-flow-col md:grid-cols-5 md:gap-0">
        <div className="grid place-content-center gap-8 md:col-span-3">
          <h2 className="text-center font-secondary text-4xl font-semibold text-primary-10 md:text-6xl">
            Your Space, Your Rules
          </h2>
          <p className="text-center font-primary text-base font-light md:text-left md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin quisque in amet
            consectetur sed eget egestas. Pulvinar leo amet cursus tellus
            gravida nulla. Diam quis volutpat sit lobortis ac. Etiam arcu non
            erat pellentesque. Amet in mollis ac arcu ullamcorper pellentesque
            nibh hendrerit netus. Suspendisse pellentesque condimentum morbi in
            lacus magna. Proin est gravida sagittis magna. Consectetur aliquam
            at viverra sed bibendum nam tortor lorem vehicula. Felis ac mi
            pellentesque proin dui ac adipiscing erat. Nibh in turpis hac cum
            nulla.{" "}
          </p>
        </div>
        <div className="md:col-span-2">
          <Image
            src={feature1}
            alt="featuring image"
            className="h-64 md:h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Feature1;
