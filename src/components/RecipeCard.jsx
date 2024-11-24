import { Heart, HeartPulse, Soup } from "lucide-react";

const Recipecard = () => {
  return (
	
	 <div className="flex flex-col rounded-md bg-[white] overflow-hidden p-3 relative">
						<a href="#" className="relative h-32">
							<img 
							    src="/Pizza.jpg"
								alt="recipe img"
								className="rounded-md w-full h-full object-cover cursor-pointer"
							/>
							<div
							    className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm"
							>
								<soup size = {16} />8 Servings
							</div>

							<div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer flex it">
                               <Heart size={20} className='hover:fill-red-500 hover:text-red-500' />

							</div>



						</a>
						<div className="flex mt-1">
							<p className="font-bold tracking-wide">Cheese Pizza</p>
						</div>
						<p className="my-2">Italian Kitchen</p>
						<div className="flex gap-2 mt-auto">
							<div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
								<HeartPulse size={16}/>
								<span className="text-sm tracking-tighter font-semibold">Gluten free</span>
							</div>
							<div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
								<HeartPulse size={16}/>
								<span className="text-sm tracking-tighter font-semibold">Healthy for Heart</span>
							</div>
						</div>
					</div>
	
	
  )
}

export default Recipecard
