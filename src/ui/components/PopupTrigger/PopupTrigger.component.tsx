import { useContext, type HTMLAttributes, type ReactNode } from 'react'
import { PopupContext } from '../Popup/Popup.component'

const PopupTrigger = ({ onClick, ...props }: HTMLAttributes<HTMLDivElement>): ReactNode => {
	const popup = useContext(PopupContext)

	return (
		<div onClick={() => { popup.togglePopupClassList() }} {...props}></div>
	)
}

export default PopupTrigger
