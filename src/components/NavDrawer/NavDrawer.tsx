import { useMatch, useNavigate } from "@solidjs/router";
import {
  View,
  Text,
  IntrinsicNodeProps,
  ElementNode,
} from "@lightningtv/solid";
import { Column } from "@lightningtv/solid/primitives";
import styles from "./NavDrawer.styles";
import Icon from "../Icon";

interface NavButtonProps extends IntrinsicNodeProps {
  icon: string;
  children: string;
}

const NavButtonTextStyles = {
  fontSize: 38,
  x: 116,
  y: 18,
  height: 50,
  alpha: 0,
  $active: {
    alpha: 1,
  },
};

function NavButton(props: NavButtonProps) {
  return (
    <View {...props} forwardStates style={styles.NavButton}>
      <View y={-16}>
        <Icon scale={0.5} name={props.icon} />
      </View>
      <Text style={NavButtonTextStyles}>{props.children}</Text>
    </View>
  );
}

export default function NavDrawer(props) {
  let backdrop: ElementNode | undefined;
  const navigate = useNavigate();
  function onFocus(this: ElementNode) {
    backdrop!.states.add("$focus");
    this.children.forEach((c) => c.states!.add("$active"));
    this.children[this.selected || 0].setFocus();
  }

  function onBlur(this: ElementNode) {
    backdrop!.states.remove("$focus");
    this.selected = 0;
    this.children.forEach((c) => c.states!.remove("$active"));
  }

  function handleNavigate(page: string) {
    const isOnPage = useMatch(() => page);
    if (isOnPage()) {
      return props.focusPage();
    }

    navigate(page);
  }

  return (
    <>
      <View
        flexItem={false}
        width={300}
        height={150}
        x={30}
        y={15}
        zIndex={105}
        alpha={props.showWidgets ? 1 : 0.01}
      >
        <Text
          x={20}
          y={170}
          contain='width'
          width={360}
          fontSize={20}
        >
          its just a poc/test using solidjs + webgl, not a stable version =p
        </Text>
        <View y={-60} src='./assets/watch-brasil.png' width={300} height={300} />
      </View>
      <Column
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
        style={styles.Column}
        scroll="none"
      >
        <NavButton
          onEnter={() => handleNavigate("/browse/all")}
          icon="trending"
        >
          Trending
        </NavButton>
        <NavButton icon="movie" onEnter={() => handleNavigate("/browse/movie")}>
          Movies
        </NavButton>
        <NavButton icon="tv" onEnter={() => handleNavigate("/browse/tv")}>
          TV
        </NavButton>
      </Column>
      <View skipFocus ref={backdrop} style={styles.Gradient}></View>
    </>
  );
}
