export default function Divider() {
  const colors = [
    "from-[#285161] to-[#3b6b7e]",
    "from-[#3b6b7e] to-[#4c7d91]",
    "from-[#4c7d91] to-[#5f92a6]",
    "from-[#5f92a6] to-[#6fa3b7]",
    "from-[#6fa3b7] to-[#7fb4c8]",
  ];

  return (
    <div className="flex justify-center items-center py-8 animate-pulse gap-2 lg:gap-6 xl:gap-8">
      {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((size, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r ${colors[size - 1]} rounded-full shadow-[0_0_5px_rgba(63,94,111,0.5)]`}
          style={{
            width: `${size * 0.5}rem`,
            height: `${size * 0.5}rem`,
            animationDelay: `${index * 0.15}s`,
            boxShadow: `0 0 ${size * 3}px rgba(63, 94, 111, 0.5)`,
          }}
        ></div>
      ))}
    </div>
  );
}
