import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

export default function Loader() {
	return (
		<CircularProgress
			disableShrink
			style={{fontSize: '90px', backgroundColor: 'transparent', position: 'absolute', top: '450px', left: '450px'}}
		/>
	)
}
