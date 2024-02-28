import './style.css'

const Contato = () => {
  return (
    <>
      <section className="contato__section">
        <div className="text__content_contato">
          <div className="title__section_contato">
            <span className="title__section-subtitle_contato">como me</span>
            <span className="title__section-title_contato">encontrar</span>
          </div>
          <div className="description__contato">
            <p>Me adicione no <span className="tec_highlighter">LinkedIn</span> para expandirmos nossa rede profissional e compartilharmos ideias e conhecimentos. 
            Para acompanhar meus projetos, me siga no <span className="tec_highlighter">Github</span>. 
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contato;