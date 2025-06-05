import React from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    title: "CEO, Company A",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "This product transformed our workflow entirely. Highly recommend it to anyone looking for efficiency.",
  },
  {
    name: "Mark Smith",
    title: "CTO, Company B",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    quote:
      "Excellent support and a fantastic toolset. Our team productivity has skyrocketed!",
  },
  {
    name: "Jessica Lee",
    title: "Marketing Head, Company C",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "The intuitive design and usefulness of this system made onboarding seamless for our staff.",
  },
  {
    name: "James Wilson",
    title: "Product Manager, Company D",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    quote:
      "A beautifully crafted solution which meets all our needs and more. Five stars!",
  },
];

const TestimonialOffWhiteGrid: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-12">
          What Our Customers Say
        </h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map(({ name, title, image, quote }, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={image}
                  alt={`${name}'s photo`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                  <p className="text-sm text-gray-500">{title}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 flex-grow">
                &ldquo;{quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialOffWhiteGrid;

