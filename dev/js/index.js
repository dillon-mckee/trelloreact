var React = require('react');
var ReactDOM = require('react-dom');

var state = {
  boardTitle: 'My Trello',
  lists: [
    {title: 'My first list',
    cards: ['car 1', 'card 2', 'card 3']
    },
    {
      title: 'my second list',
      cards: [1,2,3]
    }
  ]
};

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
      <div className="boardTitle">{props.state.boardTitle}
      <List listTitle={props.state.lists[0].title} cards={props.state.lists[0].cards} />
      </div>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Board state={state}/>, document.getElementById('app'));

});


