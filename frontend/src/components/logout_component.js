const Signout = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
		</div>
	);
};

export default Signout;