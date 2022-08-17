import * as React from 'react'
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native'

const DEFAULT_HEIGHT = 300

function useAnimatedBottom(show, height) {
  const animatedValue = React.useRef(new Animated.Value(0))

  const bottom = animatedValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: [-height, 0],
  })

  React.useEffect(() => {
    if (show) {
      Animated.timing(animatedValue.current, {
        toValue: 1,
        duration: 350,
        easing: Easing.bezier(0.28, 0, 0.63, 1),
        useNativeDriver: false,
      }).start()
    } else {
      Animated.timing(animatedValue.current, {
        toValue: 0,
        duration: 350,
        easing: Easing.cubic,
        useNativeDriver: false,
      }).start()
    }
  }, [show])

  return bottom
}

/*
interface Props {
  children: React.ReactNode
  show: boolean
  height?: number
  onOuterClick?: () => void
}
*/

export function ToSModal({
  children,
  show,
  height = DEFAULT_HEIGHT,
  onOuterClick,
}) {
  const { height: screenHeight } = useWindowDimensions()

  const bottom = useAnimatedBottom(show, height)

  return (
    <>
      {show && (
        <Pressable
          onPress={onOuterClick}
          style={[styles.outerOverlay, { height: screenHeight }]}
        >
          <View />
        </Pressable>
      )}
      <Animated.View style={[styles.bottomSheet, { height, bottom }]}>
        {children}
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  outerOverlay: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    backgroundColor: 'black',
    opacity: 0.4,
  },
  bottomSheet: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
})