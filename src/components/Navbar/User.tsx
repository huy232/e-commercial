"use client"
import classNames from "classnames"
import Image from "next/image"

interface userMetadata {
	avatar_url: string
	email: string
	email_verified: boolean
	full_name: string
	iss: string
	name: string
	picture: string
	provider_id: string
	sub: string
}

type Props = {
	userMetadata: userMetadata
	isMobile?: boolean
}

const User = ({ userMetadata, isMobile }: Props) => {
	const userClass = classNames(
		isMobile && "block",
		!isMobile && "hidden",
		"md:block px-2 font-black line-clamp-1"
	)
	return (
		<div className="flex flex-row items-center h-full">
			<Image
				className="rounded"
				src={(userMetadata.avatar_url as string) || ""}
				alt="User image"
				width={30}
				height={0}
				style={{ height: "100%", width: "auto" }}
			/>
			<p className={userClass}>{userMetadata.name}</p>
		</div>
	)
}
export default User
