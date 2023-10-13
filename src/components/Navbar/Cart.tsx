"use client"
import { useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import classNames from "classnames"

type Props = {
	itemCount?: string
	itemInfo?: []
}

const Cart = (props: Props) => {
	const [isHovered, setIsHovered] = useState(false)
	const { itemCount = "99+", itemInfo } = props

	const cartClassName = classNames(
		"absolute flex items-center justify-center right-[2px] bottom-[-10px] rounded-full bg-red-500 text-[12px] font-bold transition-all duration-200 cursor-default",
		itemCount ? "opacity-100" : "opacity-0"
	)

	return (
		<div
			className="group relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="relative mx-2">
				<AiOutlineShoppingCart className="text-xl sm:text-2xl sm:mx-1" />
				{/* <p className={cartClassName}>{itemCount}</p> */}
			</div>
		</div>
	)
}

export default Cart
