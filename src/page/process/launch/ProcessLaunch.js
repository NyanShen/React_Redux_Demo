import React from "react";
import {connect} from "react-redux";
import {Steps, Button} from "antd";

import MailPart from "page/process/launch/MailPart";
import ProcessIndex from "page/process/ProcessIndex";
import {initState} from "reduxModel/actions/ProcessAction";
import "./index.scss";

const mapStateToProps = state => {
    return {
        selectedMails: state.ProcessReducer.selectedMails
    }
};

const mapDispatchToProps = {
    initProcessState: initState
};

const Step = Steps.Step;

@connect(mapStateToProps, mapDispatchToProps)
class ProcessRouter extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0
        }
    }

    componentDidMount() {
        this.props.initProcessState();
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
            title: '邮件信息',
            content: <MailPart />,
        }, {
            title: '业务信息',
            content: 'Second-content',
        }, {
            title: '流程信息',
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