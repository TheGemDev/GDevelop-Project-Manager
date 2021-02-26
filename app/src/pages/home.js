import React from 'react';
import PageHeader from '../components/pageHeader';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import fixedRequire from './fixedRequire'
const app = fixedRequire("electron").remote.app

export default function Home() {
    var path = app.getPath('documents')
    return(
        <>
            <PageHeader 
            title="GDevelop Projects"
            subTitle={path}
            icon={<SentimentVerySatisfiedIcon />}
            />
        </>
        
    )
}
