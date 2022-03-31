import React from 'react';

export const Form = () => {
  return (
    <div>
      <h1> Movies Form </h1>
      <form>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Movie Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='form-control'
            placeholder='Movie Name'
          />
          <div id='nameHelp' class='form-text'>
            Insert the name of the movie here.
          </div>

          <div className='mb-3'>
            <label htmlFor='year' className='form-label'>
              Release Year
            </label>
            <input
              type='number'
              id='year'
              name='year'
              className='form-control'
              placeholder='Movie Year'
            />
            <div id='nameHelp' class='form-text'>
              Insert the year the movie was released.
            </div>
          </div>

          <div className='mb-3'>
            <label htmlFor='review' className='form-label'>
              Review
            </label>
            <textarea
              rows='3'
              type='text'
              id='review'
              name='review'
              className='form-control'
              placeholder='Movie Review'
            />
            <div id='nameHelp' class='form-text'>
              Type a short but nice review about this movie here.
            </div>
          </div>
          <button className='btn btn-primary' type='submit'>
            Submit Movie Info
          </button>
        </div>
      </form>
    </div>
  );
};
