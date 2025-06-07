type CardCarNewProps = {
  name: string;
  price_start: number;
  image: string;
}

const CardCarNew : React.FC<CardCarNewProps> = ({
  name,
  price_start,
  image,
}) =>  {
  return (
    <div className="min-w-[250px] max-w-sm bg-white inset-shadow-2xs rounded-xl shadow-md overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="shrink-0">
          <img
            className="h-48 w-full object-cover"
            src={`/images/${image}`}
            alt={name}
          />
        </div>
        <div className="px-4 py-6">
          <h2 className="text-orange-500 text-xs font-bold uppercase tracking-wide">NEW</h2>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{name}</h1>
          <p className="mt-2 text-gray-500">Mobil generasi terbaru.</p>
          <p className="mt-2 text-gray-900 text-lg font-bold">
        Mulai Rp {price_start.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCarNew;

