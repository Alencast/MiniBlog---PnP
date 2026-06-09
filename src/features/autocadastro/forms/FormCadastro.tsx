export default function formCadastro() {
	return (
		<>
			<div className="col-sm-6 col-lg-4 mb-3">
				<div className="br-input">
					<label htmlFor="input-icon">Login</label>
					<div className="input-group">
						<div className="input-icon">
							<i
								className="fas fa-user-tie"
								aria-hidden="true"
							></i>
						</div>
						<input
							id="input-icon"
							type="text"
							placeholder="Placeholder"
						/>
					</div>
				</div>
			</div>
			<div className="col-sm-6 col-lg-4 mb-3">
				<div className="br-input small">
					<label htmlFor="input-icon-small">Nome</label>
					<div className="input-group">
						<div className="input-icon">
							<i
								className="fas fa-user"
								aria-hidden="true"
							></i>
						</div>
						<input
							className="small"
							id="input-icon-small"
							type="text"
							placeholder="Placeholder"
						/>
					</div>
				</div>
			</div>
			<div className="col-sm-6 col-lg-4 mb-3">
				<div className="br-input large">
					<label htmlFor="input-icon-large">Grupo</label>
					<div className="input-group">
						<div className="input-icon">
							<i
								className="fas fa-users"
								aria-hidden="true"
							></i>
						</div>
						<input
							className="large"
							id="input-icon-large"
							type="text"
							placeholder="Placeholder"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
