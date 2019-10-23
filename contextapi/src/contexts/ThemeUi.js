import React, { createContext,Component } from 'react';
// create context and store in ThemeContext variable const
export const ThemeContext = createContext();



class ThemeUiProvider extends Component {
    // The data we want to share to diff comps
    state={
        isLightTheme:true,
        light:{
            text:'#555',ui:'#ddd',bg:'#eee'
        },
        dark:{
            text:'#ddd',ui:'#333',bg:'#555'
        }
    }
    render() {
        return (

            // The Provider that will wrap our comps to share the data provided by this context.
            // The 'value' pty is going to take in the data we want to provide to comps wrapped by the `ThemeContext.Provider`
            <ThemeContext.Provider value={{...this.state}}>
                {/* The 'children' of the ThemeUiProvider refers to the comps it wraps in any file e.g <Navbar/> in App.js */}
                {/* With this, the children can access the data in the provider */}
                {this.props.children}
                
            </ThemeContext.Provider>
        )
    }
}

export default ThemeUiProvider;
