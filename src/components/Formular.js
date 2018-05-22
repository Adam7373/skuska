import React from 'react'

var lol;

class Formular extends React.Component {	
	
    constructor(props) {
        super(props);
        this.state = {
            meno: '',
            priezvisko: '',
			text_recenzie: '',
			isChecked: false
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            isChecked: !this.state.isChecked
        })
    }
	
   onSubmit = (e) => {
       e.preventDefault();
       const form = {
        meno: this.state.meno,
        priezvisko: this.state.priezvisko,
		text_recenzie: this.state.text_recenzie
       }
	   if(this.state.meno == "" || this.state.priezvisko == "" || this.state.text_recenzie == ""){
		   alert("Vyplňte prosím všetky polia!");
	   }else if(this.state.isChecked){
		   alert("Musíte súhlasiť s podmienkami!");
	   }else{
		   alert("Vaše vyjadrenie bolo odoslané, dakujeme!");		  
       }		   
    }
	
    render() {	
        return (
            <div>		
		
            <form name="checklist">
                <label>Name:<input type="text" name="meno" onChange={e => this.handleChange(e)}/></label>
				<br/>
                <label>Priezvisko:<input type="text" name="priezvisko" onChange={e => this.handleChange(e)}/></label>
                <br/>				
                <label><input type="checkbox" name="suhlas" onChange={e => this.handleChange(e)}/> Súhlasite so spracovaním osobných údajov</label>
                <br/>	
				<textarea name="text_recenzie" onChange={e => this.handleChange(e)} cols="60" rows="10"></textarea><br/>				
                <button onClick={(e) => this.onSubmit(e)}>Odoslať recenziu</button>   
            </form>
            </div>
        );
    }
}

export default Formular;