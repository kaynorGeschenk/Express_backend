import React from 'react';

function Form(){
    return (
        <div>
            <form>
                <label>Name</label>
                <input type= "text" name="name"></input>
                <label>Address:</label>
                <input type= "email" name= "email"></input>
                <label>Password</label>
                <input type= "password" name= "password"></input>
                <view style={StyleSheet.container}>
                    <image
                    style={{ width: 250, height: 250}}                                                                                                         
                    source={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FReact_(web_framework)&psig=AOvVaw1a34t7nmwZK_LmaS_tKHwr&ust=1605620512575000&source=images&cd=vfe&ved=2ahUKEwi659HTmIftAhXOgM4BHdy2CtcQr4kDegUIARCmAQ'}}
                    />


                </view>
            </form>
        </div>
    )
}

export default Form