import { createElement, FC, HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

type ParagraphVariantT = "paragraph" | "span";

type ParagraphPropsT = (HTMLAttributes<HTMLParagraphElement> | HTMLAttributes<HTMLSpanElement>) & {
	variant?: ParagraphVariantT;
}

export const Paragraph: FC<PropsWithChildren<ParagraphPropsT>> = (props) => {
	const { variant = "paragraph", className = '', children, ...restProps } = props;

	return createElement(
		variant,
		{
			className: clsx(className, 'text-white'),
			...restProps
		},
		children
	);
}