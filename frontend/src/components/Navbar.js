import {Button, AppBar, Toolbar, Typography, styled} from '@mui/material'
import { Stack } from '@mui/system'
import { IconButton } from 'material-ui'


const Navbar = () => {
    return(

      <CustomNavbar className='navbar'>
        <Toolbar>
          <IconButton/>
          <Typography variant='h6' component='div' sx={{ flexGrow:1 }}>
            MedicalCentral
          </Typography>
          <Stack direction='row' spacing={2}>
            <Button color='inherit'>About</Button>
            <Button color='inherit'>Cart</Button>
            <Button color='inherit'>SignUp</Button>
          </Stack>
        </Toolbar>
      </CustomNavbar>
)}

const CustomNavbar = styled(AppBar)`
    background-color: #030303;
`

export default Navbar
