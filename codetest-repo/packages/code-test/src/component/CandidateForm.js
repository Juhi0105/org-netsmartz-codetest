import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import '../css/CandidateForm.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectCandidate, submit } from '../app/formSlice';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import axios from 'axios';

const CandidateForm=()=> {
    const [name, setName] = useState('');
    const [address,setAddress] =useState('')
    const [city,setCity] = useState('')
    const [contactNumber,setContactNumber] = useState('')
    const [selectedValue, setSelectedValue] = useState('');
    const [message,setMessage] = useState('')
    const [success,setSuccess] = useState(false)

    const dispatch = useDispatch()
    const candidate = useSelector(selectCandidate)
    const candidateState = useSelector(state=>state.candidate.candidate)
    console.log(candidateState)
   
    
    const handleSubmit =(e) =>{
        e.preventDefault()
        const candidateData = dispatch(submit({
            name:name,
            address:address,
            city:city,
            contactNumber:contactNumber,
            gender:selectedValue,
            // onSubmit:true
        }))
        console.log(candidateData)
       
        axios.post("http://localhost:9001/home/candidate",candidateData.payload )
        .then(res => {
  
            console.log(res)
            setMessage(res.data)
            setSuccess(true)
        })
        .catch(err=>console.log(err))
      
    }
  return (
      
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
  
        <div className='container'>
            <div>
                <h1 className='heading'>Candidate Form</h1>
            </div>
            <div className='formContainer'>
                <div>
                    <TextField
                        id="outlined-name"
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
           
                <div>
                    <TextField
                        id="outlined-name"
                        label="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-name"
                        label="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-name"
                        label="Contact Number"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                    />
                </div> 
              
                <div className="gender">
                  
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                    <FormControlLabel value="female" control={<Radio />} label="Female" onChange={(e)=> setSelectedValue(e.target.value)}/>
                    <FormControlLabel value="male" control={<Radio />} label="Male" onChange={(e)=> setSelectedValue(e.target.value)}/>
                   
                    </RadioGroup>
                </div>
            </div> 
        
            <div className='button'> 
                <Button variant="contained" onClick={handleSubmit}>Add Details</Button>
            </div>
            { success ?<span> {message} </span> :<span></span>}
        </div>
    </Box>
  );
}

export default CandidateForm