import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/badgesList.css';
import Gravatar from './Gravatar';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('');
  const [ filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => { 
    const result = badges.filter(badge => {
    return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
  });

  setFilteredBadges(result)
}, [ badges, query ]);

  return { setQuery, filteredBadges}
}

function BadgesList (props){
  const badges = props.badges;

  const { query ,setQuery, filteredBadges} = useSearchBadges(badges)

    if (badges.length === 0) {
      return (
        <div>
          <div className="form-group">
          <label htmlFor="">Filter Badges</label>
          <input type="text" className="form-control"
          value = {query}
          onChange = {(e)=> {
            setQuery(e.target.value)
          }}
            />
        </div>
          <h3>No badges were found</h3>
           
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <div className="BadgesList">
        <div className="form-group">
          <label htmlFor="">Filter Badges</label>
          <input type="text" className="form-control"
          value = {query}
          onChange = {(e)=> {
            setQuery(e.target.value)
          }}
            />
        </div>
        <ul className="list-unstyled">
          {filteredBadges.map(badge => {
            return (
              <li key={badge.id}>
                <Link className="text-reset text-decoration-none" to={`badges/${badge.id}`}>
                <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );

}

export default BadgesList;




// import React from 'react';
// import '../assets/styles/badgesList.css';


// class BadgesList extends React.Component {
//     render() {
//         return(
//             <ul className='list-unstyled'>
//             {this.props.badges.map((badge) => {
//                 return (
//                     <li className="badges__list-li" key={badge.id}>
//                         <div className="row">
//                             <div className="col-4">
//                             <h3><img src={badge.avatarUrl} alt=""/> </h3>
//                             </div>
//                             <div className="col-8">
//                             <h3>{badge.firstName} {badge.lastName}</h3>
//                             <p>{badge.jobTitle}</p>
//                             <small>@{badge.twitter}</small>
//                             </div>
//                         </div>
//                     </li>
//                 )
//             })}
//         </ul>
//         )
//     }
// }

// export default BadgesList