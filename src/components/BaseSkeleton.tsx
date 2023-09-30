import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
type Props = {
	count?: number
	className?: string
	width?: string
	height?: string
	baseColor?: string
	highlightColor?: string
	borderRadius?: string | number
	inline?: boolean
	duration?: number
	direction?: "ltr" | "rtl"
	enableAnimation?: boolean
}
const BaseSkeleton = (props: Props) => {
	const { count = 1, ...rest } = props
	return (
		<Skeleton
			count={count}
			baseColor="var(--skeleton-base-color)"
			highlightColor="var(--skeleton-highlight-color)"
			{...rest}
		/>
	)
}
export default BaseSkeleton
