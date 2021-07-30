import React, { useState, useEffect, useRef } from 'react';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { Animated, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

const LoadSwitch = (props) => {

    const attr = {
      toggleOnColor: props.togglOnColor ? props.togglOnColor : 'white',
      toggleOffColor: props.toggleOffColor ? props.toggleOffColor : 'blue',
      switchOnColor: props.switchOnColor ? props.switchOnColor : 'blue',
      switchOffColor: props.switchOffColor ? props.switchOffColor : 'white',
      switchBorderColor: props.switchBorderColor ? props.switchBorderColor : 'black',
      shape: props.shape ? props.shape == 'Box' ? 0 : 100 : 100,
    }

    const [toggleColor] = useState(new Animated.Value(0));
    const [toggleWidth] = useState(new Animated.Value(0));
    const [togglePosition] = useState(new Animated.Value(wp(0.5)));
    const [marginLeft] = useState(new Animated.Value(0));
    const [switchColor] = useState(new Animated.Value(0));
    let prevStatus = useRef(false);

    const animateToggle = (status) => {
      prevStatus.current = status
      if(status){
        Animated.timing(toggleWidth,{
          toValue: 1,
          duration: 250,
          useNativeDriver: false
        }).start(()=>{
          Animated.parallel([
            Animated.timing(toggleColor,{
              toValue: 1,
              duration: 500,
              useNativeDriver: false
            }),
            Animated.timing(toggleWidth,{
              toValue: 0,
              duration: 500,
              useNativeDriver: false,
            }),
            Animated.timing(togglePosition,{
              toValue: wp(7),
              duration: 500,
              useNativeDriver: false,
            }),
            Animated.timing(switchColor,{
              toValue: 1,
              duration: 500,
              useNativeDriver: false
            })
          ]).start()
        })
      }else{
        Animated.parallel([
          Animated.timing(toggleWidth,{
            toValue: 1,
            duration: 250,
            useNativeDriver: false,
          }),
          Animated.timing(marginLeft,{
            toValue: -10,
            duration: 250,
            useNativeDriver: false
          })
        ]).start(() => {
          Animated.parallel([
            Animated.timing(toggleColor,{
              toValue: 0,
              duration: 500,
              useNativeDriver: false
            }),
            Animated.timing(toggleWidth,{
              toValue: 0,
              duration: 500,
              useNativeDriver: false,
            }),
            Animated.timing(togglePosition,{
              toValue: wp(0.5),
              duration: 500,
              useNativeDriver: false,
            }),
            Animated.timing(marginLeft,{
              toValue: 0,
              duration: 250,
              useNativeDriver: false
            }),
            Animated.timing(switchColor,{
              toValue: 0,
              duration: 500,
              useNativeDriver: false
            })
          ]).start()
        })
      }
    }

    const toggleColorInterpolate = toggleColor.interpolate({
      inputRange: [0, 1],
      outputRange: [attr.toggleOffColor, attr.toggleOnColor]
  });

    const switchColorInterpolate = switchColor.interpolate({
      inputRange: [0, 1],
      outputRange: [attr.switchOffColor, attr.switchOnColor]
  });

    const toggleWidthInterpolate = toggleWidth.interpolate({
      inputRange: [0,1,2],
      outputRange: [wp('10%'), wp('13%'), wp('16.8%')],
    })

    useEffect(()=>{
      if (prevStatus.current !== props.status) {
        animateToggle(props.status)
      }
    },[props.status])

    return (
        <Animated.View style={[styles.switchFrame,{backgroundColor: switchColorInterpolate, borderColor: attr.switchBorderColor, borderRadius: attr.shape}]}>
            <TouchableOpacity style={styles.buttonFrame} activeOpacity={1} onPress={()=>props.onPress()}>
                <Animated.View style={[styles.toggleFrame, {
                    width: toggleWidthInterpolate,
                    left: togglePosition,
                    backgroundColor: toggleColorInterpolate,
                    marginLeft: marginLeft,
                    borderRadius: attr.shape,
                }]} />
            </TouchableOpacity>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    switchFrame: {
        height: hp('5.4%'),
        width: wp('18.2%'),
        borderWidth: 0.7,
        justifyContent: 'center'
    },
    toggleFrame:{
        height: 40,
        marginHorizontal: 2,
        position: 'absolute',
    },
    buttonFrame: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export { LoadSwitch };


/* 
    ALLOW
    1. Styles
        1. Border Color
        2. Border Width
        3. Toggle Color
        4. Switch Color
    2. Data
        1. OnPress
        2. Status
    3. Design
        1. Round
        2. Square
*/
