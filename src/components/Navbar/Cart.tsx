import { AiOutlineShoppingCart } from "react-icons/ai"

type Props = {
	itemCount?: number
	itemInfo?: []
}

const Cart = () => {
	return (
		<div className="relative">
			<AiOutlineShoppingCart className="text-2xl mx-2" />
			<p className="absolute right-[6px] bottom-[-10px] rounded-full bg-red-500">
				{1}
			</p>
		</div>
	)
}

export default Cart
