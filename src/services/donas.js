import axios from "axios";
import Swal from "sweetalert2";
const url = "https://donus.herokuapp.com/donas";

const addDonas = async (data) => {
  try {
    const result = await axios.post(url, data);
    if (result.status === 201) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registro Exitoso',
            showConfirmButton: false,
            timer: 1500
          })
    }
  } catch (error) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Ocurrio un Error',
        showConfirmButton: false,
        timer: 1500
      })
  }
};

const getDonas = async () => {
  const result = await axios.get(url);
  if (result.status === 200) {
      return result.data
  }
};

const deleteDonas = async (id) => {
    try {
        const result = await axios.delete(`${url}/${id}`);
        console.log(result)
        if (result.status === 200) {
            return result.data
        }
    } catch (error) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ocurrio un Error',
            showConfirmButton: false,
            timer: 1500
          })
    }
}


const donas = { addDonas, getDonas, deleteDonas };
export default donas;
