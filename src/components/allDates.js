import React,{ Component } from 'react';

const initialData = [
  { name: 'Carry Strange',
    image: '',
    city: 'New York',
    age: '40',
    job: 'Dentist',
    gender: 'Woman',
    personalities: ['Kind', 'Nice', 'Sweet', 'Not Funny'],
    id: 1
  },

  { name: 'John Smith',
    image: '',
    city: 'New York',
    age: '30',
    job: 'Barista',
    gender: 'Man',
    personalities: ['Mean', 'Sensitive', 'Straight-forward', 'Hard working'],
    id: 2
  },

  { name: 'Liz Winnie',
    image: '',
    city: 'LA',
    age: '25',
    job: 'Student',
    gender: 'Woman',
    personalities: ['Reserved', 'Quiet', 'Book Lover', 'Neat'],
    id: 3
  },

  { name: 'Jack Dylan',
    image: '',
    city: 'New York',
    age: '28',
    job: 'Sales Rep',
    gender: 'Man',
    personalities: ['Funny', 'Social', 'Friendly', 'Cool'],
    id: 4
  },

  { name: 'James Wolf',
    image: '',
    city: 'Seattle',
    age: '32',
    job: 'Programmer',
    gender: 'Man',
    personalities: ['Grumpy', 'Responsible', 'Early Bird', 'Anti-social'], id: 5
  },

  { name: 'Annie Cacey',
    image: '',
    city: 'New York',
    age: '39',
    job: 'Baker',
    gender: 'Woman',
    personalities: ['Kind', 'Nice', 'Sweet', 'Lazy'],
    id: 6
  },


]


export default class AllDates extends Component {
  constructor(){
    super()
    this.state = {
      data: initialData
    }
  }
  render(){
    const users = this.state.data
    return(
      <div>
        <h1>Today's dates</h1>
        {
          users && users.map( user =>

          <div key={user.id}>
            <img src={user.image} alt={user.name} />
            <h2>{user.name}</h2>
            <h3>{user.city}</h3>
            <h3>{user.age}</h3>
            <h3>{user.age}</h3>
            <p>{user.personalities.join(', ')}</p>
          </div>)
        }
      </div>
    )
  }
}
