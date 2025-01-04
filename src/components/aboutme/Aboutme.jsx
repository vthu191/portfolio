
import './aboutme.css'
import Myself from './Mysefl';
function Aboutme() {
    return <>
        <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-4 gap-7 mb-11">
            <div className='col-span-2 mt-6'>
                    <div className="general-container">
                        <input className="radio" type="radio" name="card" id="cardUno" defaultChecked/>
                        <label className="content" htmlFor="cardUno">
                        </label>
                        <input className="radio" type="radio" name="card" id="cardDos" />
                        <label className="content" htmlFor="cardDos">
                        </label>
                        <input className="radio" type="radio" name="card" id="cardTres" />
                        <label className="content" htmlFor="cardTres">
                        </label>
                        <input className="radio" type="radio" name="card" id="cardCuatro" />
                        <label className="content" htmlFor="cardCuatro">
                        </label>
                    </div>

                </div>
                <Myself/>
            </div>
        </div>
    </>
}

export default Aboutme;