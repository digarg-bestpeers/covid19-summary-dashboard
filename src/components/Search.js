import React, {useState} from 'react'
import { connect } from "react-redux";
import { searchCountry } from "../redux/summary/summaryActions";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    
  }));


function Search({searchCountry}) {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        searchCountry(search)
        
      };
    
    const classes = useStyles();
    return (
        <div>
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Search Country"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleSearch}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
      summaryData: state,
    };
  };

const mapDispatchToProps = {
    searchCountry: searchCountry
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)
