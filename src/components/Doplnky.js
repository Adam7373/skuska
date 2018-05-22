import React from 'react'
import Data from '../doplnky.json'

const Link1 = _ => (
<div> 
<h1>Doplnky</h1>
<p>
<h2>Proteíny:</h2>
	{Data.filter(function(doplnok) { 
		   return doplnok.typ === "Protein";
	}).map(doplnok => {	
           return( <div className="doplnok"><div className={'obrazok_doplnok ' + doplnok.obrazok}></div>{doplnok.nazov}<br/> {doplnok.cena}  €</div>);
	})}     
</p>
<p>
<h2>Aminokyseliny:</h2>
	{Data.filter(function(doplnok) { 
		   return doplnok.typ === "Aminokyselina";
	}).map(doplnok => {	
           return( <div className="doplnok"><div className={'obrazok_doplnok ' + doplnok.obrazok}></div>{doplnok.nazov} <br/> {doplnok.cena}  €</div>);
	})}     
</p>
<p>
<h2>Kreatín:</h2>
	{Data.filter(function(doplnok) { 
		   return doplnok.typ === "Kreatin";
	}).map(doplnok => {	
           return( <div className="doplnok"><div className={'obrazok_doplnok ' + doplnok.obrazok}></div>{doplnok.nazov} <br/> {doplnok.cena} €</div>);
	})}     
</p>

</div>
)

export default Link1;

