import React, {Component} from 'react'

 class CardComponent extends Component{
    constructor() {
        super()
        this.state = {
            selectedCards: []
        }

    }
     handleCourseClick = (index) => {
         console.log(index)
        const newCards = [...this.state.selectedCards]

         newCards.push(this.props.cards[index])

         this.setState({
             selectedCards: newCards
         })

     }

    render() {
        console.log(this.state.selectedCards)

        const listCards = this.props.cards.map((card, i) =>{
            return(
                <div className="col s2" key={i}>
                    <div className="card hoverable small">
                        <div className="card-image">
                            <img src={card.image} />
                        </div>
                        <div className="card-content">
                            <p>{card.course}</p>
                            <p>{card.instructor}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">$9.99</a>
                        </div>
                    </div>
                    <button onClick={() => this.handleCourseClick(i)} className="btn waves-light waves-effect">Save</button>
                </div>
            )
        })
        return(
            <div>
                {listCards}
            </div>
        )
    }
 }

 export default CardComponent