import { FC, InputHTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";
import { Paragraph } from "./Paragraph.tsx";

type InputPropsT = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
}

export const Input: FC<PropsWithChildren<InputPropsT>> = (props) => {
	const { label, className = '', ...restProps } = props;

	return (
		<div className="mb-3">
			<label className="w-100 form-label">
				<Paragraph variant="span" className="fw-medium">{label}</Paragraph>
				
				<input className={clsx(className, 'form-control')} {...restProps} />
			</label>
		</div>
	)
}