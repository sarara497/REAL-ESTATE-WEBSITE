import React, { Component } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Card from '../SharedComponents/Card_Rreal_Estate'




const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    // marginTop:-300,
    // marginBottom:220 , 

  },
  search: {
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100ch",
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      // marginRight: theme.spacing(20),
      width: "100ch",
      height: 60
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: "150ch"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: "90ch",
    marginTop: 10,
    paddingLeft: 20,
    [theme.breakpoints.up('md')]: {
      width: '90ch',
      backgroundColor: 'inherit',
      marginLeft: 16,
    },
  },
}));


class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      real_estate: [],
      search: "",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handelOnClick = this.handelOnClick.bind(this)
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })

    console.log(value)
  }


  handelOnClick = async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },

    };
    fetch(`http://localhost:4000/real-estate/retrieveRealbyLocation-Estate/${this.state.search}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        this.setState({ real_estates: data })
        console.log(data)
      })
  }


  render() {
    const { real_estates } = this.state
    console.log("realEstate" , this.state.real_estate)
    return (
      <div id="forSearch" className={useStyles.grow}>
        <AppBar position="static">
          <Toolbar>

            <Button onClick={this.handelOnClick}  id="forSearchIcon"><SearchIcon /></Button>

            <div className={useStyles.search}>

              <InputBase
                useStyles={{
                  root: useStyles.inputRoot,
                  input: useStyles.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}

                placeholder="Search…"
                name="search"
                onChange={this.handleChange}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default Search;