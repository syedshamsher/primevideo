import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchQuery } from "../../Redux/Search/actions";

export function SearchResult(props) {
  const { searched } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const history = useHistory();
  let path = null;

  useEffect(() => {
    let temp = history.location.search.split("=")[1];
    console.log(temp);
    dispatch(searchQuery({ query: temp }));
  }, [history.location.search]);

  return <div></div>;
}
