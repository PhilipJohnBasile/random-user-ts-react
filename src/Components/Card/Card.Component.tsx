import React from 'react';
import { FiEdit } from 'react-icons/fi';

import {
    CardContainer,
    CardDetailsContainer,
    CardDetailsImageContainer,
    CardDetailsParagraphContainer,
    CardDetailsSpanContainer
} from './Card.Styled';

const Card = (props: any) =>
{
    return (
        <CardContainer>
            <CardDetailsContainer>
                <FiEdit className='soc-icon' />
                <CardDetailsImageContainer src={props.item.picture.large} alt='' />
                <CardDetailsParagraphContainer className='name'>
                    <CardDetailsSpanContainer className='name'>
                        { props.item.name.first + ' ' + props.item.name.last }
                    </CardDetailsSpanContainer>
                </CardDetailsParagraphContainer>
                <CardDetailsParagraphContainer>
                    <CardDetailsSpanContainer>
                        { props.item.email }
                    </CardDetailsSpanContainer>
                </CardDetailsParagraphContainer>
                <CardDetailsParagraphContainer>
                    <CardDetailsSpanContainer>
                        { props.item.phone }
                    </CardDetailsSpanContainer>
                </CardDetailsParagraphContainer>
                <CardDetailsParagraphContainer>
                    <CardDetailsSpanContainer>
                        {
                            props.item.location.city +
                            ', ' +
                            props.item.location.state
                        }
                    </CardDetailsSpanContainer>
                </CardDetailsParagraphContainer>
            </CardDetailsContainer>
        </CardContainer>
    );
};

export default Card;
