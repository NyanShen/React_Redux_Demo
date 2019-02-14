import React, {Component} from "react";

const FormItemHoc = WrappedComponent => {
    return class extends Component {

        constructor(props) {
            super(props);
            this.state = {
                name : ''
            }
        }

        onInputChange(e) {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        render() {
            const newProps = {
                name: {
                    value: this.state.name,
                    onChange: (e) => this.onInputChange(e)
                }
            };
            return <WrappedComponent {...this.props} {...newProps}/>
        }
    }
};

export default FormItemHoc;