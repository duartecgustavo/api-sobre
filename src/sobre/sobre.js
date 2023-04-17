import { useState } from 'react';
import foto from '../foto-perfil.png';
import { buttonStyle, divStyle, h3Style, inputStyle, liStyle, p2Style, pStyle } from './style';

export function Sobre() {

    const [cep, setCep] = useState('');
    const [dataCep, setDataCep] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
        setCep(event.target.value);
    }

    const chamarCep = () => {
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            setDataCep(data);
        });
    }

    return (
        <>
            <div className="container" style={divStyle}></div>
            <div className="container">
                <div className="row">
                    <div className="col-3 p-3">
                        <img src={foto} className='mb-3' />
                        <div>
                            <h3>Leila Ribeiro</h3>
                            <p style={p2Style}>São Paulo, Brazil</p>
                            <p style={p2Style}>Accenture</p>
                            <a href="http://github.com/leilalribeiro" target="_blank" style={p2Style}>github.com/leilalribeiro</a>
                        </div>
                    </div>
                    <div className="col-9 p-3">
                        <div>
                            <p style={pStyle}>
                                Olá Pessoal, eu sou a Leila, estudante na Fiap no curso de Sistemas para Internet, e estou no 2º ano do curso.
                                <br />
                                <br />
                                Faço estágio numa consultoria e atuo na área funcional e de negócios, quero me desenvolver melhor na área de User Experience.
                                Interesso-me por assuntos como Ánalise de Dados e Metodologias Ágeis.
                            </p>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-6">
                                <h3>Skills</h3>
                                <ul>
                                    <li style={liStyle}>Javascript</li>
                                    <li style={liStyle}>UX/UI</li>
                                    <li style={liStyle}>MongoDB</li>
                                    <li style={liStyle}>Oracle</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <h3>Certificações</h3>
                                <ul>
                                    <li style={liStyle}>UX Strategy</li>
                                    <li style={liStyle}>Desenvolvimento FrontEnd</li>
                                    <li style={liStyle}>Cloud</li>
                                    <li style={liStyle}>SQL Server</li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h3>Onde me encontrar?</h3>
                            <form onSubmit={handleSubmit}>
                                <input style={inputStyle} id="inputCep" type="text" placeholder="Digite seu CEP" value={cep} onChange={handleChange} />
                                <button style={buttonStyle} onClick={() => { chamarCep() }}>Buscar</button>
                            </form>
                            <h3 style={h3Style}>
                                {dataCep.logradouro}. {dataCep.bairro}. {dataCep.localidade}. {dataCep.uf}
                            </h3>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}