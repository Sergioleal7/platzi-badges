import React from 'react';
import '../assets/styles/pageLoading.css';
import Loader from './Loader';

const PageLoading = () => {
    return (
       <div className="PageLoading">
           <Loader />
        </div>
    )
};

export default PageLoading 