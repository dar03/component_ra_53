import News from './News'

/**
 * Компонент Блок Новостей
 */

function NewsList(){
    return(
        <div className="news__blocks">
      <News>
        <p className="news__block">News-01</p>
      </News>
      <News>
        <p className="news__block">News-02</p>
      </News>
      <News>
        <p className="news__block">News-03</p>
      </News>
    </div>
    );

}

export default NewsList;