import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from "axios"

const apikey="05cacc5c3444a09f5e231c33ce2478e1"
const url = "https://api.themoviedb.org/3"
const upcoming = "upcoming"
const nowPlaying = "now_playing"
const popular ="popular"
const topRated = "top_rated"
const imgUrl = "https://image.tmdb.org/t/p/original"

const Card = ({img})=>( <img className="card" src={img} alt="cover" /> )

const Row=({title,arr=[]})=>(
    <div className="row" >
        <h2>{title}</h2>
        <div>
        {
          arr.map((item,index)=>(
            <Card key = {index} img={`${imgUrl}/${item.poster_path}`}/>
          ))
        }

        </div> 
    </div>
)

export const Home = () => {
  const [upcomingMovies,setupcomingMovies] = useState([])
  const [PopularMovies,setPopularMovies] = useState([])
  const [nowPlayingMovies,setnowPlayingMovies] = useState([])
  const [topRatedMovies,settopRatedMovies] = useState([])


  useEffect(()=>{
    const fetchUpcoming = async()=>{
      const {data:{results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`)
      setupcomingMovies(results)
    }; 
    const fetchPopuler = async()=>{
      const {data:{results}} = await axios.get(`${url}/movie/${popular}?api_key=${apikey}`)
      setPopularMovies(results)
    };
    const fetchNowPlaying = async()=>{
      const {data:{results}} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}`)
      setnowPlayingMovies(results)
    }; 
    const fetchTopRated = async()=>{
      const {data:{results}} = await axios.get(`${url}/movie/${topRated}?api_key=${apikey}`)
      settopRatedMovies(results)
    }; 
    fetchUpcoming()
    fetchPopuler()
    fetchNowPlaying()
    fetchTopRated()
     },[])

  return (
    <section className="home">
        <div className="banner" style={{
          backgroundImage: PopularMovies[0] ?`url(${imgUrl}/${PopularMovies[0].poster_path})` :"rgb(16,16,16)" 
        }}>
          {
            PopularMovies[0] &&(
              <h1>{PopularMovies[0].original_title}</h1>
              )
            }
            {
              PopularMovies[0] &&(
                <p>{PopularMovies[0].overview}</p>
              )
            }  
              
          
        </div>
        <Row title={"Upcoming on Netflix"} arr={upcomingMovies}/>
        <Row title={"Now Playing"} arr={PopularMovies}/>
        <Row title={"TV Shows"} arr={nowPlayingMovies}/>
        <Row title={"Recently Viewed"} arr={topRatedMovies}/>
    </section>
  )
}
// "https://images.hdqwalls.com/download/avengers-infinity-war-official-poster-2018-4o-2048x2048.jpg"