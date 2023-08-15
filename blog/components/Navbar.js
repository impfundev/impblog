export default function Navbar() {
    return (
        <div className="navbar navbar-glass">
	<div className="navbar-start">
		<a className="navbar-item">Ripple UI</a>
	</div>
	<div className="hidden lg:block navbar-center">
		<a className="navbar-item">Smartphone</a>
		<a className="navbar-item">Laptop</a>
		<a className="navbar-item">PC</a>
	</div>
	<div className="navbar-end">
		<a className="hidden lg:block navbar-item">Home</a>
	</div>
</div>
    )
}