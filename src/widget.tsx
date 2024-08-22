import error from "./assets/error.svg";
import info from "./assets/info.svg";
import warning from "./assets/warning.svg";

export const Widget = ({
  type,
  heading,
  children,
}: {
  type: string;
  heading: string;
  children: string;
}) => {
  let svg = "";
  let bgColor = "";
  let borderColor = "";

  if (type === "info") {
    svg = info;
    bgColor = "bg-blue-100"; // Tailwind class for #dfebf6
    borderColor = "border-blue-300"; // Border color for info
  } else if (type === "warning") {
    svg = warning;
    bgColor = "bg-yellow-100"; // Tailwind class for #fff6bf
    borderColor = "border-yellow-500"; // Tailwind class for #ff9d00
  } else if (type === "error") {
    svg = error;
    bgColor = "bg-red-200"; // Tailwind class for #EF9A9A
    borderColor = "border-red-600"; // Border color for error
  }

  return (
    <div className={`relative p-4 rounded-lg my-4 flex items-center justify-center flex-col w-3/5 ${bgColor} border-l-4 ${borderColor}`}>
      <img src={svg} className="absolute top-[-15px] left-[-15px] w-7 h-7" alt={`${type} icon`} />
      <h2 className="m-0 text-xl">{heading}</h2>
      <p className="mt-2 text-base text-gray-600">{children}</p>
    </div>
  );
};
