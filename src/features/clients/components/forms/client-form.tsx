import { useForm } from "react-hook-form";
import { ClientValidationConstants } from "../../constants/client-validation-constants";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import {
  createNewClient,
  updateClient,
} from "../../redux/clients-async-methods";

function ClientForm({
  isUpdate,
  client,
  countries,
  deleteClientFunction,
}: {
  isUpdate: boolean;
  client: any;
  countries: Array<any>;
  deleteClientFunction: any;
}) {
  const schema = Yup.object().shape({
    name: Yup.string()
      .required()
      .min(ClientValidationConstants.CLIENT_NAME_SIZE_MIN)
      .max(ClientValidationConstants.CLIENT_NAME_SIZE_MAX),
    address: Yup.string()
      .required()
      .min(ClientValidationConstants.CLIENT_ADDRESS_SIZE_MIN)
      .max(ClientValidationConstants.CLIENT_ADDRESS_SIZE_MAX),
    city: Yup.string()
      .required()
      .min(ClientValidationConstants.CLIENT_ADDRESS_SIZE_MIN)
      .max(ClientValidationConstants.CLIENT_ADDRESS_SIZE_MAX),
    zipCode: Yup.number()
      .required()
      .min(ClientValidationConstants.CLIENT_ZIP_CODE_MIN)
      .max(ClientValidationConstants.CLIENT_ZIP_CODE_MAX),
    country: Yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: client ? client.name : "",
      address: client ? client.address : "",
      city: client ? client.city : "",
      zipCode: client ? client.zipCode : 0,
      country: client
        ? client.country
        : countries.length !== 0
        ? countries[0].name
        : "Select Country",
    },
  });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (data: any) => {
    if (isUpdate) dispatch(updateClient({ data: data, id: client.id }));
    else dispatch(createNewClient(data));
  };

  return (
    <form className="modal__content" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-box">
        <label className="sr-only">Name</label>
        <input
          id="client-name"
          className="input-box__input-field"
          type="text"
          placeholder="Name"
          aria-label="Name"
          {...register("name")}
        />
        {errors.name && (
          <span className="validation-error-message">
            {errors.name.message?.toString()}
          </span>
        )}
      </div>
      <div className="input-box">
        <label className="sr-only">Name</label>
        <input
          id="client-address"
          className="input-box__input-field"
          type="text"
          placeholder="Address"
          aria-label="Address"
          {...register("address")}
        />
        {errors.address && (
          <span className="validation-error-message">
            {errors.address.message?.toString()}
          </span>
        )}
      </div>
      <div className="input-box">
        <label className="sr-only">City</label>
        <input
          id="client-city"
          className="input-box__input-field"
          type="text"
          placeholder="City"
          aria-label="City"
          {...register("city")}
        />
        {errors.city && (
          <span className="validation-error-message">
            {errors.city.message?.toString()}
          </span>
        )}
      </div>
      <div className="input-box">
        <label className="sr-only">ZipCode</label>
        <input
          id="client-zip-code"
          className="input-box__input-field"
          type="number"
          placeholder="ZipCode"
          aria-label="ZipCode"
          {...register("zipCode")}
        />
        {errors.zipCode && (
          <span className="validation-error-message">
            {errors.zipCode.message?.toString()}
          </span>
        )}
      </div>

      <div className="input-box">
        <label className="sr-only">Client</label>
        <select
          id="client-client"
          className="input-box__input-field input-box__select"
          aria-label="Client"
          defaultValue={
            client
              ? client.country
              : countries.length !== 0
              ? countries[0].name
              : "Select Country"
          }
          {...register("country")}
        >
          <option value="Select Client" disabled>
            Select Country
          </option>
          {countries.map((country) => (
            <option value={country.name} key={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        {errors.country && (
          <span className="validation-error-message">
            {errors.country.message?.toString()}
          </span>
        )}
      </div>

      <div className="modal__controls">
        <button
          type="submit"
          className="btn btn--primary gray-hover"
          aria-label="Save Client"
        >
          Save
        </button>
        <ResetOrDeleteButton
          isUpdate={isUpdate}
          resetFormFunction={reset}
          deleteClientFunction={deleteClientFunction}
        />
      </div>
    </form>
  );
}
export default ClientForm;

function ResetOrDeleteButton({
  isUpdate,
  resetFormFunction,
  deleteClientFunction,
}: {
  isUpdate: boolean;
  resetFormFunction: any;
  deleteClientFunction: any;
}) {
  return (
    <>
      {!isUpdate && (
        <button
          type="reset"
          className="btn btn--secondary gray-hover"
          aria-label="Reset Form"
          onClick={() => resetFormFunction()}
        >
          Reset
        </button>
      )}
      {isUpdate && (
        <button
          type="button"
          className="btn btn--secondary btn--secondary--danger gray-hover"
          aria-label="Delete Client"
          onClick={() => deleteClientFunction()}
        >
          Delete
        </button>
      )}
    </>
  );
}
