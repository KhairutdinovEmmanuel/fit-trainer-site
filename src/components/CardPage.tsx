import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { Title } from "./Title.tsx";
import { Paragraph } from "./Paragraph.tsx";

type CardPropsT = {
	title: string;
	subtitle: string;
}

export const CardPage: FC<PropsWithChildren<CardPropsT>> = (props) => {
	const { title, subtitle, children } = props;

	return (
		<div className={clsx('card card-page')}>
			<div className="card-header-page">
				<Title variant="h3">{title}</Title>
				{subtitle && <Paragraph className="blockquote-footer">{subtitle}</Paragraph>}
			</div>

			<div className="card-body pt-0 px-4 pb-4">
				{children}
			</div>
		</div>
	)
}