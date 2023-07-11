function Search() {
    return (
      <div className='search__form'>
        <form>
          <div className='search'>
            <input
              type='text'
              className='form-control'
              placeholder='поле поиска....'
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Искать
          </button>
        </form>
      </div>
    );
  }
  export default Search;