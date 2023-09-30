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
	return (
		<div className="flex flex-row items-center w-var(--header-user-width)">
			<Image
				className="rounded"
				src={(userMetadata.avatar_url as string) || ""}
				alt="User image"
				width={40}
				height={40}
			/>
			<p className="px-2 font-black line-clamp-1">{userMetadata.name}</p>
		</div>
	)
}
export default User
