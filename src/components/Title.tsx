import { createElement, FC, HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

type TitleVariantT = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TitlePropsT = HTMLAttributes<HTMLHeadingElement> & {
	variant: TitleVariantT;
}

export const Title: FC<PropsWithChildren<TitlePropsT>> = (props) => {
	const { variant, className = '', children, ...restProps } = props

	return createElement(
		variant,
		{
			className: clsx(className, 'text-white'),
			...restProps
		},
		children
	);
}