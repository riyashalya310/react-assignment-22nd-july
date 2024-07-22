import './index.css'

const BecomeACCA=()=>{
    return(
        <div className="become-acca-outer-container">
            <div>
                <h1>Become ACCA in 18 months</h1>
                <p>Lorem ipsum</p>
                <div>
                    <div className="shadow">
                        <p>Lorem ipsum</p>
                        <p>1920</p>
                    </div>
                    <div className="shadow">
                        <p>Lorem Ipsum</p>
                        <p>1920</p>
                    </div>
                    <div className="shadow">
                        <p>Lorem Ipsum</p>
                        <p>1920</p>
                    </div>
                    <div className="shadow">  
                        <p>Lorem Ipsum</p>
                        <p>1920</p>
                    </div>
                </div>
                <div>
                    <button type="button" className="btn btn-primary">Primary</button>
                    <button type="button" className="btn btn-danger">Danger</button>
                </div>
            </div>
            <form>
                <h1>Form Input</h1>
                <div>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Phone" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default BecomeACCA