import data from "../mock/data.json";

import Button from "./ui/Button";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-apple-50 to-apple-100 h-[300px] flex items-center justify-center flex-col rounded-custom">
      <h2 className="subtitle title-gradient mb-5">
        {data["seccion4-contact"].title}
      </h2>
      <div className="flex items-center justify-center">
        <Button>
          <a href="mailto:9Gp2K@example.com" target="_blank" rel="noreferrer">
            Contactar
          </a>
        </Button>
      </div>
    </div>
  );
};
export default Contact;
