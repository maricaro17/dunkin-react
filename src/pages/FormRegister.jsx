import React from "react";
import { useForm } from "../hook/useForm";
import donas from "../services/donas";

const FormRegister = () => {
  const [form, handleChange, handleFileChange, handleClickFile, reset] =
    useForm({
      name: "",
      price: "",
      image: "",
    });

  const { name, price, image } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    donas.addDonas(form)
    reset()
  };


  return (
    <>
      <div className="row usuario container m-auto w-50">
        <h1 className="text-center text-secondary">Registro de productos</h1>
        <div className="col">
          <form
            id="formulario"
            className="d-flex needs-validation flex-column"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="d-flex flex-column mt-2">
              <label htmlFor="validationCustom01" className="form-label">
                Nombre del Producto:
              </label>
              <input
                value={name}
                onChange={handleChange}
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
              />
              <div className="invalid-feedback">
                Ingrese nombre del producto
              </div>
            </div>
            <div className="d-flex flex-column mt-2">
              <label htmlFor="validationCustom01" className="form-label">
                Precio:
              </label>
              <input
                value={price}
                onChange={handleChange}
                type="text"
                className="form-control"
                id="price"
                name="price"
                required
              />
              <div className="invalid-feedback">Ingrese precio</div>
            </div>
            <div className="mt-2">
              <input
                type="file"
                name={image}
                id="fileSelector"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <label htmlFor="validationCustom02" className="form-label">
                Imagen:
              </label>
              <div className="d-flex">
                <input
                  type="button"
                  onClick={handleClickFile}
                  value="Seleccionar Imagen"
                />
                <input
                  className="form-control"
                  type="text"
                  name="imageUrl"
                  id="image"
                  readOnly
                />
              </div>
            </div>

            <div className="d-flex">
              <button
                id="btnGuardar"
                type="submit"
                className="btn btn-primary text-secundary w-100 mt-2 mb-2"
              >
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormRegister;
