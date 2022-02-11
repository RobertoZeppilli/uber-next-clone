import { useState } from 'react';
import { SearchWrapper, ButtonContainer, BackButton, InputContainer, FromToIcons, Circle, Line, Square, InputBoxes, Input, PlusIcon, SavedPlaces, StarIcon, ConfirmContainer, ConfirmLocationButton } from "./tailwind-components/search-page-components";

import Link from 'next/link'

const Search = () => {
    const [pickup, setPickup] = useState("")
    const [dropoff, setDropoff] = useState("")

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
                <Input
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Enter pickup Location..." />
                <Input
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    placeholder="Whero To?" />
            </InputBoxes>
            <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
        </InputContainer>
        <SavedPlaces>
            <StarIcon src="https://img.icons8.com/ios-filled/50/000000/star.png" />
            Saved Places
        </SavedPlaces>
        <ConfirmContainer>
            <Link href={{ pathname: "/confirm", query: { pickup, dropoff } }} passHref>
                <ConfirmLocationButton>
                    Confirm Location
                </ConfirmLocationButton>
            </Link>
        </ConfirmContainer>
    </SearchWrapper>;
};

export default Search
