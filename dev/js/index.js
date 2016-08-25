var React = require('react');
var ReactDOM = require('react-dom');

var seedData = {
 decks: [
   {
   title: 'Deck',
   questions: [
   <h3>What phase of the MVC model would best describe React?</h3>,
   <h3>What type of data-binding does React use?</h3>,
   <h3>What popular company is associated with React?</h3>,
   <h3>True or False - React has been around for a long time</h3>,
   <h3>What type of components are known as dumb components</h3>,
   <h3>True or False - components pass state to each other</h3>
    ],
   answers: [
   <h4>View</h4>,
    <h4>One way</h4>,
    <h4>Facebook</h4>,
    <h4>False</h4>,
    <h4>Stateful</h4>,
    <h4>False</h4>
   ]
   }
 ]
};
var Card = function(props) {

    return (
        <div className="cards">
          <div className="question">{props.question}</div>
          <div className="answer">{props.answer}</div>
        </div>
    );
};

var List = React.createClass({ // aka ListCointainer
  getInitialState: function() {
    return {
      questions: [seedData.decks[0].questions],
      answers: [seedData.decks[0].answers]
      //textInput: ''
    }
  },
  render: function() {
  var cardAnswers = this.state.answers.map(function(val,index){
        return <Card key={index} answer={val} />
 });
  var cardQuestions = this.state.questions.map(function(val,index){
    return <Card key={index} question={val}  />
  });
    return (
      <div className="lists">
        <div className="deckTitle">{this.props.deckTitle}
          {cardQuestions}
          {cardAnswers}
        </div>
      </div>
    );
  }
});

var Deck = function(props) {
  return (
    <div className="board">
      <div className="boardTitle">{props.seedData.boardTitle}
      <List deckTitle={props.seedData.decks[0].title}/>
      </div>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Deck seedData={seedData} questions={seedData.decks[0].cards} answers={seedData.decks[0].answers} />, document.getElementById('app'));

});
