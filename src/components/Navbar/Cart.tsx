import { AiOutlineShoppingCart } from "react-icons/ai"
import classNames from "classnames"
import CartList from "./CartList"

type Props = {
	itemCount?: string
	itemInfo?: []
}

const Cart = (props: Props) => {
	const { itemCount = "99+", itemInfo } = props
	const cartClassName = classNames(
		"absolute flex items-center justify-center right-[2px] bottom-[-10px] rounded-full bg-red-500 w-[30px] h-[30px] text-[12px] font-bold transition-all duration-200 cursor-default",
		itemCount ? "opacity-100" : "opacity-0"
	)
	return (
		<div className="relative mx-2">
			<AiOutlineShoppingCart className="text-3xl mx-2" />
			<p className={cartClassName}>{itemCount}</p>
			<CartList />
		</div>
	)
}

export default Cart
