import NewsList from "./NewsList";
import Promo from "./Promo";
import Search from "./Search";
import Widgets from "./Widgets";

function StartPage() {
    return (
        <div className="Page">
            <div>
                <NewsList />
            </div>
            <div>
                <Search />
            </div>
            <div>
                <Promo img={
                    'https://ifish2.ru/wp-content/uploads/skolko-mojno-zarabotat-na-sajt9.jpg'
                } />
            </div>
            <div>
                <Widgets />
            </div>
        </div>
    );
}

export default StartPage;