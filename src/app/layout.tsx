import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ReactNode } from "react"
import { Provider } from "react-redux"
import store from "@/store"
import Providers from "@/components/Providers"

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

type Props = {
	children: ReactNode
}

export default function RootLayout({ children }: Props) {
	return <Providers>{children}</Providers>
}
