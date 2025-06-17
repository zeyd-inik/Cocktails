import { Form, useNavigation, redirect } from 'react-router';
import './Newsletter.scss';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const user = Object.fromEntries(formData);

  toast.success(`${user.name} is added, please check your email.`);

  return redirect('/');
};

function Newsletter() {
  const navigation = useNavigation();
  const submitting = navigation.state === 'submitting';

  return (
    <div className="Newsletter">
      <div className="wrapper">
        <Form
          method="POST"
          className="form"
        >
          <h3>Our Newsletter</h3>
          <div className="form_row">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
              type="text"
              required
            />
          </div>
          <div className="form_row">
            <label htmlFor="lastName">Last Name</label>
            <input
              name="surName"
              id="lastName"
              type="text"
              required
            />
          </div>
          <div className="form_row">
            <label htmlFor="name">Email</label>
            <input
              name="email"
              type="email"
              required
              defaultValue="test@test.com"
            />
          </div>
          <button type="submit">{submitting ? 'Submitting' : 'Submit'}</button>
        </Form>
      </div>
    </div>
  );
}

export default Newsletter;
