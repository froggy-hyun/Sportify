import * as S from '@/styles/componentsStyles/AddressSearch.styled';

interface SearchResultsProps {
  places: kakao.maps.services.PlacesSearchResult;
  onPlaceClick: (place: kakao.maps.services.PlacesSearchResultItem) => void;
}

const SearchResults = ({ places, onPlaceClick }: SearchResultsProps) => {
  return (
    <S.SearchListContainer>
      <S.SearchResult>검색결과</S.SearchResult>
      <S.SearchItemContainer>
        {places.map((place: kakao.maps.services.PlacesSearchResultItem) => (
          <S.SearchResultItem
            key={place.id}
            className="item"
            onClick={() => {
              onPlaceClick(place);
            }}
          >
            <S.AddressName>{place.place_name}</S.AddressName>
            <S.Address>{place.road_address_name + ' ' + place.place_name}</S.Address>
          </S.SearchResultItem>
        ))}
      </S.SearchItemContainer>
    </S.SearchListContainer>
  );
};

export default SearchResults;
