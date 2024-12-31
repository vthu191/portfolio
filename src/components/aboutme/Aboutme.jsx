
import './aboutme.css'
import Myself from './Mysefl';
function Aboutme() {
    return <>
        <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-4 gap-7 mb-11">
            <div className='col-span-2 mt-6'>
                    <div className="general-container">
                        <input className="radio" type="radio" name="card" id="cardUno" />
                        <label className="content" htmlFor="cardUno">
                            <h1 className="title-card">
                                <span className="marg-bott text-gray-800"> Võ Thị Vân Thư</span>
                            </h1>
                        </label>

                        <input className="radio" type="radio" name="card" id="cardDos" />
                        <label className="content" htmlFor="cardDos">
                            <h1 className="title-card">
                                <span className="marg-bott text-white text-7xl">Passerelles Numeriques</span>
                                <span className="marg-bott text-white text-4xl ">My school</span>
                            </h1>
                        </label>

                        <input className="radio" type="radio" name="card" id="cardTres" />
                        <label className="content" htmlFor="cardTres">
                            <h1 className="title-card">
                                <span className="marg-bott text-gray-800 text-7xl">My Hobby</span>
                            </h1>
                        </label>

                        <input className="radio" type="radio" name="card" id="cardCuatro" />
                        <label className="content" htmlFor="cardCuatro">
                            <h1 className="title-card">
                                <span className="marg-bott text-white ">Final year student </span>
                            </h1>
                        </label>
                    </div>

                </div>
                <Myself/>
            </div>
        </div>
    </>
}

export default Aboutme;