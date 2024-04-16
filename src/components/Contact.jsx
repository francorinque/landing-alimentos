import Button from "./ui/Button";

const Contact = () => {
  return (
    <div>
      <h2 className="subtitle title-gradient mb-4">Contáctanos</h2>
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
