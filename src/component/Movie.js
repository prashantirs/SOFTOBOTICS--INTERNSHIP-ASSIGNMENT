import React, { useEffect, useState } from 'react'
import './Movie.css'
import Spinner from './Spinner'

const Movie = (props) => {
    const apiKey ='ffd11bb8';
    const [search, setSearch] = useState('Rab ne bana di jodi ')
    const [temp, setTemp] = useState('Rab ne bana di jodi ')
    const [isloding, setIsloding] = useState(true);
    const [data, setData] = useState([])
    useEffect(() => {
        
        setIsloding(true);
        getData();
    }, [search])

    const getData = async () => {
        setIsloding(true);
        const url = `https://www.omdbapi.com/?t=${search}&apikey=${apiKey}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setData(parsedData);
        console.log(parsedData);
        setIsloding(false);
    }
    const loginHandler = () => {
        setIsloding(true);
        props.login(false);
        setIsloding(false);
    }
    const searchHandler =(event)=>{
        setIsloding(true);
        setTemp(event.target.value);
        setIsloding(false);
    }
    const searcClickhHandle = ()=>{
        setSearch(temp);
        
    }
    return (
        <>
            <div >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Movies</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#"></a>
                                </li>
                            </ul>
                                <input className="form-control mx-4 me-2" type="search" placeholder="Search"  onChange={searchHandler}/>
                                <button className="btn mx-2 btn-primary" onClick={searcClickhHandle}>Search</button>
                            <form className="d-flex" role="search">
                                <button className="btn btn-outline-success" onClick={loginHandler}>Logout</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

            
            {isloding ? <Spinner/> : <div className="box">
                <div className="card my-2 mx-2" style={{ "width": "18rem" }}>
                    <img style={{ "width": "18rem", "height":"15rem" }} src={data.Poster} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{`${data.Title}`}</h5>
                        <p className="card-text">{data.Plot}..</p>
                        <p>Rating {}</p>
                        <a href="google.com" className="btn btn-dark">Book Now !</a>
                    </div>
                </div>
            </div>}
            

        </>
    )
}

export default Movie