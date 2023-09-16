
import LinkCustomer from './User/customer/LinkCustomer';
import LinkVisitor from './User/visitor/LinkVisitor';
import LinkAdmin from './User/admin/LinkAdmin';
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";

import './App.scss'
const AppRoutes=()=> {
	if("auth_token" in localStorage){
		if(localStorage.getItem("Role")=== "admin"){
		    return <LinkAdmin/>	  
		}
		if(localStorage.getItem("Role")=== "customer"){
			return <LinkCustomer/>	  
		}
	}
	if (!("auth_token" in localStorage)) {
	   return <LinkVisitor/>
	}	
	else return null
}
function App() {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box className='App'>
					<AppRoutes/>
				</Box>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;