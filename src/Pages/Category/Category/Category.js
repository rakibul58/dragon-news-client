import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This category has news : {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSummaryCard
                key={news._id}
                news={news}
                />)
            }
        </div>
    );
};

export default Category;