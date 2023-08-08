import {Box, Button, Typography} from "@mui/material"
import TextareaAutosize from '@mui/base/TextareaAutosize';
import styled from "@emotion/styled";
import { useState } from "react";

import { askBot } from "../api/Api";

const Conatiner=styled(Box)`
    margin:3% 17%;
    height:100vh;
    overflow:hidden;
`

const FirstConatiner=styled(Box)`
    width:95%;
    height:65%;
    margin-bottom:5%;
    background-image: url("https://www.transparenttextures.com/patterns/dark-matter.png");
    
`

const InputContainer=styled(Box)`
    width:95%;
    display:flex;
`
const InputStyled =styled(TextareaAutosize)`
    border:.5px solid #414241;
    border-radius: 5px;
    width:90%;
    padding:10px 20px;
    background:#d9dbd9;
    color:black;
    font-size:19px;
    box-sizing: border-box;
    margin-top:10px;
`


const ButtonStyled=styled(Button)`
    background:#038c05;
    padding:2px;
    margin-left:1%;
    border:0.5px solid #024003;
    color:black;
    font-size:19px;
   
`

const InputFiled=()=>{
    const [inputValue,setInputValue]=useState("");

    const arrow=">>"
    const response=""


    const handleClick=async()=>{
        response=await askBot(inputValue);
               
    }

    const handleInput=(event)=>{
        setInputValue(event.target.value)
    }

    return(
        <Conatiner>
            <FirstConatiner>
                <Typography>{inputValue}</Typography>
                <Typography>{response}</Typography>
            </FirstConatiner>
            <InputContainer>
                <InputStyled type="text" onChange={handleInput} placeholder="Enter the text...."></InputStyled>
                <ButtonStyled onClick={handleClick()}>{arrow}</ButtonStyled>
            </InputContainer>
        </Conatiner>
    )
}
export default InputFiled;