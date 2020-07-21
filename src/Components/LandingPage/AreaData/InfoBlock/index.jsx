import React from 'react';
import { InfoBlockWrapper } from './styled';

const InfoBlock = (props) => {
	const { label, value, children } = { ...props };
	const amountType = props.windAngle
		? 'wind'
		: props.temperature
		? 'temp'
		: 'parcent';
	return (
		<InfoBlockWrapper>
			<div className='info'>
				<div>{children}</div>
				<p className='infolabel'>{label}</p>
			</div>
			<p className={`amount ${amountType}`}>
				{value}
				{amountType === 'wind' ? (
					<span>
						at {props.windAngle} <sup>o</sup>
					</span>
				) : amountType === 'temp' ? (
					<>
						<sup>o</sup> <span>C</span>
					</>
				) : (
					''
				)}
			</p>
		</InfoBlockWrapper>
	);
};

export default InfoBlock;
