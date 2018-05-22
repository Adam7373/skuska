import React from 'react'
class Datum extends React.Component
{
	render(){
		let Datum = new Date();
		return <div> Dnes je : 
		{Datum.toDateString()}
		</div>;
	}
}

export default Datum;