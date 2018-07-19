import React, { Component } from 'react';
import logo from './logo.svg';

import styled, {keyframes, ThemeProvider} from 'styled-components'

import { theme1, theme2, Button } from './theme/globalStyle'
import ThemeSelect from './components/ThemeSelect'

const AppWrapper = styled.div`
  text-align: center;
`
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `
const AppLogo = styled.img`
  animation: ${rotate360} infinite 10s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite .5s linear;
  }
`
const AppHeader = styled.div`
height: 12rem;
padding: 1rem;
color: ${props => props.theme.dark};
background-color: ${props => props.theme.primary};
`
const AppTitle = styled.h1`
  font-weight = 900;
`
const AppIntro = styled.p`
  color: ${props => props.theme.dark};
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`
const CodeWrapper = styled.code`
  font-size: 1.3rem;
`

const BigButt = Button.extend`
height: 3rem;
font-size: 2rem;
width: 60vw;
border-radius: 30px;
`;


class App extends Component {
  state = {
    theme: theme1
  }
  handleThemeChange = e => {
    let theme = e.target.value
    theme === 'theme1' ? (theme = theme1) : (theme = theme2)
    this.setState({ theme })
  }
  render() {
    return (
    <ThemeProvider theme={this.state.theme}>
      <AppWrapper>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
        <AppIntro>
        <Button>Normal Button</Button>
          <Button primary>Primary Button</Button>
          Components styled with <code>styled-components</code>{''}
          {/* <EmojiWrapper aria-label="nail polish">💅</EmojiWrapper> */}
        </AppIntro>
        <ThemeSelect handleThemeChange={this.handleThemeChange}/>
        <BigButt>Big Button</BigButt>
      </AppWrapper>
    </ThemeProvider>
    );
  }
}

export default App;

