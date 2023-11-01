import createMiddleware from "next-intl/middleware"
import { NextResponse } from "next/server"

import type { NextRequest } from "next/server"

export async function supabaseMiddleware(req: NextRequest) {
	const res = NextResponse.next()
	return res
}

export default createMiddleware({
	locales: ["en", "vi"],
	defaultLocale: "en",
})

export const config = {
	// Skip all paths that should not be internationalized
	matcher: ["/((?!api|_next|.*\\..*).*)"],
}
