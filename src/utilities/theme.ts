type GenerateModeClassesProps = {
	baseClassName: string
	lightValue: string
	darkValue: string
}

export function generateModeClasses({
	baseClassName,
	lightValue,
	darkValue,
}: GenerateModeClassesProps) {
	return `${baseClassName} ${baseClassName}-light:${lightValue} ${baseClassName}-dark:${darkValue}`
}
