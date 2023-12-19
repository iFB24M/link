import type { ButtonProps } from '@/ui/components/Button/Button.props'

export interface ActionButton extends ButtonProps {
	action: (formData: FormData) => Promise<void>
	fields?: { name: string, value: string }[]
}