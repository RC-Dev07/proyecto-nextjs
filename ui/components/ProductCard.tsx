import Image, { StaticImageData } from "next/image";
import Button from "./Button";

type ProductCardProps = {
  title: string;
  price: number;
  image: string | StaticImageData;
  description: string;
};

export default function ProductCard({
  title,
  price,
  image,
  description,
}: ProductCardProps) {
  const handleViewDetails = () => {
    alert(description);
  };
  return (
    <div className="w-72 overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="flex flex-col gap-3 p-4">
        <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
        <p className="line-clamp-2 text-sm text-gray-600">{description}</p>
        <p className="text-2xl font-bold text-blue-800">Bs. {price.toFixed(2)}</p>
        <Button onClick={handleViewDetails} className="w-full">
          Ver descripción
        </Button>
      </div>
    </div>
  );
}
