// import React from 'react';
import { SearchWrapper, ButtonContainer, BackButton, InputContainer, FromToIcons, Circle, Line, Square, InputBoxes, Input, PlusIcon, SavedPlaces, StarIcon, ConfirmContainer, ConfirmLocationButton } from "./tailwind-components/search-page-components";

import Link from 'next/link'

const Search = () => {
    return <SearchWrapper>
        <Link href="/" passHref>
            <ButtonContainer>
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </ButtonContainer>
        </Link>
        <InputContainer>
            <FromToIcons>
                <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                <Square src="https://img.icons8.com/ios-filled/50/9CA3AF/square.png" />
            </FromToIcons>
            <InputBoxes>
                <Input placeholder="Enter pickup Location..." />
                <Input placeholder="Whero To?" />
            </InputBoxes>
            <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
        </InputContainer>
        <SavedPlaces>
            <StarIcon src="https://img.icons8.com/ios-filled/50/000000/star.png" />
            Saved Places
        </SavedPlaces>
        <ConfirmContainer>
            <ConfirmLocationButton>
                Confirm Location
            </ConfirmLocationButton>
        </ConfirmContainer>
    </SearchWrapper>;
};

export default Search
