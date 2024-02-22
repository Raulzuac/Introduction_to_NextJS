export function PokemonCarouselSqueleton() {
  return (
    <div className="flex flex-row p-10 gap-10 overflow-hidden w-full">
      <div className='animate-pulse rounded-full bg-gray-100 min-h-[450px] min-w-[450px]'/>
      <div className='animate-pulse rounded-full bg-gray-100 min-h-[450px] min-w-[450px]'/>
      <div className='animate-pulse rounded-full bg-gray-100 min-h-[450px] min-w-[450px]'/>
    </div>
  );
}

export function PokemonTableSqueleton() {
  return (
    <div className="flex flex-row p-10 gap-10 overflow-hidden w-full">
      <div className='animate-pulse rounded-full bg-gray-100 min-h-[450px] min-w-[450px]'/>
      <div className='animate-pulse rounded-full bg-gray-100 min-h-[450px] min-w-[450px]'/>
      <div className='animate-pulse rounded-full bg-gray-100 min-h-[450px] min-w-[450px]'/>
    </div>
  );
}