import React from 'react';
import NavigationBar from '../components/NavigationBar'

class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Customized error handling goes here!
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{height: '100vh'}} className="text-center">
        <NavigationBar />
          <div className="pt-5">
            <h1 >3By encountered an error! Oh My!</h1>
            <h3>go back but if the error persist try later today. Thank you</h3>
          </div>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default GlobalErrorBoundary;