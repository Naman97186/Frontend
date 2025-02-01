import { motion } from "framer-motion";
import { Images } from "../../Constants";
import { useState } from "react";


const PopularClasses = () => {
  // Static Data for Now
  const popularClasses = [
    {
      _id: 1,
      classImg: Images.img4,
      className: "Cricket",
      instructorName: "Vikas Singh",
      availableSeats: 5,
      price: 50,
      enrolledStudents: 20,
    },
    {
      _id: 2,
      classImg: Images.img5,
      className: "Football",
      instructorName: "Aman Kumar",
      availableSeats: 3,
      price: 60,
      enrolledStudents: 15,
    },
    {
      _id: 3,
      classImg: Images.img6,
      className: "Fitness Freak Program",
      instructorName: "Ankit Kumar",
      availableSeats: 8,
      price: 45,
      enrolledStudents: 10,
    },
  ];

  const BrandSlider = () => {
    const [selectedBrand, setSelectedBrand] = useState(null);

    const brands = [
      { id: 1, name: "Cricket", color: "#FF5733" },
      { id: 2, name: "Football", color: "#4285F4" },
      { id: 3, name: "Atheletes", color: "#34A853" },
      { id: 4, name: "Yoga", color: "#FBBC05" },
      { id: 5, name: "Dancing", color: "#EA4335" },
      { id: 6, name: "Fitness", color: "#9B59B6" },
      { id: 7, name: "Fun Activities", color: "#16A085" },
    ];

    return (
      <div className="relative overflow-hidden w-full py-10 bg-gray-100">
        {/* Shadow Covering */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-transparent to-gray-100 z-10 pointer-events-none"></div>

        {/* Slider Container */}
        <motion.div
          className="flex space-x-6 w-max"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              className="p-0 text-2xl font-bold cursor-pointer transition-colors"
              initial={{ color: "gray" }} // Default color
              whileHover={{ color: brand.color, scale: 1.2 }} // Change color on hover
              animate={{ color: selectedBrand === brand.id ? brand.color : "gray" }} // Selected brand color
              onClick={() => setSelectedBrand(brand.id)}
            >
              {brand.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Pop-up effect */}
        {selectedBrand && (
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg p-6 rounded-lg z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <h2
              className="text-4xl font-bold"
              style={{ color: brands.find((b) => b.id === selectedBrand)?.color }}
            >
              {brands.find((b) => b.id === selectedBrand)?.name}
            </h2>
          </motion.div>
        )}
      </div>
    );
  };





  return (
    <>
      <BrandSlider />
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-bold my-10 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text cursor-pointer">
          POPULAR CLASSES
        </h2>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 py-10 bg-lime-100">
        {popularClasses.map((classItem) => (
          <motion.div
            key={classItem._id}
            className="rounded-3xl shadow-lg overflow-hidden transition transform hover:scale-105 bg-white"
          >
            {/* Image */}
            <figure className="relative">
              <motion.img
                src={classItem.classImg}
                alt={classItem.className}
                className="w-full h-60 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </figure>

            {/* Card Content */}
            <div className="p-5 flex flex-col items-center text-center">
              <h2 className="text-xl font-bold">
                <span className="text-[#AC9C63]">Sport: </span>
                {classItem.className}
              </h2>
              <p>
                <span className="text-[#AC9C63] font-bold">Instructor: </span>
                {classItem.instructorName}
              </p>
              {/* <p>
                <span className="text-[#AC9C63] font-bold">Available Seats: </span>
                {classItem.availableSeats}
              </p>
              <p>
                <span className="text-[#AC9C63] font-bold">Price: </span>${classItem.price}
              </p>
              <p>
                <span className="text-[#AC9C63] font-bold">Enrolled Students: </span>
                {classItem.enrolledStudents}
              </p> */}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
