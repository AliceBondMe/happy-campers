import { Form, Formik } from 'formik';
import * as yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import {
  DateInput,
  DateInputWrap,
  ErrorMessageStyled,
  Header,
  IconWrap,
  InputField,
  TextareaField,
  Wrap,
} from './BookForm.styled';
import { Button } from 'components/Advert/Advert.styled';
import { Icon } from 'components/Icon/Icon';

const validationSchema = yup.object().shape({
  name: yup.string().min(3).max(30).required('A name is required'),
  email: yup
    .string()
    .email('Invalid email')
    .required('Valid email is required'),
  date: yup
    .date()
    .min(new Date(), 'Date must be at least the current date')
    .required('A date is required'),
  comment: yup.string().max(300),
});

export const BookForm = () => {
  const handleSubmit = values => {
    window.location.reload();
  };

  const initialValues = {
    name: '',
    email: '',
    date: '',
    comment: '',
  };
  return (
    <Wrap>
      <Header>Book your campervan now</Header>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, handleChange }) => (
          <Form>
            <InputField type="text" name="name" placeholder="Name" required />
            <ErrorMessageStyled name="name" component="p" />
            <InputField
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <ErrorMessageStyled name="email" component="p" />

            <DateInputWrap>
              <DateInput
                selected={values.date}
                onChange={date => setFieldValue('date', date)}
                placeholderText="Booking date"
                required
                dateFormat="dd/MM/yyyy"
                calendarStartDay={1}
              />
              <IconWrap>
                <Icon name={'icon-calendar'} width={20} height={20} />
              </IconWrap>
            </DateInputWrap>
            <ErrorMessageStyled name="date" component="p" />

            <TextareaField
              as="textarea"
              type="text"
              name="comment"
              placeholder="Comment"
              onChange={handleChange}
            />
            <ErrorMessageStyled name="comment" component="p" />

            <Button type="submit">Send</Button>
          </Form>
        )}
      </Formik>
    </Wrap>
  );
};
