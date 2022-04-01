import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const MainForm = () => {
  return (
    <div className='bcg-color d-flex justify-content-center flex-column align-items-center'>
      <h1 className='display-2 text-light'> Movies Form </h1>
      <Formik
        initialValues={{
          name: '',
          year: '',
          review: '',
          genre: 'Action',
        }}
        validate={(values) => {
          let errors = {};

          if (!values.name) {
            errors.name = 'Please provide a movie name.';
          }

          if (!values.year) {
            errors.year = 'Please provide a release year.';
          } else if (values.year.toString().length !== 4) {
            errors.year = 'Year should be only four digits.';
          }

          if (!values.review) {
            errors.review = 'Please provide a review.';
          } else if (values.review.replace(/\s/g, '').length < 15) {
            errors.review = 'Movie review should be at least 15 characters.';
          }

          if (!values.genre) {
            errors.genre = 'Please select a movie genre.';
            console.log('hola');
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          console.log('Form submitted successfully.');
          resetForm();
        }}>
        {({ errors, touched }) => (
          <Form className='card px-5' style={{ width: '480px' }}>
            <div className='mb-4 mt-2'>
              <label htmlFor='name' className='form-label'>
                Movie Name
              </label>
              <Field
                type='text'
                id='name'
                name='name'
                className={
                  !touched.name
                    ? 'form-control'
                    : errors.name
                    ? 'form-control is-invalid'
                    : 'form-control is-valid'
                }
                placeholder='Movie Name'
              />
              <ErrorMessage
                name='name'
                component={() => (
                  <div className='invalid-feedback'>{errors.name}</div>
                )}
              />
              <div id='nameHelp' className='form-text'>
                Insert the name of the movie here.
              </div>

              <div className='mb-3'>
                <label htmlFor='year' className='form-label'>
                  Release Year
                </label>
                <Field
                  type='number'
                  id='year'
                  name='year'
                  className={
                    !touched.year
                      ? 'form-control'
                      : errors.year
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Movie Year'
                />
                <ErrorMessage
                  name='year'
                  component={() => (
                    <div className='invalid-feedback'>{errors.year}</div>
                  )}
                />
                <div id='nameHelp' className='form-text'>
                  Insert the year the movie was released.
                </div>
              </div>

              <div className='mb-3'>
                <label htmlFor='review' className='form-label'>
                  Review
                </label>
                <Field
                  as='textarea'
                  rows='3'
                  type='text'
                  id='review'
                  name='review'
                  className={
                    !touched.review
                      ? 'form-control'
                      : errors.review
                      ? 'form-control is-invalid'
                      : 'form-control is-valid'
                  }
                  placeholder='Movie Review'
                />
                <ErrorMessage
                  name='review'
                  component={() => (
                    <div className='invalid-feedback'>{errors.review}</div>
                  )}
                />
                <div id='nameHelp' className='form-text'>
                  Type a short but nice review about this movie here.
                </div>
              </div>
              <div>
                <div role='group' className='form-check'>
                  <label className='form-check-label mx-4'>
                    <Field
                      className='form-check-input'
                      type='radio'
                      name='genre'
                      value='Action'
                    />
                    Action
                  </label>

                  <label className='form-check-label mx-4'>
                    <Field
                      type='radio'
                      name='genre'
                      value='Comedy'
                      className='form-check-input'
                    />
                    Comedy
                  </label>

                  <label className='form-check-label mx-4'>
                    <Field
                      type='radio'
                      name='genre'
                      value='Drama'
                      className='form-check-input'
                    />
                    Drama
                  </label>
                </div>
                <br />
                <div role='group' className='form-check'>
                  <label className='form-check-label mx-4'>
                    <Field
                      type='radio'
                      name='genre'
                      value='Fantasy'
                      className='form-check-input'
                    />
                    Fantasy
                  </label>

                  <label className='form-check-label mx-4'>
                    <Field
                      type='radio'
                      name='genre'
                      value='Horror'
                      className='form-check-input'
                    />
                    Horror
                  </label>

                  <label className='form-check-label mx-4'>
                    <Field
                      type='radio'
                      name='genre'
                      value='Mystery'
                      className='form-check-input'
                    />
                    Mystery
                  </label>
                </div>
                <br />
                <label className='form-check-label mx-4'>
                  <Field
                    type='radio'
                    name='genre'
                    value='ComRomance'
                    className='form-check-input'
                  />
                  Romance
                </label>
              </div>
              <br />

              <div className='form-check'>
                <label className='form-check-label'>
                  <Field
                    type='checkbox'
                    name='toggle'
                    className='form-check-input'
                  />
                  This movie is rated +18 for audiences.
                </label>
              </div>

              <button className='btn btn-primary' type='submit'>
                Submit Movie Info
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
