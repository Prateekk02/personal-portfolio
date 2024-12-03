export default function Divider(){
    return <>

<div className="flex justify-center items-center py-8 animate-pulse gap-2 lg:gap-6 xl:gap-8">
  {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((size, index) => (
    <div
      key={index}
      className={`bg-gradient-to-r from-purple-${200 + size * 100} to-purple-${300 + size * 100} rounded-full`}
      style={{
        width: `${size * 0.5}rem`, 
        height: `${size * 0.5}rem`,
        animationDelay: `${index * 0.15}s`,
      }}
    ></div>
  ))}
</div>



    </>
}