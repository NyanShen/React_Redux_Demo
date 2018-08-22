import React from "react";
import {Steps, Button} from "antd";

import ProcessIndex from "page/process/ProcessIndex";
import "./index.scss";

const Step = Steps.Step;

class ProcessRouter extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0
        }
    }

    next() {
        const currentStep = this.state.currentStep + 1;
        this.setState({ currentStep });
    }

    prev() {
        const currentStep = this.state.currentStep - 1;
        this.setState({ currentStep });
    }

    render() {
        const steps = [{
            title: 'First',
            content: 'First-content',
        }, {
            title: 'Second',
            content: 'Second-content',
        }, {
            title: 'Last',
            content: 'Last-content',
        }];
        const { currentStep } = this.state;
        return (
            <ProcessIndex>
                <Steps current={currentStep}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div className="steps-content">{steps[currentStep].content}</div>
                <div className="steps-action">
                    {
                        currentStep < steps.length - 1
                        && <Button type="primary" onClick={() => this.next()}>Next</Button>
                    }
                    {
                        currentStep === steps.length - 1
                        && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                    }
                    {
                        currentStep > 0
                        && (
                            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                Previous
                            </Button>
                        )
                    }
                </div>
            </ProcessIndex>
        )
    }
}

export default ProcessRouter;