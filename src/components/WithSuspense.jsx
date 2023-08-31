import React, {Suspense} from "react";
import Spinner from 'react-bootstrap/Spinner';

export default function WithSuspense(WrappedComment){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state ={
                props: props
            };
        }

        componentDidMount(){

        }

        componentWillUnmount(){

        }

        handleChange(){
            this.setState({
                props: this.props
            });
        }
        
        render(){
            return (
                <Suspense fallback={<Spinner animation="border" />}>
                    <WrappedComment {...this.props}/>
                </Suspense>
            )
        }
    }
}