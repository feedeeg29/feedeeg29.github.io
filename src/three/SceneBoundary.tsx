import { Component } from "react";
import type { ReactNode } from "react";

type SceneBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
};

type SceneBoundaryState = {
  hasError: boolean;
};

// Si WebGL no está disponible (o la escena falla), mostramos un fallback en CSS
// en vez de romper toda la página.
export default class SceneBoundary extends Component<SceneBoundaryProps, SceneBoundaryState> {
  state: SceneBoundaryState = { hasError: false };

  static getDerivedStateFromError(): SceneBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn("[HeroScene] No se pudo renderizar la escena 3D:", error.message);
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
