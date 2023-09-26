"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { BiLogInCircle } from "react-icons/bi"

type SignInProps = {
	translation: string
}

const SignInButton = ({ translation }: SignInProps) => {
	const { data: session } = useSession()
	if (session && session.user) {
		return (
			<div className="flex flex-cols items-center justify-center">
				<Image
					className="rounded"
					src={session.user.image as string}
					alt="User image"
					width={40}
					height={40}
				/>
				<p className="font-black">{session.user.name}</p>
				<button
					onClick={() => signOut()}
					className="hover:opacity-70 duration-200 bg-red-500 p-1 rounded mx-2"
				>
					Sign out
				</button>
			</div>
		)
	}

	return (
		<button
			onClick={() => signIn()}
			className="flex flex-cols items-center hover:opacity-70 duration-200 bg-green-500 dark:bg-yellow-500 p-1 rounded mx-2"
		>
			<BiLogInCircle className="mr-1" />
			<p>{translation}</p>
		</button>
	)
}
export default SignInButton
