import React, { useState, useRef } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import styles from './MainScreenStyle'

const MainScreen = () => {

    const [value, setValue] = useState("0")
    const [bracketOPen, setBracketOpen] = useState(false)
    const scrollViewRef = useRef();

    const handlePress = (val) => {
        // console.log("pressed" ,val)

        if (val == 'AC') {
            setValue("0")
        }
        else if (val == 'back') {
            setValue(value.slice(0,-1));
        }

        else if (val == '=') {
            try {
                if( (value.match(/\(/g) || []).length ==  (value.match(/\)/g) || []).length ){
                    if(value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '/' || value.slice(-1) == '*'
                    || value.slice(-1) == '%' || value.slice(-1) == '.')
                    {
                        setValue(`${eval(value.replace('()','(0)'))}`)
                    }
                    
                    else{
                        setValue(`${eval(value.replace('()','(0)'))}`)
                    }
                    // console.log('equal Brakets')
                }
                // else{
                //     console.log('Unequal Brakets')
                // }
            } catch (error) {
                setValue('Format Error')
            }
        }

        else if (val == '()') {
            if (value == '0') {
                setValue('(')
                setBracketOpen(true)
            }
            else if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '/' || value.slice(-1) == '*'
                || value.slice(-1) == '%' || value.slice(-1) == '.') {
                setValue(value + '(')
                setBracketOpen(true)
            }
            else {
                if (bracketOPen == true) {
                    setValue(value + ')')
                    setBracketOpen(false)
                }
                else {
                    setValue(value + '(')
                    setBracketOpen(true)
                }
            }
        }
        else if(value == 'Format Error'){
            setValue(val)
        }
        else {
            if (value == '0') {
                if (isNaN(val)) {
                    setValue(value + val)
                }

                else {
                    setValue(val)
                }
            }
            else if (isNaN(val)) {
                if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '/' || value.slice(-1) == '*'
                    || value.slice(-1) == '%' || value.slice(-1) == '.') {
                    setValue(value.slice(0, -1) + val)
                }
                else {
                    setValue(value + val)
                }
            }
            else {
                setValue(value + val)
            }
        }
    }


    return (

        // 1st Half Of App Show Every Button Click on Another Half of App
        <View style={styles.main_screen}>
            <ScrollView style={styles.main_screen_display} ref={scrollViewRef} 
            onContentSizeChange={()=> scrollViewRef.current.scrollToEnd({animated:true})}>
                <Text style={styles.main_screen_display_text}>
                    {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Text>
            </ScrollView>

            {/* 2nd Half Start From Here */}

            {/* 2nd Half Box */}
            <View style={styles.main_screen_keypad}>

                {/* // 1st Row of Keypad */}
                <View style={styles.main_screen_keypad_row}>
                    <Pressable onPress={() => handlePress("AC")}>
                        <View style={styles.btn11_outer}>
                            <Text style={styles.bg1_button}>AC</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress("()")}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>()</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress("%")}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>%</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress("/")}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>/</Text>
                        </View>
                    </Pressable>
                </View>

                {/* // 2nd Row of Keypad */}
                <View style={styles.main_screen_keypad_row}>
                    <Pressable onPress={() => handlePress("7")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>7</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress("8")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>8</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress("9")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>9</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress("*")}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>*</Text>
                        </View>
                    </Pressable>
                </View>

                {/* // 3rd Row of Keypad */}
                <View style={styles.main_screen_keypad_row}>
                    <Pressable onPress={() => handlePress("4")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>4</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress("5")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>5</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress("6")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>6</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress("-")}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>-</Text>
                        </View>
                    </Pressable>
                </View>

                {/* // 4th Row of Keypad */}
                <View style={styles.main_screen_keypad_row}>
                    <Pressable onPress={() => handlePress("1")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>1</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress("2")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>2</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress("3")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>3</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress("+")}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>+</Text>
                        </View>
                    </Pressable>
                </View>

                {/* // 5th Row of Keypad */}
                <View style={styles.main_screen_keypad_row}>
                    <Pressable onPress={() => handlePress("0")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>0</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress(".")}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>.</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress("back")}>
                        <View style={styles.btn11_outer}>
                            <Text style={styles.bg1_button}>&lt;</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress("=")}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg2_button}>=</Text>
                        </View>
                    </Pressable>
                </View>


            </View>

        </View>
    );
};

export default MainScreen;
