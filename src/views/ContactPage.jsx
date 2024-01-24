import { Container, Button } from "react-bootstrap";

const ContactPage = () => {
  return (
    <Container className="pt-5 text-center">
      <h2 className="mb-4">Cuentanos, ¿en qué te podemos ayudar?</h2>
      <form action="submeter-formulario.php" method="post">
        <p>
          <label htmlFor="email" className="colocar_email">
            Correo: <span className="obligatorio"></span>
          </label>
          <br />
          <input
            type="email"
            name="introducir_email"
            id="email"
            required="obligatorio"
            placeholder="name@example.com"
            style={{ width: "80%", padding: "8px", borderRadius: "5px" }}
          />
        </p>
        <p>
          <label htmlFor="mensaje" className="colocar_mensaje">
            Descripción <span className="obligatorio"></span>
          </label>
          <br />
          <textarea
            name="introducir_mensaje"
            className="texto_mensaje"
            id="mensaje"
            required="obligatorio"
            style={{ width: "80%", padding: "8px", borderRadius: "5px" }}
          ></textarea>
        </p>
        <Button 
          variant="danger" 
          type="submit" 
          name="enviar_formulario" 
          id="enviar" 
          style={{ borderRadius: "5px", height: "30px", lineHeight: "10px", width: "80px" }}
        >
          Enviar
        </Button>

        <p className="aviso">
          <span className="obligatorio"></span>
        </p>
      </form>
    </Container>
  );
};

export default ContactPage;
