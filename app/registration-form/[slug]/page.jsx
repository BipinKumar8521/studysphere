import Form from "../_components/Form";
import "./style.css";

const RegistrationForm = ({ params }) => {
  console.log(params);

  return <Form role={params.slug} />;
};

export default RegistrationForm;
