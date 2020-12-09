import React from 'react';
import styled from 'styled-components';


const Events = ({events}) => {
    return (
            <MainContainer>
              <div className="container">
             <center></center><br/><br/>
            {events.map((event, key) => (
                <div className="row">
                <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                       <h5>{event.Topic}</h5>
                       <p className="card-text">
                           <strong>Date</strong>: {event.Date}
                           <br/>
                           <strong>Time</strong>: {event.Time}
                           <br/>
                           <strong>Seats</strong>: {event.seats}
                           <br/>
                           <strong>Price</strong>: {event.price}
                       </p>
                       
                       <button className="btn btn-dark btn-block">
                           <i className="fas fa-chevron-right"></i>Go Back
                       </button>
                    </div>
                </div>
               </div>
               </div> 
            ))}   
              </div>
            </MainContainer>
        
    );
};

export default Events;

//main container
const MainContainer = styled.div`
   margin: 7rem 0;
`;
