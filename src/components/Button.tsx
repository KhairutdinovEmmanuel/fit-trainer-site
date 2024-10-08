import { FC, HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

export const Button: FC<PropsWithChildren<HTMLAttributes<HTMLButtonElement>>> = (props) => {
	const { className = '', children, ...restProps } = props;

	return (
		<button className={clsx(className, 'btn', 'text-white')} {...restProps}>
			{children}
		</button>
	)
}