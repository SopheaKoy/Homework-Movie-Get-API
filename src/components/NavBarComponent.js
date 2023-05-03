import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

export default function NavBarComponent() {
  return (
		<div>
			<Navbar
				bg="light"
				variant="light">
				<Container>
					<Navbar.Brand href="/">Home</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/about">About Us</Nav.Link>
						<Nav.Link href="/movie">Movies</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
  );
}
