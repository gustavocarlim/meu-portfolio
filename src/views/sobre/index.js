import './style.css'


const SobreMim = () => {
  return (
    <>
      <section className="sobre-mim__section">
        <div className="containers">
          <div className='first_container'>
            <div className="title__section">
              <span className="title__section-intro">Gustavo Carlim</span>
              <span className="title__section-subtitle">Desenvolvedor</span>
              <span className="title__section-title">FullStack</span>
            </div>
            <div className="about__section">
              <div className="mobile__descript">
                <p>Sou um desenvolvedor júnior FullStack com mais de um ano de experiência estudando e prestando serviço na área de tecnologia. Atualmente estou cursando graduação em Análise e Desenvolvimento de Sistemas.</p>
              </div>
              <div className="desktop__descript">
                <p>Sou um desenvolvedor júnior FullStack com mais de um ano de experiência estudando e</p>
                <p>prestando serviço na área de tecnologia. Completei o programa de formação na Trybe e </p>
                <p>atualmente estou cursando graduação em Análise e Desenvolvimento de Sistemas.</p>
              </div>
            </div>
          </div>
          <div className='second_container'>
          </div>
        </div>
      </section>
    </>
  )
}

export default SobreMim;