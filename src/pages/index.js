/** @format */

import NavBarComponent from '../components/NavBarComponent';
import footerComponent from './../components/footerComponent';
import Link from 'next/link';
import CardComponent from './../components/CardComponent';
import { API_KEY } from '../lib';

export default function Home({ movies }) {
  // console.log(movies);
  const data  = movies?.results || [];
	return (
		<>
			<div className="container">
				<div className="d-flex justify-content-evenly flex-wrap">
					{data.length > 0 && data.map ((movies) =>
          <CardComponent key={movies.id}
            imagesPath={movies.backdrop_path}
            title={movies.title}
            id={movies.id}
           />)}
				</div>
			</div>
		</>
	);
}

// getServerSideProps

export async function getServerSideProps(context){
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;
  const res = await fetch(url);

  if(!res){
    console.log("Error Data");
  }

  const movies = await res.json();

  if(!movies){
    console.log("Error");
    return {
      props:{
        movies:[],
      }
    }
  }

  return {
    props:{
      movies,
    }
  }
}
