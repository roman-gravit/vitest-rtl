export { Search }; 

import { ChangeEvent, ReactNode } from 'react'

interface Props {
	value: string;
	onChange: (event: ChangeEvent) => void;
	children: ReactNode;
}

function Search({value, onChange, children}: Props) {
	return (
		<div>
			<label htmlFor="search">{children}</label>
			<input data-testid="search1" value={value} type="text" onChange={onChange} id="search" />
		</div>
	)
}
