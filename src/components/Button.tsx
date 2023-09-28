import { ReactNode, MouseEvent } from "react"

type ButtonProps = {
	children: ReactNode
	className?: string
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ children, className, onClick, ...rest }: ButtonProps) => {
	return (
		<button className={className} onClick={onClick} {...rest}>
			{children}
		</button>
	)
}

export default Button
