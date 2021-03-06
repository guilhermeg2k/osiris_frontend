import React from "react";
import { Box, Button, Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
function Home() {
	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			marginTop="40px"
		>
			<Box width="480px">
				<Box display="flex" justifyContent="center" marginBottom="40px">
					<Typography variant="h5" component="h1">
						Bem vindo
					</Typography>
				</Box>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
				>
					<Box width="75%">
						<Grid container direction="column" spacing={1}>
							<Grid item>
								<Link to="/prescription/create">
									<Button
										variant="contained"
										color="primary"
										size="large"
										fullWidth
									>
										Receitar
									</Button>
								</Link>
							</Grid>
							<Grid item>
								<Link to="/prescriptions">
									<Button
										variant="contained"
										color="primary"
										size="large"
										fullWidth
									>
										Visualizar Receitas
									</Button>
								</Link>
							</Grid>
							<Grid item>
								<Link to="/medicines">
									<Button
										variant="contained"
										color="primary"
										size="large"
										fullWidth
									>
										Visualizar Medicações
									</Button>
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Home;
