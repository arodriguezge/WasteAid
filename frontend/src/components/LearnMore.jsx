import React, {Component} from 'react'
import Footer from './Footer'
import Header from './Header'
import {faq} from '../hardCodedContent/faqResource'

// corresponding style file: _learnMore.scss


// answer in item card
function AnswerText(props) {
    let answersAndLinks = props.answers.concat(props.links);

    return (
            answersAndLinks.map((item, index) => {
                if (item.search("http") > -1) {
                    return (
                        <div className="answer-div" key={index}>
                            <a href={item} target="_blank" rel="noopener noreferrer">{item}</a>
                        </div>
                    )
                }
                return <div className="answer-div" key={index}>{item}</div>
            })
        )
}


// item card
class QuestionAndAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answerVisible: false,
            toggleSwitchChar: String.fromCharCode(9660),
            toggleHint: "show answer"
        };
        this.toggleAnswer = this.toggleAnswer.bind(this);
    }


    toggleAnswer() {
        if (this.state.answerVisible === true) {
            this.setState({
                answerVisible: false,
                toggleSwitchChar: String.fromCharCode(9660),
                toggleHint: "show answer"
            })
        } else {
            this.setState({
                answerVisible: true,
                toggleSwitchChar: String.fromCharCode(9650),
                toggleHint: "hide answer"
            })
        }
    }


    render() {
        return (
            <div className="item-card-faq">
                <table className="table-faq">
                    <tbody>
                    <tr>
                        <td className="triangle">
                            <div className="answer-toggle-switch-faq" onClick={this.toggleAnswer}
                                 title={this.state.toggleHint}>
                                &nbsp;{this.state.toggleSwitchChar}
                            </div>
                        </td>
                        <td className="question">
                            <div className="question-faq">{this.props.question}</div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            {this.state.answerVisible ? <AnswerText answers={this.props.answers} links={this.props.links} /> : null}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


// this page
class FrequentlyAskedQuestions extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="container">
                    <h4 className="h4-faq">Frequently Asked Questions</h4>

                    <div className="">
                        {faq.map((item, index) => {
                            return (
                                <QuestionAndAnswer question={item.question} answers={item.answers} links={item.links}
                                                   key={index}/>
                            )
                        })}
                    </div>

                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default FrequentlyAskedQuestions
