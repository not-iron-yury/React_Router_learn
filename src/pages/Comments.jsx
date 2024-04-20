import { Header } from './../components/header/Header';
import { Footer } from './../components/footer/Footer';

export const Comments = () => {

  return(
    <>
      <Header />
      <section className="content">
        <div className="container">
          <h1>Отзывы</h1>
          <p>Василий Пупкин</p>
          <p>Отзыв: Четко, внатуре класс.</p>
        </div>
      </section>
      <Footer />
    </>

  )
}