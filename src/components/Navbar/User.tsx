"use client"

import { useWindowSize } from "@/hooks/useWindowSize"
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
}
const User = ({ userMetadata }: Props) => {
	const size = useWindowSize()

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
			<p className="hidden sm:block px-2 font-black line-clamp-1">
				{userMetadata.name}
			</p>
		</div>
	)
}
export default User
