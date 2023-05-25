import React, { useState } from 'react';
import styled from 'styled-components'

const Api = () => {
    const [value, setValue] = useState("");
    const [info, setInfo] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!value) {
        setError("Please enter an Amount in Naira to convert to BUSD");
        return;
      }
      const convert = value / 248.34437;
      setInfo(convert)
    }

  return (
    <Wrapper>
            <div className="container">
        <form action="" onSubmit={handleSubmit}>
            <div className="field">
                <div className="input">
                  <label htmlFor="">Enter an Amount in Naira</label>
                  <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                </div>
                <button>Convert</button>
            </div>
            {error && (<p>{error}</p>)}
        </form>
        
    {
        info && (
            <div>
                <p>The amount is {info} BUSD</p>
            </div>
        )
    }
        
    </div>
  
    </Wrapper>
  )
}
const Wrapper = styled.div`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.container{
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 40vh;
    border: 1px solid green;
    padding: 20px;
}
.form{
    width: 100%;
}
.field{
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
}
.input{
    width: 80%;
    display: flex;
    flex-direction: column;
}
input{
    width: 100%;
    padding: 20px;
}
button{
    width: 20%;
    padding: 12px 20px;
    border: none;
    color: white;
    background-color: green;
}


`
export default Api