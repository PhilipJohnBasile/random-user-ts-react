import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

import {
    HomeHeaderContainer,
    HomeHeaderTitleContainer,
    HomeBodyContainer
} from './Home.Styled';

import Card from '../../Components/Card/Card.Component';
import Search from '../../Components/Search/Search.Component';

const Home = () =>
{
    const [apiData, setApiData]: any = useState([]);
    const [data, setData] = useState([]);

    useEffect(() =>
    {
        axios.request(
            {
                method: 'GET',
                url: 'api/?results=100&inc=name,picture,email,phone,location&noinfo'
            })
            .then((Response: any) =>
            {
                setData(Response.data.results);
                setApiData(renderData(Response.data.results));
            })
    }, [setData, setApiData]);

    const renderData = (data: { picture: { large: string ; }; name: { first: string; last: string; }; email: string ; dob: { date: string; }; location: { city: string; state: string; }; phone: string; }[]) =>
    {
        return data.map((item: { picture: { large: string ; }; name: { first: string; last: string; }; email: string; dob: { date: string; }; location: { city: string; state: string; }; phone: string; }) =>
            (
                <Card key={ Math.floor(Math.random() * 1000000) } item={ item } />
            ));
    };

    const CurrentPosts = () =>
        (
            apiData
        );
    const handleSearchInput = (Event: any) =>
    {
        setApiData(renderData(data.filter((item: any) => item.name.first.toLowerCase().includes(Event.target.value.toLowerCase()) || item.name.last.toLowerCase().includes(Event.target.value.toLowerCase()) || item.location.city.toLowerCase().includes(Event.target.value.toLowerCase()) || item.location.state.toLowerCase().includes(Event.target.value.toLowerCase()) || item.phone.includes(Event.target.value)))) ;
    };

    return (
        <div>
            <HomeHeaderContainer>
                <HomeHeaderTitleContainer>
                    Generated Random Users
                </HomeHeaderTitleContainer>
            </HomeHeaderContainer>
            <Search onChange={ handleSearchInput } />
            <HomeBodyContainer>
                <CurrentPosts />
            </HomeBodyContainer>
        </div>
    );
};

export default Home;
