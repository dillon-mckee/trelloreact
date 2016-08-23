var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props) {

    return (
        <div className="cards">
          <div className="cardText">{props.cardText}</div>
        </div>
    );
};

var List = function(props) {
  var numberCards = props.cards.map(function(val,index){
    return <Card key={index} cardText={val} />
  });

    return (
      <div className="lists">
        <div className="listTitle">{props.listTitle}
          {numberCards}
        </div>
      </div>
    );
  };

var Board = function(props) {
  return (
    <div className="board">
      <div className="boardTitle">{props.boardTitle}
      <List listTitle="Thinkful"/>
      <List listTitle="Jobs"/>
      </div>
    </div>
  )
}
document.addEventListener('DOMContentLoaded', function() {
  //ReactDOM.render(<Board boardTitle="MY BOARD"/>, document.getElementById('app'));
  ReactDOM.render(<List listTitle="Coding" cards={['card1', 'card2', 'card3', 'card4']}/>, document.getElementById('app'));

});
