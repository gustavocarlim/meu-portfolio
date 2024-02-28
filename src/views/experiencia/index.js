import './style.css'

const Experiencia = () => {
  return (
    <>
      <section className="experiencia__section">
        <div className="text__content_experiencia">
          <div className="title__section_experiencia">
            <span className="title__section-subtitle_experiencia">o que venho</span>
            <span className="title__section-title_experiencia">aprendendo</span>
          </div>
          <div className="description__experiencia">
            <p>Iniciei meus estudos na área da tecnologia em 2023 quando comecei o curso de desenvolvedor Web FullStack no plano de ensino Trybe. Desde então, aprendi e aprimorei habilidades em{" "}
              <span className="tec_highlighter">JavaScript, TypeScript, React, Node.js, C#</span> e outras tecnologias.
            </p>
            <p>Comecei a adquirir experiência profissional prestando serviço em site de Freelancer desde janeiro de 2024, onde desenvolvi o frontEnd de uma page de filmes, voltada para críticas online.</p>
            <p>Tecnologias usadas:{" "}<span className="tec_highlighter">React, MySQL e Node.js</span>.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experiencia;