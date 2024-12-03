export default function Divider() {
  const colors = [
    "from-purple-300 to-purple-400",
    "from-purple-400 to-purple-500",
    "from-purple-500 to-purple-600",
    "from-purple-600 to-purple-700",
    "from-purple-700 to-purple-800",
  ];

  return (
    <div className="flex justify-center items-center py-8 animate-pulse gap-2 lg:gap-6 xl:gap-8">
      {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((size, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r ${colors[size - 1]} rounded-full`}
          style={{
            width: `${size * 0.5}rem`,
            height: `${size * 0.5}rem`,
            animationDelay: `${index * 0.15}s`,
          }}
        ></div>
      ))}
    </div>
  );
}
