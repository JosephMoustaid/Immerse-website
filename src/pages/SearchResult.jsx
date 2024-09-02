import React from 'react';
import CourseCategorySection from '../components/CourseCategorySection';
import SearchResult from '../components/SearchResult';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
    const { query } = useParams();
    return (
        <div className="container mt-5 ">
            <div className="row pt-5">
                <CourseCategorySection />
                <SearchResult query={query} />
            </div>
        </div>
    );
}

export default CoursePage;
