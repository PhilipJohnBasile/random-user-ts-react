import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

import {
    HomeHeaderContainer,
    HomeHeaderTitleContainer,
    HomeBodyContainer,
    HomeButtons, HomeButtonsContainer
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

    const renderData = (data: { picture: { large: string ; }; name: { first: string; last: string; }; email: string ; location: { city: string; state: string; }; phone: string; }[]) =>
    {
        return data.map((item: { picture: { large: string ; }; name: { first: string; last: string; }; email: string; location: { city: string; state: string; }; phone: string; }) =>
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
        setApiData(renderData(data.filter((item: any) =>
            item.name.first.toLowerCase().includes(Event.target.value.toLowerCase()) ||
            item.name.last.toLowerCase().includes(Event.target.value.toLowerCase()) ||
            item.email.toLowerCase().includes(Event.target.value.toLowerCase()) ||
            item.location.city.toLowerCase().includes(Event.target.value.toLowerCase()) ||
            item.location.state.toLowerCase().includes(Event.target.value.toLowerCase()) ||
            item.phone.includes(Event.target.value)))) ;
    };

    const handleSortAscendingNameFirst = (Event: any) => {
        setApiData(renderData(data.sort((a: any, b: any) => a.name.first.localeCompare(b.name.first)))) ;
    }

    const handleSortDescendingNameFirst = (Event: any) => {
        setApiData(renderData(data.sort((a: any, b: any) => b.name.first.localeCompare(a.name.first)))) ;
    }

    const handleSortAscendingNameLast = (Event: any) => {
        setApiData(renderData(data.sort((a: any, b: any) => a.name.last.localeCompare(b.name.last)))) ;
    }

    const handleSortDescendingNameLast = (Event: any) => {
        setApiData(renderData(data.sort((a: any, b: any) => b.name.last.localeCompare(a.name.last)))) ;
    }

    const handleSortAscendingEmail = (Event: any) => {
        setApiData(renderData(data.sort((a: any, b: any) => a.email.localeCompare(b.email)))) ;
    }

    const handleSortDescendingEmail = (Event: any) => {
        setApiData(renderData(data.sort((a: any, b: any) => b.email.localeCompare(a.email)))) ;
    }

    const handleSortAscendingPhone = (Event: any) => {
        setApiData(renderData(data.sort((a: any, b: any) => a.phone.localeCompare(b.phone)))) ;
    }

    const handleSortDescendingPhone = (Event: any) => {
        setApiData(renderData(data.sort((a: any, b: any) => b.phone.localeCompare(a.phone)))) ;
    }

    const handleSortAscendingCity = (Event: any) => {
        setApiData(renderData(data.sort((a: any, b: any) => a.location.city.localeCompare(b.location.city)))) ;
    }

    const handleSortDescendingCity = (Event: any) => {
        setApiData(renderData(data.sort((a: any, b: any) => b.location.city.localeCompare(a.location.city)))) ;
    }

    const handleSortAscendingState = (Event: any) => {
        setApiData(renderData(data.sort((a: any, b: any) => a.location.state.localeCompare(b.location.state)))) ;
    }

    const handleSortDescendingState = (Event: any) => {
        setApiData(renderData(data.sort((a: any, b: any) => b.location.state.localeCompare(a.location.state)))) ;
    }

    return (
        <div>
            <HomeHeaderContainer>
                <HomeHeaderTitleContainer>
                    Generated Random Users
                </HomeHeaderTitleContainer>
            </HomeHeaderContainer>
            <Search onChange={ handleSearchInput } />
            <HomeButtonsContainer>
                <HomeButtons onClick={ handleSortAscendingNameFirst }>Sort Ascending Name First</HomeButtons>
                <HomeButtons onClick={ handleSortDescendingNameFirst }>Sort Descending Name First</HomeButtons>
                <HomeButtons onClick={ handleSortAscendingNameLast }>Sort Ascending Name Last</HomeButtons>
                <HomeButtons onClick={ handleSortDescendingNameLast }>Sort Descending Name Last</HomeButtons>
                <HomeButtons onClick={ handleSortAscendingEmail }>Sort Ascending Email</HomeButtons>
                <HomeButtons onClick={ handleSortDescendingEmail }>Sort Descending Email</HomeButtons>
                <HomeButtons onClick={ handleSortAscendingPhone }>Sort Ascending Phone</HomeButtons>
                <HomeButtons onClick={ handleSortDescendingPhone }>Sort Descending Phone</HomeButtons>
                <HomeButtons onClick={ handleSortAscendingCity }>Sort Ascending City</HomeButtons>
                <HomeButtons onClick={ handleSortDescendingCity }>Sort Descending City</HomeButtons>
                <HomeButtons onClick={ handleSortAscendingState }>Sort Ascending State</HomeButtons>
                <HomeButtons onClick={ handleSortDescendingState }>Sort Descending State</HomeButtons>
            </HomeButtonsContainer>
            <HomeBodyContainer>
                <CurrentPosts />
            </HomeBodyContainer>
        </div>
    );
};

export default Home;
