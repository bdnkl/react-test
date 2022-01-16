import React from "react";

interface ErrorBoundaryProps {
  errorUI: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(`ErrorBoundary:getDerivedStateFromError ${error}`);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {} // You can also log the error

  render() {
    if (this.state.hasError) {
      if (this.props.errorUI) {
        return this.props.errorUI;
      }
      return <div>Something went wrong</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
