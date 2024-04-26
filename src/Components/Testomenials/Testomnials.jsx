import TestimonialCrd from "../TestimonialCard/TestimonialCrd";
import { testimonials } from "../../data/testimonials";

const Testomnials = () => {
  return (
    <section className="w-full flex items-center justify-center py-10 px-2 min-h-screen">
      <div className=" max-w-5xl  ">
        <h1 className="text-[2rem] italic font-semibold text-center mb-10">
          Testimonials
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center  gap-8">
          {testimonials.map((test) => (
            <TestimonialCrd
              key={test.name}
              name={test.name}
              review={test.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testomnials;
