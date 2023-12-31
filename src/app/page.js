"use client"
import * as React from 'react'
import { ThemeProvider } from "styled-components";
import { theme } from "../../GlobalStyles/theme";
import { GlobalStyles } from "../../GlobalStyles/globalStyles";
import { FormContainer } from "./components/Container";
import { Submitted } from "./components/Submitted";
import { MyContext } from '../../contexts/MyContext';

export default function Home() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [email, setEmail] = React.useState('');

  return (
    <ThemeProvider theme={theme} >
      <MyContext.Provider value={{ email, setEmail }}>
        <GlobalStyles />
        {isSubmitted ?
          <Submitted
            getGambiarra={setIsSubmitted}
          />
          :
          <FormContainer
            getState={setIsSubmitted}
            className={isSubmitted ? 'slideIn' : ''}
            isSubmitted={isSubmitted}
          />
        }
      </MyContext.Provider>
    </ThemeProvider>
  )
}
