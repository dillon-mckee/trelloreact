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

var List = React.createClass({ // aka ListCointainer
  onAddSubmit: function(event) {
    event.preventDefault();
   state.lists[0].cards.push(event.target.value);
   console.log(state)
  },
//this.state.props.cards.push(event.target.value)
  onAddInputChanged: function(event) {
    event.preventDefault();
    console.log(event, 'Input Changed')
  },

  render: function() {
  var numberCards = this.props.cards.map(function(val,index){
    return <Card key={index} cardText={val} />
  });
    return (
      <div className="lists">
        <div className="listTitle">{this.props.listTitle}
          {numberCards}
        </div>
      <AddListItem onAddSubmit={this.onAddSubmit} onAddInputChanged={this.onAddInputChanged} />
      </div>
    );
  }
});

var AddListItem = function(props) {
  return (
    <form onSubmit={props.onAddSubmit}>
      <input type="text" onChange={props.onAddInputChanged}>
      </input>
      <button type="submit">Submit</button>
    </form>
    )
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


