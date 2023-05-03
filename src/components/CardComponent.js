/** @format */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IMAGE_BASE_URL } from '../lib';
import {useRouter } from "next/router";


export default function CardComponent({title, description,imagesPath ,id}) {
	const router = useRouter();
	const handleClick = () =>{
		router.push(`/movies/${id}`);
	}
	return (
		<div>
			<div

				className="text-decoration-none text-dark" >
				<Card style={{ width: '18rem' }} className="h-100 m-2">
					<Card.Img
						variant="top"
						src={
							imagesPath
								? IMAGE_BASE_URL + imagesPath
								: 'https://img.freepik.com/premium-vector/funny-colorful-monkey-with-hat-sunglasses-graffiti-artwork-style_747026-41.jpg?w=2000'
						}
					/>
					<Card.Body>
						<Card.Title>{title ? title : 'Unknow'}</Card.Title>
						{/* <Card.Text>
						{description? description : "Unknow"}
					</Card.Text> */}
						<Button variant="primary" onClick={handleClick}>View detail</Button>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}
