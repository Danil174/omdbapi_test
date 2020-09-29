import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ActionCreator } from '../redux/reducer';
import { Pagination } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  pagination: {
    display: 'inline-block',
    transform: 'translateX(-50%)',
    marginLeft: '50%',
    marginBottom: '20px'
  },
});

const SmartPagination = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const pageAmount = useSelector(state => state.pageAmount);
  const searchPage = useSelector(state => state.searchPage);

  const handlePageChange = (_, page) => {
    dispatch(ActionCreator.setSearchPage(page));
  };

  if (pageAmount < 11) {
    return <></>;
  }

  return (
    <Pagination
      className={classes.pagination}
      count={pageAmount}
      page={searchPage}
      onChange={handlePageChange}
      variant="outlined"
    />
  );
};

export default SmartPagination;
