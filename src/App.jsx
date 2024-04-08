import './App.css'
import {Heading} from "./components/Heading/Heading";
import {Paragraph} from "./components/Paragraph/Paragraph";
import {Hero} from "./parts/Hero/Hero";
import {SearchBlock} from "./parts/SearchBlock/SearchBlock";
import {FilmCardBlock} from "./parts/FilmCardBlock/FilmCardBlock";

function App() {

  return (
    <div className='site-container'>
      <Hero />
      <Heading text={'Поиск'} />
      <Paragraph
        text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}
        size={16}
      />
      <SearchBlock />
      <FilmCardBlock />
    </div>
  )
}

export default App
