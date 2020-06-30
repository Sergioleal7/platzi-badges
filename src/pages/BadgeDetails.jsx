import React from 'react';
import { Link } from 'react-router-dom';
import confLogo from '../assets/images/platziconf-logo.svg';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
import '../assets/styles/badgeDetails.css';

const BadgeDetails = (props) => {
    const badge = props.badge;
    
    return (
        <React.Fragment>
        <div className="BadgeDetails__hero ">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                       <img src={confLogo} alt="Logo de la conferencia"/>
                    </div>
                    <div className="col-6 BadgeDetails__hero-attendant-name">
                       <h1>{badge.firstName} {badge.lastName}</h1>
                    </div>
                </div>
            </div>
       </div>
       <div className="container">
           <div className="row">
               <div className="col">
                 <Badge firstName={badge.firstName} lastName={badge.lastName} email={badge.email} jobTitle={badge.jobTitle} twitter={badge.twitter} />
               </div>
                <div className="col text-center">
                   <h2>Actions</h2>
                   <div>
                       <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link>
                   </div>
                   <div>
                       <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                       <DeleteBadgeModal 
                        isOpen={props.ModalisOpen}
                        onClose={props.onCloseModal}
                        onDeleteBadge={props.onDeleteBadge}
                        />
                   </div>
                </div>
          </div>
       </div>
      </React.Fragment>
    )
}

export default BadgeDetails