import React from "react";
import {
  View,
  Text,
  Dimensions,
  Animated,
  PanResponder,
  TouchableOpacity,
  Easing,
  Image,
  Alert,
} from "react-native";
import { Actions } from "react-native-router-flux";
import style from "./RequestStyle";
import ImagesPath from "../../../utils/common/ImagePath";
import { SvgCssUri } from "react-native-svg";
import Helper from "../../../utils/configs/Helper";

const SCREEN_WIDTH = Dimensions.get("window").width;
const RIGHT_BUTTON_THRESHOLD = -SCREEN_WIDTH / 15;
const FORCE_TO_OPEN_THRESHOLD = SCREEN_WIDTH / 3.5;
const FORCING_DURATION = 350;
const SCROLL_THRESHOLD = SCREEN_WIDTH / 15;
const LEFT_BUTTONS_THRESHOLD = SCREEN_WIDTH / 15;

class Request extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   statusOrder: this.props.request.item.items[0].status == 0 ? false : true,
    // };

    console.log(this.props.request.item);

    const position = new Animated.ValueXY(0, 0);
    this.scrollStopped = false;

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => false, // we don't want the item to be animated with a touch
      onMoveShouldSetPanResponder: () => true, // we want to animate the item with a movement
      onResponderTerminationRequest: () => false,
      onPanResponderGrant: () => {
        this.position.setOffset({ x: this.position.x._value, y: 0 }); // we specify the offset to continue swiping from the place where user left.
        this.position.setValue({ x: 0, y: 0 }); // clearing the position
      },
      onPanResponderMove: (event, gesture) => {
        if (gesture.dx >= SCROLL_THRESHOLD) {
          this.enableScrollView(true);
          const x = gesture.dx - SCROLL_THRESHOLD;
          this.position.setValue({ x, y: 0 });
        } else if (gesture.dx <= -SCROLL_THRESHOLD) {
          this.enableScrollView(true);
          const x = gesture.dx + SCROLL_THRESHOLD;
          this.position.setValue({ x, y: 0 });
        }
      },
      onPanResponderRelease: (event, gesture) => {
        this.position.flattenOffset(); // adding animated value to the offset value then it reset the offset to 0.
        if (gesture.dx > 0) {
          this.userSwipedRight(gesture);
        } else {
          this.userSwipedLeft(gesture);
        }
      },
      onPanResponderTerminate: () => {
        Animated.spring(this.position, {
          toValue: { x: 0, y: 0 },
        }).start();
      },
    });

    this.position = position;
    this.panResponder = panResponder;
  }

  getRightButtonProps() {
    const opacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH, -120, -35],
      outputRange: [0, 1, 0.25],
    });
    const width = this.position.x.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });

    return {
      opacity,
      width,
    };
  }

  getLeftButtonProps() {
    const opacity = this.position.x.interpolate({
      inputRange: [35, 75, 320],
      outputRange: [0, 1, 0.25],
    });
    const width = this.position.x.interpolate({
      inputRange: [0, 70],
      outputRange: [0, 70],
    });
    return {
      opacity,
      width,
    };
  }

  resetPosition() {
    Animated.timing(this.position, {
      toValue: { x: 0, y: 0 },
      duration: 400,
    }).start();
  }

  resetPositionLeft() {
    Animated.timing(this.position, {
      toValue: { x: -400, y: 0 },
      duration: 400,
    }).start();
  }

  completeSwipe(dimension, callback) {
    console.log(dimension);
    const x = dimension === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.position, {
      toValue: { x, y: 0 },
      duration: FORCING_DURATION,
    }).start();
    callback();
  }

  enableScrollView(isEnabled) {
    if (this.scrollView !== isEnabled) {
      this.props.swipingCheck(isEnabled);
      this.scrollView = isEnabled;
    }
  }

  userSwipedLeft(gesture) {
    console.log(gesture.moveX);
    console.log(SCREEN_WIDTH / 1.5);
    if (gesture.moveX < 195) {
      // this.resetPositionLeft();
      // this.completeSwipe("left", this.props.leftButtonPressed.bind(this));
    }
    // if(gesture.moveX)
    // if (gesture.dx >= FORCE_TO_OPEN_THRESHOLD) {
    //   this.completeSwipe('left', this.props.rightButtonPressed.bind(this));
    // } else if (
    //   gesture.dx <= -LEFT_BUTTONS_THRESHOLD &&
    //   gesture.dx - FORCE_TO_OPEN_THRESHOLD
    // ) {
    //   this.showButton('left');
    // } else {
    //   this.resetPositionLeft();
    // }
  }

  userSwipedRight(gesture) {
    console.log(gesture.moveX);
    if (gesture.moveX > 280) {
      this.completeSwipe("right", this.props.rightButtonPressed.bind(this));
    }
    // else {
    //   this.showButton('right');
    // }
    // alert('SSS');
    // if (gesture.dx >= FORCE_TO_OPEN_THRESHOLD) {
    //   this.completeSwipe('right', this.props.leftButtonPressed.bind(this));
    // } else if (
    //   gesture.dx >= LEFT_BUTTONS_THRESHOLD &&
    //   gesture.dx < FORCE_TO_OPEN_THRESHOLD
    // ) {
    //   this.showButton('right');
    // } else {
    //   this.resetPosition();
    // }
  }

  showButton(side) {
    const x = side === "right" ? SCREEN_WIDTH / 4 : -SCREEN_WIDTH / 4; // 4 from 4.5 // BURASI DEĞİŞTİRİLECEK
    Animated.timing(this.position, {
      toValue: { x, y: 0 },
      duration: 400,
      easing: Easing.out(Easing.quad),
    }).start(() => this.enableScrollView(false));
  }

  render() {
    const request = this.props.request.item;
    return (
      <View>
        {/* <Animated.View style={[style.leftButtonContainer]}>
          <TouchableOpacity
            onPress={() =>
              this.completeSwipe("right", () => this.props.leftButtonPressed())
            }
          >
            <Text style={style.textStyle} numberOfLines={1}>
              Re-Activate Request
            </Text>
          </TouchableOpacity>
        </Animated.View> */}
        <Animated.View
          style={[style.valueContainer, this.position.getLayout()]}
          {...this.panResponder.panHandlers}
        >
          <View
            style={[
              style.containerStyle,
              //   !this.state.statusOrder
              //     ? style.valueStyleAccept
              //     :
              style.valueStyle,
            ]}
          >
            <View style={style.roomContainer}>
              <View style={style.containerImg}>
                <SvgCssUri
                  width="80%"
                  height="80%"
                  uri={Helper.getImageUrl(request.icon)}
                />
              </View>
            </View>
            <View style={style.serviceContainer}>
              <View style={style.serviceValue}>
                <View style={style.titleService}>
                  <Text style={style.labelStyle}>{request.item_title}</Text>
                  <Text style={style.subLabeleStyle}>
                    {request.item_description}
                  </Text>
                  {/* <Text style={style.timeLabelStyle}>3 min ago</Text> */}
                </View>
              </View>
            </View>
          </View>
        </Animated.View>

        <Animated.View
          style={[style.rightButtonContainer, this.getRightButtonProps()]}
        >
          <TouchableOpacity
            onPress={() =>
              this.completeSwipe("left", () => this.props.leftButtonPressed())
            }
          >
            <Text style={style.textStyle} numberOfLines={1}>
              Request Delete
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }

  // ---- show image request ----
  showImageRequest(status) {
    if (status)
      return (
        <View style={style.imageServiceContainer}>
          <Image source={ImagesPath.img7} />
        </View>
      );
    else
      return (
        <View style={style.imageAcceptServiceContainer}>
          <Image source={ImagesPath.iconTick} />
        </View>
      );
  }
}

export default Request;
