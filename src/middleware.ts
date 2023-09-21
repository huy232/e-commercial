import createMiddleware from "next-intl/middleware"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"

import type { NextRequest } from "next/server"
import type { Database } from "@/lib/database.types"

export async function supabaseMiddleware(req: NextRequest) {
	const res = NextResponse.next()
	const supabase = createMiddlewareClient<Database>({ req, res })
	await supabase.auth.getSession()
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
