import './index.css'

const LastComponent=()=>{
    return(
        <div className="last-component-outer-container">
            <div>
                <h1>Become ACCA in 18 months</h1>
                <p>Lorem ipsum</p>
                <div>
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

export default LastComponent