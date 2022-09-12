import logoDelete from '../../img/delete-icon.svg'

export function FavCityList(props) {
  const {favCityList, onClickDelFavCity} = props;

  return (
    <div className="weather__locations">
      <div className="added-locations">
          <h2>Added Locations:</h2>
      </div>
      <div className="list-locations">
        <FavList 
          favCityList={favCityList}
          onClickDelFavCity={onClickDelFavCity}
        />
      </div>
    </div>
  )
}

function FavList(props) {
  const {favCityList, onClickDelFavCity} = props;

  return (
    favCityList.map(item =>
      <FavListItem 
        key={item.id}
        name={item.name}
        onClickDelFavCity={onClickDelFavCity}
      />
    )
  )
}

function FavListItem(props) {
  const {name, onClickDelFavCity} = props;

  console.log(name);

  function handleClick() {
    onClickDelFavCity(name);
    console.log(name);
  }

  return (
    <div className="favorite-city">
      <span className="loc-elem">{name}</span> 
      {/* <button className="btn-delete" onClick={onClickDelFavCity}>  */}
      <button className="btn-delete" onClick={handleClick}> 
        <img src={logoDelete} alt="-"/> 
      </button>
    </div>
  )
}