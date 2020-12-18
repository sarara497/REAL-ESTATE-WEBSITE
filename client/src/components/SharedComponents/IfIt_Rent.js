import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 140,
    },
}));


class IsRent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rent_T:'',
            rent_D:''
        }

        this.handleChange = this.handleChange.bind(this)
        this.obTrigger=this.obTrigger.bind(this)
    }

    obTrigger = (e)=>{
        this.props.isRentData(this.state)
        e.preventDefault()
    }

    handleChange = (e) => {
        console.log("here", e.target.checked)
        let { name, value } = e.target;
        this.setState({ [name]: value })

        console.log(value)
    }
 
    render(){
    
    return (
        <div id="forisrent">
            <div>
                <FormControl className={useStyles.formControl}>
                    <InputLabel htmlFor="grouped-native-select">Rent_Type</InputLabel>
                    <Select onChange={this.handleChange} name="rent_T" native defaultValue="" id="grouped-native-select">
                        <option aria-label="None" value="" />
                        <option value={1}>Long-term</option>
                        <option value={2}>Short-term</option>

                    </Select>
                </FormControl>
            </div>
                <div  id="fordure">
                   <form action="/action_page.php">
                      <label for="quantity">Rent_Dure (in months):</label>
                      <input   onChange={this.handleChange} type="number" id="quantity" name="rent_D" min="1" max="60" />
                   </form>
                </div>
         
        </div>
  );
}}

export default IsRent;
