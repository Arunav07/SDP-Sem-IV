import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FetchMovie } from '../../Services/SearchTMDB';
import { useDispatch, connect, useSelector } from "react-redux";
import { fetchMovieRequest } from '../../store/Actions';

export default function Movie() {
    const navigate = useNavigate();
    const location = useLocation();
    const movieID = location.pathname.split('/')[2];
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchMovieRequest(movieID));
    })
  return (
    <div>
        
    </div>
  )
}
