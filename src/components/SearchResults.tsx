// SearchResults.tsx
import React from 'react';
import * as S from '../styles/AddressSearch.styled';

const SearchResults = ({ places }: { places: kakao.maps.services.PlacesSearchResult }) => (
  <S.SearchListContainer>
    <S.SearchResult>검색결과</S.SearchResult>
    <S.SearchListContainer>
      {places.map((place: kakao.maps.services.PlacesSearchResultItem) => (
        <S.SearchResultItem key={place.id} className="item">
          <S.AddressName>{place.place_name}</S.AddressName>
          <S.Address>{place.road_address_name + place.place_name}</S.Address>
        </S.SearchResultItem>
      ))}
    </S.SearchListContainer>
  </S.SearchListContainer>
);

export default SearchResults;
