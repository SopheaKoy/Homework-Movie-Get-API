/** @format */

import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY, IMAGE_BASE_URL } from '../../lib';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

export default function Movie() {
	const router = useRouter();
	console.log(router.query);
	const [id, setId] = useState(router.query.id);
	const [movie, setMovie] = useState({});
	const [loading, setLoading] = useState({});
	const [key, setKey] = useState();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleClick = () => setClick(true);
	const handleShow = () => setShow(true);

	useEffect(() => {
		setLoading(true);
		fetch(BASE_URL + `/movie/${id}?api_key=${API_KEY}`)
			.then((res) => res.json())
			.then((data) => {
				setMovie(data);
			});
		fetch(BASE_URL + `/movie/${id}/videos?api_key=${API_KEY}`)
			.then((res) => res.json())
			.then((data) => {
				console.log('movie is from ', data);
				const key = data.results[0].key;
				setKey(key);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, []);

	console.log(movie);
	// if (loading) {
	// 	return (
	// 		<Card style={{ width: '18rem' }}>
	// 			<Card.Img
	// 				variant="top"
	// 				src="holder.js/100px180"
	// 			/>
	// 			<Card.Body>
	// 				<Placeholder
	// 					as={Card.Title}
	// 					animation="glow">
	// 					<Placeholder xs={6} />
	// 				</Placeholder>
	// 				<Placeholder
	// 					as={Card.Text}
	// 					animation="glow">
	// 					<Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
	// 					<Placeholder xs={6} /> <Placeholder xs={8} />
	// 				</Placeholder>
	// 				<Placeholder.Button
	// 					variant="primary"
	// 					xs={6}
	// 				/>
	// 			</Card.Body>
	// 		</Card>
	// 	);
	// }
	return (
		<div className="container">
			<div className="container text-center">
				<div className="row">
					<div className="col-3">
						<Card>
							<Card.Img
								variant="top"
								src={
									movie.backdrop_path
										? IMAGE_BASE_URL + movie.backdrop_path
										: 'https://img.freepik.com/premium-vector/funny-colorful-monkey-with-hat-sunglasses-graffiti-artwork-style_747026-41.jpg?w=2000'
								}
							/>
							<Card.Body>
								{/* <Card.Title>{movie.title ? movie.title : "Unknow"}</Card.Title> */}
								{/* <Card.Text>{movie.overview ? movie.overview : 'Not Description'}</Card.Text> */}
							</Card.Body>
						</Card>
					</div>
					<div className="col-9">
						<div>
							<p>{movie.overview ? movie.overview : 'Unknow'}</p>
							<Button
							variant="primary"
							onClick={handleShow}>
							View detail
							</Button>
						</div>
						<div>
                			<Modal show={show} onHide={handleClose} size="lg">
                    			<div class="ratio ratio-16x9">
                        			<iframe src={`https://www.youtube.com/embed/${key}`} title="YouTube video" allowfullscreen></iframe>
                    			</div>
               	 			</Modal>
            			</div>
					</div>
				</div>
			</div>
		</div>
	);
}
