import { useParams } from "react-router-dom";
import { useState } from "react";
import "../Styles/FairyTaleStory.css";
import Rating from "./Rating";

const FairyTaleStory = () => {
    const { taleId } = useParams();
    const [currentPage, setCurrentPage] = useState(0); // Текущая страница

    // Преобразуем taleId в строку
    const taleIdStr = String(taleId);

    // Функция для разбивки текста на части по 1000 символов
    const splitTextIntoPages = (text) => {
        const pages = [];
        for (let i = 0; i < text.length; i += 1000) {
            pages.push(text.slice(i, i + 1000));
        }
        return pages;
    };

    // Получаем текст сказки в зависимости от taleId
    let taleText;
    switch (taleIdStr) {
        case '1':
            taleText = "Сказка о рыбаке и рыбке: сказка большая лень писать!";
            break;
        case '2':
            taleText = `
                В одном маленьком городке жил мальчик по имени Линай. Он был очень любознательным и всегда
                интересовался окружающим миром. Однажды Линай нашел на улице странный камень, который светился в
                темноте. Мальчик решил взять его домой и показать своим друзьям.

                Когда друзья увидели камень, они сразу же захотели узнать, откуда он взялся. Линай рассказал им,
                что нашел его на улице возле старого заброшенного дома. Друзья решили отправиться туда вместе,
                чтобы посмотреть, нет ли там еще таких камней.

                Прибыв на место, ребята обнаружили, что старый дом полон загадочных предметов. Они нашли
                старинные книги, древние карты и множество других интересных вещей. Но больше всего их
                заинтересовал один предмет – маленький флакон с жидкостью, которая светилась ярким зеленым
                светом.

                Ребята взяли флакон и вернулись домой. Они решили провести эксперимент и вылить жидкость на
                камень, который нашел Линай. Как только жидкость коснулась камня, он начал светиться еще ярче.
                Однако вскоре свет стал тускнеть, а затем исчез совсем.

                Линай понял, что жидкость каким-то образом влияет на камень, делая его светящимся. Он решил
                назвать эту жидкость "линялым фосфором" в честь себя и своего открытия. С тех пор Линай и его
                друзья стали проводить много времени, исследуя свойства этой жидкости и придумывая новые
                эксперименты.

                Так Линай открыл новый мир науки и исследований, благодаря своей любознательности и стремлению к знаниям.
            `;
            break;
        case '3':
            taleText = `
                В далеком королевстве, где горы касались небес, а реки текли чистыми, как слеза младенца, жила
                девушка по имени Алина. Она была дочерью кузнеца и проводила дни, помогая отцу в мастерской.
                Каждый день она наблюдала за тем, как отец создает величественные мечи и доспехи для рыцарей
                королевства.

                Однажды в город приехал знаменитый скульптор по имени Монументаль. Он был известен своими
                грандиозными статуями, которые украшали площади крупнейших городов мира. Король пригласил его
                создать памятник в центре города, чтобы увековечить память о великих подвигах предков.

                Монументаль начал работу, и каждый день жители города собирались вокруг, чтобы наблюдать за
                процессом создания скульптуры. Но однажды случилось нечто странное. Во время работы Монументаль
                внезапно закашлялся, и из его рта вылетел небольшой кусочек мрамора. Он упал прямо перед Алиной,
                которая стояла рядом, наблюдая за мастером.

                Алина подняла кусок мрамора и увидела, что он был идеально гладким и блестящим. Она решила
                сохранить его как сувенир. Вернувшись домой, она положила мраморный осколок на полку в своей комнате.

                Прошло несколько дней, и Алина заметила, что мраморный осколок начал менять цвет. Сначала он
                стал золотым, потом красным, а затем зеленым. Девушка была поражена этим явлением и решила спросить
                совета у отца.

                Отец внимательно осмотрел мраморный осколок и сказал: «Дочь моя, кажется, этот мрамор обладает
                магическими свойствами. Возможно, он реагирует на твои эмоции».

                Алина решила проверить эту теорию. Она взяла мраморный осколок в руки и начала думать о своих мечтах
                и желаниях. Мрамор начал сиять ярким светом, и вдруг из него появился маленький дух, похожий на
                искру света.

                «Я – дух мраморного осколка», – произнес дух. – «Мое предназначение – помогать тебе воплощать свои
                мечты в реальность. Скажи мне свое желание, и я постараюсь его исполнить».

                Алина задумалась. Она давно мечтала стать скульптором, как Монументаль, и создавать такие же
                великолепные произведения искусства. Она рассказала об этом духу, и тот ответил: «Твое желание
                велико, но оно достойно тебя. Я помогу тебе».

                С этого дня Алина стала учиться искусству скульптуры. Дух мраморного осколка помогал ей,
                подсказывал, какие инструменты выбрать и как правильно обработать материал. Постепенно ее работы
                становились все лучше и лучше.

                Через несколько лет Алина создала свою первую большую скульптуру – памятник королю, который был
                установлен в центре города. Жители восхищались её талантом, и скоро её слава распространилась далеко
                за пределы королевства.

                Так Алина стала известной скульптором, и её работы украшают многие города и дворцы. А мраморный осколок, который она нашла, до сих пор хранится у неё как напоминание о том, что даже самые маленькие вещи могут обладать великой силой.
            `;
            break;
        default:
            taleText = "Сказка не найдена";
    }

    // Разбиваем текст на страницы
    const pages = splitTextIntoPages(taleText);

    // Обработчики для кнопок "Назад" и "Вперед"
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="fairy-tale-container">
            <h1>Сказка {taleId}</h1>
            <div className="fairy-tale-text-box">
                {pages[currentPage]}
            </div>
            <div className="pagination-controls">
                <button onClick={handlePrevPage} disabled={currentPage === 0}>
                    Назад
                </button>
                <span>Страница {currentPage + 1} из {pages.length}</span>
                <button onClick={handleNextPage} disabled={currentPage === pages.length - 1}>
                    Вперед
                </button>

            </div>
            <Rating taleId={taleId} />
        </div>
    );
};

export default FairyTaleStory;